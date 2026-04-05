/**
 * ========================================
 * MESSAGE CONTROLLER
 * ========================================
 * Purpose: Handle contact form messages and inquiries
 * Manages messages from recruiters and visitors with validation and storage
 * Note: This controller primarily handles POST (receive messages) and GET (retrieve messages)
 * Admin authentication would be needed for retrieval in production
 */

import Message from '../models/Message.js';
import { handleAsyncError, ValidationError } from '../utils/errorHandler.js';

/**
 * GET /api/messages
 * Retrieve all messages with optional filtering and pagination
 * NOTE: In production, this should be protected with authentication middleware
 * to ensure only authorized admin users can retrieve messages
 * 
 * @query {Boolean} isRead - Filter by read/unread status
 * @query {String} sortBy - Sort field (createdAt, email) | default: -createdAt (newest first)
 * @query {Number} limit - Results per page | default: 50
 * @query {Number} page - Page number for pagination | default: 1
 * @query {String} search - Search in name or email (case-insensitive)
 * 
 * @returns {Object} Success response with messages array and pagination metadata
 */
export const getMessages = handleAsyncError(async (req, res) => {
  // Extract and validate query parameters with safe defaults
  const { 
    isRead, 
    sortBy = '-createdAt', 
    limit = 50, 
    page = 1, 
    search 
  } = req.query;
  
  // Build filter object for MongoDB query
  const filter = {};
  
  // Add isRead filter if provided (convert string to boolean)
  if (isRead !== undefined) {
    filter.isRead = isRead === 'true' || isRead === true;
  }
  
  // Add search filter for name or email (case-insensitive)
  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
    ];
  }
  
  // Parse and validate pagination parameters
  const pageNum = Math.max(1, parseInt(page) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(limit) || 50));
  const skip = (pageNum - 1) * pageSize;
  
  // Build sort object for MongoDB query
  const sortObj = {};
  if (sortBy.startsWith('-')) {
    sortObj[sortBy.substring(1)] = -1;
  } else {
    sortObj[sortBy] = 1;
  }
  
  // Execute database query with filters, sorting, and pagination
  const messages = await Message.find(filter)
    .sort(sortObj)
    .limit(pageSize)
    .skip(skip)
    .lean(); // Using lean() for better performance
  
  // Get total count for pagination metadata
  const total = await Message.countDocuments(filter);
  
  // Return success response with pagination info
  res.status(200).json({
    success: true,
    data: messages,
    pagination: {
      total,
      page: pageNum,
      limit: pageSize,
      pages: Math.ceil(total / pageSize),
      unreadCount: await Message.countDocuments({ isRead: false }),
    },
  });
});

/**
 * GET /api/messages/:id
 * Retrieve a single message by ID and mark it as read
 * 
 * @param {String} id - MongoDB ObjectId of the message
 * @returns {Object} Message object or 404 error
 */
export const getMessageById = handleAsyncError(async (req, res) => {
  // Extract message ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid message ID format');
  }
  
  // Find message and mark as read in one operation
  const message = await Message.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true }
  );
  
  // Return 404 if message not found
  if (!message) {
    return res.status(404).json({
      success: false,
      message: 'Message not found',
    });
  }
  
  // Return the found message (now marked as read)
  res.status(200).json({
    success: true,
    data: message,
  });
});

/**
 * POST /api/messages
 * Create a new message from contact form submission
 * Validates email format, message length, and prevents spam
 * 
 * @body {String} name - Sender's name (required)
 * @body {String} email - Sender's email (required, must be valid format)
 * @body {String} message - Message content (required, 10-1000 characters)
 * 
 * @returns {Object} Created message object with ID and timestamps
 */
export const addMessage = handleAsyncError(async (req, res) => {
  // Extract request body data
  const { name, email, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    throw new ValidationError('Name, email, and message are required fields');
  }
  
  // Validate and sanitize name
  const trimmedName = name.trim();
  if (trimmedName.length < 2 || trimmedName.length > 100) {
    throw new ValidationError('Name must be between 2 and 100 characters');
  }
  
  // Validate email format using regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmedEmail = email.trim().toLowerCase();
  if (!emailRegex.test(trimmedEmail)) {
    throw new ValidationError('Invalid email format');
  }
  
  // Validate and sanitize message content
  const trimmedMessage = message.trim();
  if (trimmedMessage.length < 10 || trimmedMessage.length > 1000) {
    throw new ValidationError('Message must be between 10 and 1000 characters');
  }
  
  // Check for spam: limit messages from same email to prevent flooding
  const recentMessageCount = await Message.countDocuments({
    email: trimmedEmail,
    createdAt: {
      // Check if more than 5 messages in last hour
      $gte: new Date(Date.now() - 60 * 60 * 1000),
    },
  });
  
  if (recentMessageCount >= 5) {
    throw new ValidationError('Too many messages from this email. Please try again later');
  }
  
  // Create new message instance with validated and sanitized data
  const newMessage = new Message({
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage,
    isRead: false, // New messages are unread by default
  });
  
  // Save message to database
  const savedMessage = await newMessage.save();
  
  // Return success response with created message
  res.status(201).json({
    success: true,
    message: 'Thank you for your message! We will get back to you soon',
    data: {
      id: savedMessage._id,
      createdAt: savedMessage.createdAt,
    },
  });
});

/**
 * PUT /api/messages/:id
 * Update a message (mark as read/unread or update content)
 * NOTE: Updating message content should be restricted in production
 * 
 * @param {String} id - MongoDB ObjectId of the message
 * @body {Boolean} isRead - Mark message as read/unread (optional)
 * 
 * @returns {Object} Updated message object
 */
export const updateMessage = handleAsyncError(async (req, res) => {
  // Extract message ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid message ID format');
  }
  
  // Extract update data
  const { isRead } = req.body;
  
  // Build update object with validated fields
  const updateData = {};
  
  // Add isRead to update if provided
  if (isRead !== undefined) {
    if (typeof isRead !== 'boolean') {
      throw new ValidationError('isRead must be a boolean value');
    }
    updateData.isRead = isRead;
  }
  
  // Check if at least one field is being updated
  if (Object.keys(updateData).length === 0) {
    throw new ValidationError('No fields provided for update');
  }
  
  // Find and update message in database
  const updatedMessage = await Message.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  
  // Return 404 if message not found
  if (!updatedMessage) {
    return res.status(404).json({
      success: false,
      message: 'Message not found',
    });
  }
  
  // Return success response with updated message
  res.status(200).json({
    success: true,
    message: 'Message updated successfully',
    data: updatedMessage,
  });
});

/**
 * DELETE /api/messages/:id
 * Delete a message from the database
 * 
 * @param {String} id - MongoDB ObjectId of the message to delete
 * @returns {Object} Confirmation message with deleted data
 */
export const deleteMessage = handleAsyncError(async (req, res) => {
  // Extract message ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid message ID format');
  }
  
  // Find and delete message from database
  const deletedMessage = await Message.findByIdAndDelete(id);
  
  // Return 404 if message not found
  if (!deletedMessage) {
    return res.status(404).json({
      success: false,
      message: 'Message not found',
    });
  }
  
  // Return success response with deleted data
  res.status(200).json({
    success: true,
    message: 'Message deleted successfully',
    data: deletedMessage,
  });
});

/**
 * GET /api/messages/stats
 * Get statistics about messages
 * Returns total count, unread count, and messages by day
 * 
 * @returns {Object} Message statistics including unread count and daily breakdown
 */
export const getMessageStats = handleAsyncError(async (req, res) => {
  // Get total and unread message counts
  const totalCount = await Message.countDocuments();
  const unreadCount = await Message.countDocuments({ isRead: false });
  
  // Aggregate messages by date to show message volume over time
  const messagesByDay = await Message.aggregate([
    {
      // Group messages by the date they were created (ignoring time)
      $group: {
        _id: {
          $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
        },
        count: { $sum: 1 },
      },
    },
    {
      // Sort by date in descending order (most recent first)
      $sort: { _id: -1 },
    },
    {
      // Limit to last 30 days
      $limit: 30,
    },
  ]);
  
  // Return success response with statistics
  res.status(200).json({
    success: true,
    data: {
      totalCount,
      unreadCount,
      readCount: totalCount - unreadCount,
      messagesByDay,
    },
  });
});

/**
 * GET /api/messages/unread
 * Get only unread messages (typically for admin dashboard)
 * 
 * @query {Number} limit - Limit results | default: 20
 * 
 * @returns {Array} Array of unread messages
 */
export const getUnreadMessages = handleAsyncError(async (req, res) => {
  // Extract limit parameter with safe default
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
  
  // Query for all unread messages, sorted by newest first
  const unreadMessages = await Message.find({ isRead: false })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
  
  // Return success response with unread messages
  res.status(200).json({
    success: true,
    count: unreadMessages.length,
    data: unreadMessages,
  });
});

/**
 * PATCH /api/messages/:id/read
 * Mark a specific message as read
 * Convenience endpoint for quick read status updates
 * 
 * @param {String} id - MongoDB ObjectId of the message
 * @returns {Object} Updated message object with read status
 */
export const markMessageAsRead = handleAsyncError(async (req, res) => {
  // Extract message ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid message ID format');
  }
  
  // Update message to mark as read
  const message = await Message.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true }
  );
  
  // Return 404 if message not found
  if (!message) {
    return res.status(404).json({
      success: false,
      message: 'Message not found',
    });
  }
  
  // Return success response
  res.status(200).json({
    success: true,
    message: 'Message marked as read',
    data: message,
  });
});

/**
 * PATCH /api/messages/read/all
 * Mark all messages as read
 * Batch operation for admin convenience
 * 
 * @returns {Object} Count of messages marked as read
 */
export const markAllMessagesAsRead = handleAsyncError(async (req, res) => {
  // Update all unread messages to read status
  const result = await Message.updateMany(
    { isRead: false },
    { isRead: true }
  );
  
  // Return success response with count of updated messages
  res.status(200).json({
    success: true,
    message: `${result.modifiedCount} messages marked as read`,
    data: {
      modifiedCount: result.modifiedCount,
    },
  });
});

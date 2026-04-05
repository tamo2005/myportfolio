/**
 * ========================================
 * MESSAGE ROUTES
 * ========================================
 * Purpose: Define all message/contact-related API endpoints
 * Routes for handling contact form submissions and retrieving messages
 * Includes spam prevention, read status tracking, and statistics
 */

import express from 'express';
import {
  getMessages,
  getMessageById,
  addMessage,
  updateMessage,
  deleteMessage,
  getMessageStats,
  getUnreadMessages,
  markMessageAsRead,
  markAllMessagesAsRead,
} from '../controllers/messageController.js';

// Create Express router instance
const router = express.Router();

/**
 * GET /api/messages
 * Fetch all messages with optional filtering and pagination
 * NOTE: This should be protected with authentication in production
 * Query params: isRead, sortBy, limit, page, search
 */
router.get('/', getMessages);

/**
 * GET /api/messages/stats
 * Get statistics about messages (total, unread, messages by day)
 * NOTE: This route must come before /:id to prevent conflict
 * Should be protected with authentication in production
 */
router.get('/stats', getMessageStats);

/**
 * GET /api/messages/unread
 * Get only unread messages (useful for admin dashboard)
 * NOTE: This route must come before /:id to prevent conflict
 * Should be protected with authentication in production
 * Query params: limit
 */
router.get('/unread', getUnreadMessages);

/**
 * GET /api/messages/:id
 * Fetch a single message by its ID and mark it as read
 * Should be protected with authentication in production
 */
router.get('/:id', getMessageById);

/**
 * POST /api/messages
 * Create a new message from contact form submission
 * This endpoint is PUBLIC and doesn't require authentication
 * Validates email format, message length, and includes spam prevention
 * Body: { name, email, message }
 */
router.post('/', addMessage);

/**
 * PUT /api/messages/:id
 * Update a message (e.g., mark as read/unread)
 * Should be protected with authentication in production
 * Body: { isRead } (optional)
 */
router.put('/:id', updateMessage);

/**
 * DELETE /api/messages/:id
 * Delete a message by its ID
 * Should be protected with authentication in production
 */
router.delete('/:id', deleteMessage);

/**
 * PATCH /api/messages/:id/read
 * Mark a specific message as read
 * Convenience endpoint for quick read status updates
 * Should be protected with authentication in production
 */
router.patch('/:id/read', markMessageAsRead);

/**
 * PATCH /api/messages/read/all
 * Mark all unread messages as read (batch operation)
 * Useful for admin to clear notifications
 * Should be protected with authentication in production
 */
router.patch('/read/all', markAllMessagesAsRead);

// Export router for use in main app
export default router;

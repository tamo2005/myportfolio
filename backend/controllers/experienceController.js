/**
 * ========================================
 * EXPERIENCE CONTROLLER
 * ========================================
 * Purpose: Handle all experience-related business logic
 * Manages education, work experience, and extracurricular activities
 * with advanced features like filtering, date range queries, and validation
 */

import Experience from '../models/Experience.js';
import { handleAsyncError, ValidationError } from '../utils/errorHandler.js';

/**
 * GET /api/experience
 * Retrieve all experiences with optional filtering, sorting, and pagination
 * 
 * @query {String} type - Filter by type (Education, Work, Extracurricular)
 * @query {String} sortBy - Sort field (startDate, endDate) | default: -startDate (newest first)
 * @query {Number} limit - Results per page | default: 100
 * @query {Number} page - Page number for pagination | default: 1
 * @query {Date} fromDate - Filter experiences starting from this date (ISO string)
 * @query {Date} toDate - Filter experiences ending before this date (ISO string)
 * 
 * @returns {Array} Array of experience objects with pagination metadata
 */
export const getExperiences = handleAsyncError(async (req, res) => {
  // Extract and validate query parameters with safe defaults
  const { 
    type, 
    sortBy = '-startDate', 
    limit = 100, 
    page = 1, 
    fromDate, 
    toDate 
  } = req.query;
  
  // Build filter object for MongoDB query
  const filter = {};
  
  // Add type filter if provided and validate against enum values
  if (type) {
    const validTypes = ['Education', 'Work', 'Extracurricular'];
    if (!validTypes.includes(type)) {
      throw new ValidationError(`Invalid type. Valid options: ${validTypes.join(', ')}`);
    }
    filter.type = type;
  }
  
  // Add date range filters if provided
  if (fromDate || toDate) {
    filter.startDate = {};
    
    // Filter experiences starting on or after fromDate
    if (fromDate) {
      const fromDateObj = new Date(fromDate);
      if (isNaN(fromDateObj)) {
        throw new ValidationError('Invalid fromDate format. Use ISO date string (YYYY-MM-DD)');
      }
      filter.startDate.$gte = fromDateObj;
    }
    
    // Filter experiences starting before toDate
    if (toDate) {
      const toDateObj = new Date(toDate);
      if (isNaN(toDateObj)) {
        throw new ValidationError('Invalid toDate format. Use ISO date string (YYYY-MM-DD)');
      }
      filter.startDate.$lte = toDateObj;
    }
  }
  
  // Parse and validate pagination parameters
  const pageNum = Math.max(1, parseInt(page) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(limit) || 100));
  const skip = (pageNum - 1) * pageSize;
  
  // Build sort object for MongoDB query
  const sortObj = {};
  if (sortBy.startsWith('-')) {
    sortObj[sortBy.substring(1)] = -1;
  } else {
    sortObj[sortBy] = 1;
  }
  
  // Execute database query with filters, sorting, and pagination
  const experiences = await Experience.find(filter)
    .sort(sortObj)
    .limit(pageSize)
    .skip(skip)
    .lean(); // Using lean() for better performance
  
  // Get total count for pagination metadata
  const total = await Experience.countDocuments(filter);
  
  // Return success response with pagination info
  res.status(200).json({
    success: true,
    data: experiences,
    pagination: {
      total,
      page: pageNum,
      limit: pageSize,
      pages: Math.ceil(total / pageSize),
    },
  });
});

/**
 * GET /api/experience/:id
 * Retrieve a single experience entry by ID
 * 
 * @param {String} id - MongoDB ObjectId of the experience
 * @returns {Object} Experience object or 404 error
 */
export const getExperienceById = handleAsyncError(async (req, res) => {
  // Extract experience ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid experience ID format');
  }
  
  // Query database for experience by ID
  const experience = await Experience.findById(id);
  
  // Return 404 if experience not found
  if (!experience) {
    return res.status(404).json({
      success: false,
      message: 'Experience not found',
    });
  }
  
  // Return the found experience
  res.status(200).json({
    success: true,
    data: experience,
  });
});

/**
 * POST /api/experience
 * Create a new experience entry
 * 
 * @body {String} role - Job role or course title (required)
 * @body {String} organization - Company or institution name (required)
 * @body {String} type - Type of experience (required, enum: Education/Work/Extracurricular)
 * @body {Date} startDate - Start date (required, ISO format)
 * @body {Date} endDate - End date (optional, if empty means "Present")
 * @body {Array<String>} description - Array of bullet points (optional)
 * 
 * @returns {Object} Created experience object with ID
 */
export const addExperience = handleAsyncError(async (req, res) => {
  // Extract request body data
  const { role, organization, type, startDate, endDate, description } = req.body;
  
  // Validate required fields
  if (!role || !organization || !type || !startDate) {
    throw new ValidationError('Role, organization, type, and startDate are required');
  }
  
  // Validate type against allowed values
  const validTypes = ['Education', 'Work', 'Extracurricular'];
  if (!validTypes.includes(type)) {
    throw new ValidationError(`Invalid type. Valid options: ${validTypes.join(', ')}`);
  }
  
  // Parse and validate start date
  const startDateObj = new Date(startDate);
  if (isNaN(startDateObj)) {
    throw new ValidationError('Invalid startDate format. Use ISO date string');
  }
  
  // Parse and validate end date if provided
  let endDateObj = null;
  if (endDate) {
    endDateObj = new Date(endDate);
    if (isNaN(endDateObj)) {
      throw new ValidationError('Invalid endDate format. Use ISO date string');
    }
    
    // Validate that end date is not before start date
    if (endDateObj < startDateObj) {
      throw new ValidationError('End date cannot be before start date');
    }
  }
  
  // Validate description array if provided
  if (description && !Array.isArray(description)) {
    throw new ValidationError('Description must be an array of strings');
  }
  
  if (description && description.some(item => typeof item !== 'string')) {
    throw new ValidationError('All description items must be strings');
  }
  
  // Create new experience instance
  const newExperience = new Experience({
    role: role.trim(),
    organization: organization.trim(),
    type,
    startDate: startDateObj,
    endDate: endDateObj,
    description: description?.map(d => d.trim()) || [],
  });
  
  // Save experience to database
  const savedExperience = await newExperience.save();
  
  // Return success response with created experience
  res.status(201).json({
    success: true,
    message: 'Experience created successfully',
    data: savedExperience,
  });
});

/**
 * PUT /api/experience/:id
 * Update an existing experience entry
 * 
 * @param {String} id - MongoDB ObjectId of the experience
 * @body {String} role - Updated role (optional)
 * @body {String} organization - Updated organization (optional)
 * @body {String} type - Updated type (optional)
 * @body {Date} startDate - Updated start date (optional)
 * @body {Date} endDate - Updated end date (optional)
 * @body {Array<String>} description - Updated description (optional)
 * 
 * @returns {Object} Updated experience object
 */
export const updateExperience = handleAsyncError(async (req, res) => {
  // Extract experience ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid experience ID format');
  }
  
  // Extract update data
  const { role, organization, type, startDate, endDate, description } = req.body;
  
  // Build update object with validated fields
  const updateData = {};
  
  // Validate and add role if provided
  if (role !== undefined) {
    if (!role.trim()) {
      throw new ValidationError('Role cannot be empty');
    }
    updateData.role = role.trim();
  }
  
  // Validate and add organization if provided
  if (organization !== undefined) {
    if (!organization.trim()) {
      throw new ValidationError('Organization cannot be empty');
    }
    updateData.organization = organization.trim();
  }
  
  // Validate and add type if provided
  if (type !== undefined) {
    const validTypes = ['Education', 'Work', 'Extracurricular'];
    if (!validTypes.includes(type)) {
      throw new ValidationError(`Invalid type. Valid options: ${validTypes.join(', ')}`);
    }
    updateData.type = type;
  }
  
  // Validate and add start date if provided
  if (startDate !== undefined) {
    const startDateObj = new Date(startDate);
    if (isNaN(startDateObj)) {
      throw new ValidationError('Invalid startDate format');
    }
    updateData.startDate = startDateObj;
  }
  
  // Validate and add end date if provided
  if (endDate !== undefined) {
    if (endDate === null) {
      updateData.endDate = null; // Allow clearing end date
    } else {
      const endDateObj = new Date(endDate);
      if (isNaN(endDateObj)) {
        throw new ValidationError('Invalid endDate format');
      }
      updateData.endDate = endDateObj;
    }
  }
  
  // Validate and add description if provided
  if (description !== undefined) {
    if (!Array.isArray(description)) {
      throw new ValidationError('Description must be an array');
    }
    if (description.some(item => typeof item !== 'string')) {
      throw new ValidationError('All description items must be strings');
    }
    updateData.description = description.map(d => d.trim());
  }
  
  // Check if at least one field is being updated
  if (Object.keys(updateData).length === 0) {
    throw new ValidationError('No fields provided for update');
  }
  
  // Find and update experience in database
  const updatedExperience = await Experience.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  
  // Return 404 if experience not found
  if (!updatedExperience) {
    return res.status(404).json({
      success: false,
      message: 'Experience not found',
    });
  }
  
  // Return success response with updated experience
  res.status(200).json({
    success: true,
    message: 'Experience updated successfully',
    data: updatedExperience,
  });
});

/**
 * DELETE /api/experience/:id
 * Delete an experience entry
 * 
 * @param {String} id - MongoDB ObjectId of the experience to delete
 * @returns {Object} Confirmation message with deleted data
 */
export const deleteExperience = handleAsyncError(async (req, res) => {
  // Extract experience ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid experience ID format');
  }
  
  // Find and delete experience from database
  const deletedExperience = await Experience.findByIdAndDelete(id);
  
  // Return 404 if experience not found
  if (!deletedExperience) {
    return res.status(404).json({
      success: false,
      message: 'Experience not found',
    });
  }
  
  // Return success response with deleted data
  res.status(200).json({
    success: true,
    message: 'Experience deleted successfully',
    data: deletedExperience,
  });
});

/**
 * GET /api/experience/timeline
 * Get all experiences grouped and sorted by date for timeline visualization
 * 
 * @returns {Object} Experiences organized by type for timeline display
 */
export const getExperienceTimeline = handleAsyncError(async (req, res) => {
  // Query all experiences sorted by start date (newest first)
  const experiences = await Experience.find()
    .sort({ startDate: -1 })
    .lean();
  
  // Group experiences by type
  const grouped = {
    Work: [],
    Education: [],
    Extracurricular: [],
  };
  
  // Distribute experiences into their type groups
  experiences.forEach(exp => {
    if (grouped[exp.type]) {
      grouped[exp.type].push(exp);
    }
  });
  
  // Return success response with grouped timeline data
  res.status(200).json({
    success: true,
    data: grouped,
  });
});

/**
 * GET /api/experience/current
 * Get currently active experiences (where endDate is null or in future)
 * 
 * @returns {Array} Array of current/ongoing experiences
 */
export const getCurrentExperiences = handleAsyncError(async (req, res) => {
  // Query for experiences with no end date or future end date
  const now = new Date();
  const current = await Experience.find({
    $or: [
      { endDate: null },
      { endDate: { $gte: now } },
    ],
  })
    .sort({ startDate: -1 })
    .lean();
  
  // Return success response with current experiences
  res.status(200).json({
    success: true,
    data: current,
  });
});

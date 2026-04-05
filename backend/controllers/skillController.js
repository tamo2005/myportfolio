/**
 * ========================================
 * SKILL CONTROLLER
 * ========================================
 * Purpose: Handle all skill-related business logic
 * This controller manages CRUD operations for portfolio skills
 * with advanced features like filtering, pagination, and validation
 */

import Skill from '../models/Skill.js';
import { handleAsyncError, ValidationError } from '../utils/errorHandler.js';

/**
 * GET /api/skills
 * Retrieve all skills with optional filtering and sorting
 * 
 * @query {String} category - Filter by skill category (Frontend, Backend, AI/ML, Tools)
 * @query {String} search - Search skills by name (case-insensitive)
 * @query {String} sortBy - Sort by field (name, proficiency, category) | default: createdAt
 * @query {Number} limit - Limit results | default: 100
 * @query {Number} page - Pagination page number | default: 1
 * 
 * @returns {Array} Array of skill objects with metadata
 */
export const getSkills = handleAsyncError(async (req, res) => {
  // Extract and validate query parameters with safe defaults
  const { category, search, sortBy = 'createdAt', limit = 100, page = 1 } = req.query;
  
  // Build filter object for MongoDB query
  const filter = {};
  
  // Add category filter if provided and validate against enum values
  if (category) {
    const validCategories = ['Frontend', 'Backend', 'AI/ML', 'Tools'];
    if (!validCategories.includes(category)) {
      throw new ValidationError(`Invalid category. Valid options: ${validCategories.join(', ')}`);
    }
    filter.category = category;
  }
  
  // Add search filter for skill name (case-insensitive regex search)
  if (search) {
    filter.name = { $regex: search, $options: 'i' };
  }
  
  // Parse and validate pagination parameters
  const pageNum = Math.max(1, parseInt(page) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(limit) || 100));
  const skip = (pageNum - 1) * pageSize;
  
  // Build sort object for MongoDB (prefix with '-' for descending order)
  const sortObj = {};
  if (sortBy.startsWith('-')) {
    sortObj[sortBy.substring(1)] = -1;
  } else {
    sortObj[sortBy] = 1;
  }
  
  // Execute database query with filter, sorting, and pagination
  const skills = await Skill.find(filter)
    .sort(sortObj)
    .limit(pageSize)
    .skip(skip)
    .lean(); // Using lean() for better performance (returns plain JS objects)
  
  // Get total count for pagination metadata
  const total = await Skill.countDocuments(filter);
  
  // Return response with pagination metadata
  res.status(200).json({
    success: true,
    data: skills,
    pagination: {
      total,
      page: pageNum,
      limit: pageSize,
      pages: Math.ceil(total / pageSize),
    },
  });
});

/**
 * GET /api/skills/:id
 * Retrieve a single skill by ID
 * 
 * @param {String} id - MongoDB ObjectId of the skill
 * @returns {Object} Skill object or 404 error
 */
export const getSkillById = handleAsyncError(async (req, res) => {
  // Extract skill ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid skill ID format');
  }
  
  // Query database for skill by ID
  const skill = await Skill.findById(id);
  
  // Return 404 if skill not found
  if (!skill) {
    return res.status(404).json({
      success: false,
      message: 'Skill not found',
    });
  }
  
  // Return the found skill
  res.status(200).json({
    success: true,
    data: skill,
  });
});

/**
 * POST /api/skills
 * Create a new skill entry
 * 
 * @body {String} name - Skill name (required)
 * @body {String} category - Skill category (required, enum: Frontend/Backend/AI/ML/Tools)
 * @body {String} iconUrl - URL to skill icon (optional)
 * @body {Number} proficiency - Proficiency level 1-100 (optional)
 * 
 * @returns {Object} Created skill object with ID
 */
export const addSkill = handleAsyncError(async (req, res) => {
  // Extract request body data
  const { name, category, iconUrl, proficiency } = req.body;
  
  // Validate required fields
  if (!name || !category) {
    throw new ValidationError('Name and category are required fields');
  }
  
  // Validate category against allowed values
  const validCategories = ['Frontend', 'Backend', 'AI/ML', 'Tools'];
  if (!validCategories.includes(category)) {
    throw new ValidationError(`Invalid category. Valid options: ${validCategories.join(', ')}`);
  }
  
  // Validate proficiency if provided
  if (proficiency !== undefined && (proficiency < 1 || proficiency > 100)) {
    throw new ValidationError('Proficiency must be between 1 and 100');
  }
  
  // Check if skill with same name already exists (case-insensitive)
  const existingSkill = await Skill.findOne({ 
    name: { $regex: `^${name}$`, $options: 'i' } 
  });
  
  if (existingSkill) {
    throw new ValidationError(`Skill "${name}" already exists`);
  }
  
  // Create new skill instance with request body
  const newSkill = new Skill({
    name: name.trim(),
    category,
    iconUrl: iconUrl?.trim(),
    proficiency: proficiency || null,
  });
  
  // Save skill to database
  const savedSkill = await newSkill.save();
  
  // Return success response with created skill
  res.status(201).json({
    success: true,
    message: 'Skill created successfully',
    data: savedSkill,
  });
});

/**
 * PUT /api/skills/:id
 * Update an existing skill
 * 
 * @param {String} id - MongoDB ObjectId of the skill to update
 * @body {String} name - Updated skill name (optional)
 * @body {String} category - Updated category (optional)
 * @body {String} iconUrl - Updated icon URL (optional)
 * @body {Number} proficiency - Updated proficiency level (optional)
 * 
 * @returns {Object} Updated skill object
 */
export const updateSkill = handleAsyncError(async (req, res) => {
  // Extract skill ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid skill ID format');
  }
  
  // Extract and validate update data
  const updateData = {};
  const { name, category, iconUrl, proficiency } = req.body;
  
  // Validate and add name to update if provided
  if (name !== undefined) {
    if (!name.trim()) {
      throw new ValidationError('Name cannot be empty');
    }
    updateData.name = name.trim();
  }
  
  // Validate and add category to update if provided
  if (category !== undefined) {
    const validCategories = ['Frontend', 'Backend', 'AI/ML', 'Tools'];
    if (!validCategories.includes(category)) {
      throw new ValidationError(`Invalid category. Valid options: ${validCategories.join(', ')}`);
    }
    updateData.category = category;
  }
  
  // Add icon URL to update if provided
  if (iconUrl !== undefined) {
    updateData.iconUrl = iconUrl?.trim();
  }
  
  // Validate and add proficiency to update if provided
  if (proficiency !== undefined) {
    if (proficiency < 1 || proficiency > 100) {
      throw new ValidationError('Proficiency must be between 1 and 100');
    }
    updateData.proficiency = proficiency;
  }
  
  // Check if at least one field is being updated
  if (Object.keys(updateData).length === 0) {
    throw new ValidationError('No fields provided for update');
  }
  
  // Find and update skill in database, return new document
  const updatedSkill = await Skill.findByIdAndUpdate(id, updateData, {
    new: true, // Return updated document
    runValidators: true, // Run model validators
  });
  
  // Return 404 if skill not found
  if (!updatedSkill) {
    return res.status(404).json({
      success: false,
      message: 'Skill not found',
    });
  }
  
  // Return success response with updated skill
  res.status(200).json({
    success: true,
    message: 'Skill updated successfully',
    data: updatedSkill,
  });
});

/**
 * DELETE /api/skills/:id
 * Delete a skill entry
 * 
 * @param {String} id - MongoDB ObjectId of the skill to delete
 * @returns {Object} Confirmation message
 */
export const deleteSkill = handleAsyncError(async (req, res) => {
  // Extract skill ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid skill ID format');
  }
  
  // Find and delete skill from database
  const deletedSkill = await Skill.findByIdAndDelete(id);
  
  // Return 404 if skill not found
  if (!deletedSkill) {
    return res.status(404).json({
      success: false,
      message: 'Skill not found',
    });
  }
  
  // Return success response with deleted skill data
  res.status(200).json({
    success: true,
    message: 'Skill deleted successfully',
    data: deletedSkill,
  });
});

/**
 * GET /api/skills/stats
 * Get statistics about skills (count by category, etc.)
 * 
 * @returns {Object} Skills statistics
 */
export const getSkillsStats = handleAsyncError(async (req, res) => {
  // Aggregate skills by category to get count statistics
  const stats = await Skill.aggregate([
    {
      // Group skills by category and count them
      $group: {
        _id: '$category',
        count: { $sum: 1 },
        avgProficiency: { $avg: '$proficiency' },
      },
    },
    {
      // Sort by count in descending order
      $sort: { count: -1 },
    },
  ]);
  
  // Get total skill count
  const total = await Skill.countDocuments();
  
  // Return success response with statistics
  res.status(200).json({
    success: true,
    data: {
      total,
      byCategory: stats,
    },
  });
});

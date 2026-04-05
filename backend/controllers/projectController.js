/**
 * ========================================
 * PROJECT CONTROLLER
 * ========================================
 * Purpose: Handle all project-related business logic
 * Manages portfolio projects with advanced features like filtering, sorting, and validation
 */

import Project from '../models/Project.js';
import { handleAsyncError, ValidationError } from '../utils/errorHandler.js';

/**
 * GET /api/projects
 * Retrieve all projects with optional filtering, sorting, and pagination
 * 
 * @query {String} search - Search projects by title or description (case-insensitive)
 * @query {String} techStack - Filter by technology (e.g., ?techStack=React)
 * @query {String} sortBy - Sort field (title, createdAt) | default: -createdAt (newest first)
 * @query {Number} limit - Results per page | default: 100
 * @query {Number} page - Page number for pagination | default: 1
 * 
 * @returns {Object} Success response with projects array and pagination metadata
 */
export const getProjects = handleAsyncError(async (req, res) => {
  // Extract and validate query parameters with safe defaults
  const { 
    search, 
    techStack, 
    sortBy = '-createdAt', 
    limit = 100, 
    page = 1 
  } = req.query;
  
  // Build filter object for MongoDB query
  const filter = {};
  
  // Add search filter for project title and description (case-insensitive regex)
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ];
  }
  
  // Add tech stack filter if provided (searches in array of technologies)
  if (techStack) {
    filter.techStack = { $in: [techStack] };
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
  const projects = await Project.find(filter)
    .sort(sortObj)
    .limit(pageSize)
    .skip(skip)
    .lean(); // Using lean() for better performance
  
  // Get total count for pagination metadata
  const total = await Project.countDocuments(filter);
  
  // Return success response with pagination info
  res.status(200).json({
    success: true,
    data: projects,
    pagination: {
      total,
      page: pageNum,
      limit: pageSize,
      pages: Math.ceil(total / pageSize),
    },
  });
});

/**
 * GET /api/projects/:id
 * Retrieve a single project by ID
 * 
 * @param {String} id - MongoDB ObjectId of the project
 * @returns {Object} Project object or 404 error
 */
export const getProjectById = handleAsyncError(async (req, res) => {
  // Extract project ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid project ID format');
  }
  
  // Query database for project by ID
  const project = await Project.findById(id);
  
  // Return 404 if project not found
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }
  
  // Return the found project
  res.status(200).json({
    success: true,
    data: project,
  });
});

/**
 * POST /api/projects
 * Create a new project entry
 * Validates all required fields and optional URLs
 * 
 * @body {String} title - Project title (required)
 * @body {String} description - Project description (required)
 * @body {Array<String>} techStack - Technologies used (optional)
 * @body {String} githubLink - Link to GitHub repository (optional, must be valid URL)
 * @body {String} liveLink - Link to live project (optional, must be valid URL)
 * @body {String} image - Project image URL (optional)
 * 
 * @returns {Object} Created project object with ID and timestamps
 */
export const addProject = handleAsyncError(async (req, res) => {
  // Extract request body data
  const { title, description, techStack, githubLink, liveLink, image } = req.body;
  
  // Validate required fields
  if (!title || !description) {
    throw new ValidationError('Title and description are required fields');
  }
  
  // Validate that title is not empty
  if (!title.trim()) {
    throw new ValidationError('Project title cannot be empty');
  }
  
  // Validate that description is not empty and has minimum length
  if (!description.trim() || description.trim().length < 10) {
    throw new ValidationError('Description must be at least 10 characters long');
  }
  
  // Validate GitHub link if provided
  if (githubLink) {
    try {
      new URL(githubLink);
    } catch (error) {
      throw new ValidationError('Invalid GitHub link format. Must be a valid URL');
    }
  }
  
  // Validate live link if provided
  if (liveLink) {
    try {
      new URL(liveLink);
    } catch (error) {
      throw new ValidationError('Invalid live link format. Must be a valid URL');
    }
  }
  
  // Validate image URL if provided
  if (image) {
    try {
      new URL(image);
    } catch (error) {
      throw new ValidationError('Invalid image URL format. Must be a valid URL');
    }
  }
  
  // Validate techStack if provided (should be array of strings)
  let validTechStack = [];
  if (techStack) {
    if (!Array.isArray(techStack)) {
      throw new ValidationError('TechStack must be an array of strings');
    }
    validTechStack = techStack
      .filter(tech => tech && typeof tech === 'string')
      .map(tech => tech.trim())
      .filter(tech => tech); // Remove empty strings
  }
  
  // Create new project instance with validated data
  const newProject = new Project({
    title: title.trim(),
    description: description.trim(),
    techStack: validTechStack,
    githubLink: githubLink?.trim(),
    liveLink: liveLink?.trim(),
    image: image?.trim(),
  });
  
  // Save project to database
  const savedProject = await newProject.save();
  
  // Return success response with created project
  res.status(201).json({
    success: true,
    message: 'Project created successfully',
    data: savedProject,
  });
});

/**
 * PUT /api/projects/:id
 * Update an existing project
 * 
 * @param {String} id - MongoDB ObjectId of the project
 * @body {String} title - Updated title (optional)
 * @body {String} description - Updated description (optional)
 * @body {Array<String>} techStack - Updated technologies (optional)
 * @body {String} githubLink - Updated GitHub link (optional)
 * @body {String} liveLink - Updated live link (optional)
 * @body {String} image - Updated image URL (optional)
 * 
 * @returns {Object} Updated project object
 */
export const updateProject = handleAsyncError(async (req, res) => {
  // Extract project ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid project ID format');
  }
  
  // Extract update data
  const { title, description, techStack, githubLink, liveLink, image } = req.body;
  
  // Build update object with validated fields
  const updateData = {};
  
  // Validate and add title if provided
  if (title !== undefined) {
    if (!title.trim()) {
      throw new ValidationError('Title cannot be empty');
    }
    updateData.title = title.trim();
  }
  
  // Validate and add description if provided
  if (description !== undefined) {
    if (!description.trim() || description.trim().length < 10) {
      throw new ValidationError('Description must be at least 10 characters long');
    }
    updateData.description = description.trim();
  }
  
  // Validate and add techStack if provided
  if (techStack !== undefined) {
    if (!Array.isArray(techStack)) {
      throw new ValidationError('TechStack must be an array');
    }
    updateData.techStack = techStack
      .filter(tech => tech && typeof tech === 'string')
      .map(tech => tech.trim())
      .filter(tech => tech);
  }
  
  // Validate and add GitHub link if provided
  if (githubLink !== undefined) {
    if (githubLink === null) {
      updateData.githubLink = null;
    } else {
      try {
        new URL(githubLink);
        updateData.githubLink = githubLink.trim();
      } catch (error) {
        throw new ValidationError('Invalid GitHub link format');
      }
    }
  }
  
  // Validate and add live link if provided
  if (liveLink !== undefined) {
    if (liveLink === null) {
      updateData.liveLink = null;
    } else {
      try {
        new URL(liveLink);
        updateData.liveLink = liveLink.trim();
      } catch (error) {
        throw new ValidationError('Invalid live link format');
      }
    }
  }
  
  // Validate and add image if provided
  if (image !== undefined) {
    if (image === null) {
      updateData.image = null;
    } else {
      try {
        new URL(image);
        updateData.image = image.trim();
      } catch (error) {
        throw new ValidationError('Invalid image URL format');
      }
    }
  }
  
  // Check if at least one field is being updated
  if (Object.keys(updateData).length === 0) {
    throw new ValidationError('No fields provided for update');
  }
  
  // Find and update project in database
  const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  
  // Return 404 if project not found
  if (!updatedProject) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }
  
  // Return success response with updated project
  res.status(200).json({
    success: true,
    message: 'Project updated successfully',
    data: updatedProject,
  });
});

/**
 * DELETE /api/projects/:id
 * Delete a project entry
 * 
 * @param {String} id - MongoDB ObjectId of the project to delete
 * @returns {Object} Confirmation message with deleted data
 */
export const deleteProject = handleAsyncError(async (req, res) => {
  // Extract project ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid project ID format');
  }
  
  // Find and delete project from database
  const deletedProject = await Project.findByIdAndDelete(id);
  
  // Return 404 if project not found
  if (!deletedProject) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }
  
  // Return success response with deleted data
  res.status(200).json({
    success: true,
    message: 'Project deleted successfully',
    data: deletedProject,
  });
});

/**
 * GET /api/projects/stats
 * Get statistics about projects
 * Returns count by tech, most used technologies, etc.
 * 
 * @returns {Object} Project statistics
 */
export const getProjectStats = handleAsyncError(async (req, res) => {
  // Get total project count
  const total = await Project.countDocuments();
  
  // Count projects with live links
  const withLiveLink = await Project.countDocuments({ liveLink: { $exists: true, $ne: null } });
  
  // Aggregate tech stack usage to find most used technologies
  const techStats = await Project.aggregate([
    {
      // Deconstruct techStack array to individual documents
      $unwind: '$techStack',
    },
    {
      // Group by each technology and count occurrences
      $group: {
        _id: '$techStack',
        count: { $sum: 1 },
      },
    },
    {
      // Sort by count in descending order
      $sort: { count: -1 },
    },
  ]);
  
  // Return success response with statistics
  res.status(200).json({
    success: true,
    data: {
      total,
      withLiveLink,
      topTech: techStats.slice(0, 10), // Top 10 technologies
    },
  });
});

/**
 * GET /api/projects/tech/:tech
 * Get all projects using a specific technology
 * 
 * @param {String} tech - Technology name (e.g., React, Node.js)
 * @returns {Array} Array of projects using the specified technology
 */
export const getProjectsByTech = handleAsyncError(async (req, res) => {
  // Extract technology name from URL parameters
  const { tech } = req.params;
  
  // Validate tech parameter is not empty
  if (!tech || !tech.trim()) {
    throw new ValidationError('Technology name is required');
  }
  
  // Query database for projects using the specified technology (case-insensitive)
  const projects = await Project.find({
    techStack: { $regex: tech, $options: 'i' },
  })
    .sort({ createdAt: -1 })
    .lean();
  
  // Return success response with projects
  res.status(200).json({
    success: true,
    data: projects,
  });
});
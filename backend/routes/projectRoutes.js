/**
 * ========================================
 * PROJECT ROUTES
 * ========================================
 * Purpose: Define all project-related API endpoints
 * Routes for managing portfolio projects with filtering and statistics
 * Includes tech stack filtering and project statistics
 */

import express from 'express';
import {
  getProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
  getProjectStats,
  getProjectsByTech,
} from '../controllers/projectController.js';

// Create Express router instance
const router = express.Router();

/**
 * GET /api/projects
 * Fetch all projects with optional filtering and pagination
 * Query params: search, techStack, sortBy, limit, page
 */
router.get('/', getProjects);

/**
 * GET /api/projects/stats
 * Get statistics about projects (total count, tech stack usage)
 * NOTE: This route must come before /:id to prevent conflict
 */
router.get('/stats', getProjectStats);

/**
 * GET /api/projects/tech/:tech
 * Get all projects using a specific technology
 * NOTE: This route must come before /:id to prevent conflict
 */
router.get('/tech/:tech', getProjectsByTech);

/**
 * GET /api/projects/:id
 * Fetch a single project by its MongoDB ObjectId
 */
router.get('/:id', getProjectById);

/**
 * POST /api/projects
 * Create a new project entry
 * Body: { title, description, techStack, githubLink, liveLink, image }
 */
router.post('/', addProject);

/**
 * PUT /api/projects/:id
 * Update an existing project
 * Body: { title, description, techStack, githubLink, liveLink, image } (all optional)
 */
router.put('/:id', updateProject);

/**
 * DELETE /api/projects/:id
 * Delete a project entry by its ID
 */
router.delete('/:id', deleteProject);

// Export router for use in main app
export default router;
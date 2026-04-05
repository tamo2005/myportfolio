/**
 * ========================================
 * EXPERIENCE ROUTES
 * ========================================
 * Purpose: Define all experience-related API endpoints
 * Routes for managing education, work, and extracurricular experiences
 * Includes timeline and current experience endpoints
 */

import express from 'express';
import {
  getExperiences,
  getExperienceById,
  addExperience,
  updateExperience,
  deleteExperience,
  getExperienceTimeline,
  getCurrentExperiences,
} from '../controllers/experienceController.js';

// Create Express router instance
const router = express.Router();

/**
 * GET /api/experience
 * Fetch all experiences with optional filtering and pagination
 * Query params: type, sortBy, limit, page, fromDate, toDate
 */
router.get('/', getExperiences);

/**
 * GET /api/experience/timeline
 * Get experiences grouped and sorted by date for timeline visualization
 * NOTE: This route must come before /:id to prevent conflict
 */
router.get('/timeline', getExperienceTimeline);

/**
 * GET /api/experience/current
 * Get currently active experiences (where endDate is null or in future)
 * NOTE: This route must come before /:id to prevent conflict
 */
router.get('/current', getCurrentExperiences);

/**
 * GET /api/experience/:id
 * Fetch a single experience entry by its MongoDB ObjectId
 */
router.get('/:id', getExperienceById);

/**
 * POST /api/experience
 * Create a new experience entry
 * Body: { role, organization, type, startDate, endDate, description }
 */
router.post('/', addExperience);

/**
 * PUT /api/experience/:id
 * Update an existing experience entry
 * Body: { role, organization, type, startDate, endDate, description } (all optional)
 */
router.put('/:id', updateExperience);

/**
 * DELETE /api/experience/:id
 * Delete an experience entry by its ID
 */
router.delete('/:id', deleteExperience);

// Export router for use in main app
export default router;

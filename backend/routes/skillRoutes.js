/**
 * ========================================
 * SKILL ROUTES
 * ========================================
 * Purpose: Define all skill-related API endpoints
 * Routes for fetching, creating, updating, and deleting skills
 * Also includes statistics and filtering endpoints
 */

import express from 'express';
import {
  getSkills,
  getSkillById,
  addSkill,
  updateSkill,
  deleteSkill,
  getSkillsStats,
} from '../controllers/skillController.js';

// Create Express router instance
const router = express.Router();

/**
 * GET /api/skills
 * Fetch all skills with optional filtering and pagination
 * Query params: category, search, sortBy, limit, page
 */
router.get('/', getSkills);

/**
 * GET /api/skills/stats
 * Get statistics about skills (count by category)
 * NOTE: This route must come before /:id to prevent conflict
 */
router.get('/stats', getSkillsStats);

/**
 * GET /api/skills/:id
 * Fetch a single skill by its MongoDB ObjectId
 */
router.get('/:id', getSkillById);

/**
 * POST /api/skills
 * Create a new skill entry
 * Body: { name, category, iconUrl, proficiency }
 */
router.post('/', addSkill);

/**
 * PUT /api/skills/:id
 * Update an existing skill
 * Body: { name, category, iconUrl, proficiency } (all optional)
 */
router.put('/:id', updateSkill);

/**
 * DELETE /api/skills/:id
 * Delete a skill entry by its ID
 */
router.delete('/:id', deleteSkill);

// Export router for use in main app
export default router;

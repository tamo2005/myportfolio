/**
 * ========================================
 * CERTIFICATE ROUTES
 * ========================================
 * Purpose: Define all certificate-related API endpoints
 * Routes for managing professional certifications
 * Includes filtering by issuer and statistics endpoints
 */

import express from 'express';
import {
  getCertificates,
  getCertificateById,
  addCertificate,
  updateCertificate,
  deleteCertificate,
  getCertificatesStats,
  getCertificatesByIssuer,
} from '../controllers/certificateController.js';

// Create Express router instance
const router = express.Router();

/**
 * GET /api/certificates
 * Fetch all certificates with optional filtering and pagination
 * Query params: issuer, search, sortBy, limit, page
 */
router.get('/', getCertificates);

/**
 * GET /api/certificates/stats
 * Get statistics about certificates (count by issuer, recent certificates)
 * NOTE: This route must come before /:id to prevent conflict
 */
router.get('/stats', getCertificatesStats);

/**
 * GET /api/certificates/issuer/:issuer
 * Get all certificates from a specific issuer
 * NOTE: This route must come before /:id to prevent conflict
 */
router.get('/issuer/:issuer', getCertificatesByIssuer);

/**
 * GET /api/certificates/:id
 * Fetch a single certificate by its MongoDB ObjectId
 */
router.get('/:id', getCertificateById);

/**
 * POST /api/certificates
 * Create a new certificate entry
 * Body: { title, issuer, dateIssued, imageUrl, credentialLink }
 */
router.post('/', addCertificate);

/**
 * PUT /api/certificates/:id
 * Update an existing certificate
 * Body: { title, issuer, dateIssued, imageUrl, credentialLink } (all optional)
 */
router.put('/:id', updateCertificate);

/**
 * DELETE /api/certificates/:id
 * Delete a certificate entry by its ID
 */
router.delete('/:id', deleteCertificate);

// Export router for use in main app
export default router;

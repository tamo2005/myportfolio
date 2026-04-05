/**
 * ========================================
 * CERTIFICATE CONTROLLER
 * ========================================
 * Purpose: Handle all certificate-related business logic
 * Manages professional certifications with validation and advanced features
 */

import Certificate from '../models/Certificate.js';
import { handleAsyncError, ValidationError } from '../utils/errorHandler.js';

/**
 * GET /api/certificates
 * Retrieve all certificates with filtering, sorting, and pagination
 * 
 * @query {String} issuer - Filter by certificate issuer
 * @query {String} search - Search certificates by title (case-insensitive)
 * @query {String} sortBy - Sort field (title, dateIssued, issuer) | default: -dateIssued (newest first)
 * @query {Number} limit - Results per page | default: 100
 * @query {Number} page - Page number for pagination | default: 1
 * 
 * @returns {Object} Success response with certificates array and pagination metadata
 */
export const getCertificates = handleAsyncError(async (req, res) => {
  // Extract and validate query parameters with safe defaults
  const { 
    issuer, 
    search, 
    sortBy = '-dateIssued', 
    limit = 100, 
    page = 1 
  } = req.query;
  
  // Build filter object for MongoDB query
  const filter = {};
  
  // Add issuer filter if provided (exact match, case-insensitive)
  if (issuer) {
    filter.issuer = { $regex: issuer, $options: 'i' };
  }
  
  // Add search filter for certificate title (case-insensitive regex)
  if (search) {
    filter.title = { $regex: search, $options: 'i' };
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
  const certificates = await Certificate.find(filter)
    .sort(sortObj)
    .limit(pageSize)
    .skip(skip)
    .lean(); // Using lean() for better performance
  
  // Get total count for pagination metadata
  const total = await Certificate.countDocuments(filter);
  
  // Return success response with pagination info
  res.status(200).json({
    success: true,
    data: certificates,
    pagination: {
      total,
      page: pageNum,
      limit: pageSize,
      pages: Math.ceil(total / pageSize),
    },
  });
});

/**
 * GET /api/certificates/:id
 * Retrieve a single certificate by ID
 * 
 * @param {String} id - MongoDB ObjectId of the certificate
 * @returns {Object} Certificate object or 404 error
 */
export const getCertificateById = handleAsyncError(async (req, res) => {
  // Extract certificate ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid certificate ID format');
  }
  
  // Query database for certificate by ID
  const certificate = await Certificate.findById(id);
  
  // Return 404 if certificate not found
  if (!certificate) {
    return res.status(404).json({
      success: false,
      message: 'Certificate not found',
    });
  }
  
  // Return the found certificate
  res.status(200).json({
    success: true,
    data: certificate,
  });
});

/**
 * POST /api/certificates
 * Create a new certificate entry
 * Validates image URL and optional credential link
 * 
 * @body {String} title - Certificate title (required)
 * @body {String} issuer - Issuing organization (required)
 * @body {Date} dateIssued - Date certificate was issued (optional, ISO format)
 * @body {String} imageUrl - URL to certificate image (required)
 * @body {String} credentialLink - URL to verify certificate online (optional)
 * 
 * @returns {Object} Created certificate object with ID and timestamps
 */
export const addCertificate = handleAsyncError(async (req, res) => {
  // Extract request body data
  const { title, issuer, dateIssued, imageUrl, credentialLink } = req.body;
  
  // Validate required fields
  if (!title || !issuer || !imageUrl) {
    throw new ValidationError('Title, issuer, and imageUrl are required fields');
  }
  
  // Validate that title is not empty
  if (!title.trim()) {
    throw new ValidationError('Certificate title cannot be empty');
  }
  
  // Validate that issuer is not empty
  if (!issuer.trim()) {
    throw new ValidationError('Certificate issuer cannot be empty');
  }
  
  // Validate imageUrl is a valid URL format
  try {
    new URL(imageUrl);
  } catch (error) {
    throw new ValidationError('Invalid imageUrl format. Must be a valid URL');
  }
  
  // Validate credentialLink if provided
  if (credentialLink) {
    try {
      new URL(credentialLink);
    } catch (error) {
      throw new ValidationError('Invalid credentialLink format. Must be a valid URL');
    }
  }
  
  // Parse and validate dateIssued if provided
  let dateIssuedObj = null;
  if (dateIssued) {
    dateIssuedObj = new Date(dateIssued);
    if (isNaN(dateIssuedObj)) {
      throw new ValidationError('Invalid dateIssued format. Use ISO date string');
    }
    
    // Validate that date is not in the future
    if (dateIssuedObj > new Date()) {
      throw new ValidationError('Certificate date cannot be in the future');
    }
  }
  
  // Create new certificate instance with validated data
  const newCertificate = new Certificate({
    title: title.trim(),
    issuer: issuer.trim(),
    dateIssued: dateIssuedObj,
    imageUrl: imageUrl.trim(),
    credentialLink: credentialLink?.trim(),
  });
  
  // Save certificate to database
  const savedCertificate = await newCertificate.save();
  
  // Return success response with created certificate
  res.status(201).json({
    success: true,
    message: 'Certificate created successfully',
    data: savedCertificate,
  });
});

/**
 * PUT /api/certificates/:id
 * Update an existing certificate
 * 
 * @param {String} id - MongoDB ObjectId of the certificate
 * @body {String} title - Updated title (optional)
 * @body {String} issuer - Updated issuer (optional)
 * @body {Date} dateIssued - Updated issue date (optional)
 * @body {String} imageUrl - Updated image URL (optional)
 * @body {String} credentialLink - Updated credential link (optional)
 * 
 * @returns {Object} Updated certificate object
 */
export const updateCertificate = handleAsyncError(async (req, res) => {
  // Extract certificate ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid certificate ID format');
  }
  
  // Extract update data
  const { title, issuer, dateIssued, imageUrl, credentialLink } = req.body;
  
  // Build update object with validated fields
  const updateData = {};
  
  // Validate and add title if provided
  if (title !== undefined) {
    if (!title.trim()) {
      throw new ValidationError('Title cannot be empty');
    }
    updateData.title = title.trim();
  }
  
  // Validate and add issuer if provided
  if (issuer !== undefined) {
    if (!issuer.trim()) {
      throw new ValidationError('Issuer cannot be empty');
    }
    updateData.issuer = issuer.trim();
  }
  
  // Validate and add dateIssued if provided
  if (dateIssued !== undefined) {
    if (dateIssued === null) {
      updateData.dateIssued = null;
    } else {
      const dateObj = new Date(dateIssued);
      if (isNaN(dateObj)) {
        throw new ValidationError('Invalid dateIssued format');
      }
      if (dateObj > new Date()) {
        throw new ValidationError('Certificate date cannot be in the future');
      }
      updateData.dateIssued = dateObj;
    }
  }
  
  // Validate and add imageUrl if provided
  if (imageUrl !== undefined) {
    try {
      new URL(imageUrl);
      updateData.imageUrl = imageUrl.trim();
    } catch (error) {
      throw new ValidationError('Invalid imageUrl format. Must be a valid URL');
    }
  }
  
  // Validate and add credentialLink if provided
  if (credentialLink !== undefined) {
    if (credentialLink === null) {
      updateData.credentialLink = null;
    } else {
      try {
        new URL(credentialLink);
        updateData.credentialLink = credentialLink.trim();
      } catch (error) {
        throw new ValidationError('Invalid credentialLink format. Must be a valid URL');
      }
    }
  }
  
  // Check if at least one field is being updated
  if (Object.keys(updateData).length === 0) {
    throw new ValidationError('No fields provided for update');
  }
  
  // Find and update certificate in database
  const updatedCertificate = await Certificate.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  
  // Return 404 if certificate not found
  if (!updatedCertificate) {
    return res.status(404).json({
      success: false,
      message: 'Certificate not found',
    });
  }
  
  // Return success response with updated certificate
  res.status(200).json({
    success: true,
    message: 'Certificate updated successfully',
    data: updatedCertificate,
  });
});

/**
 * DELETE /api/certificates/:id
 * Delete a certificate entry
 * 
 * @param {String} id - MongoDB ObjectId of the certificate to delete
 * @returns {Object} Confirmation message with deleted data
 */
export const deleteCertificate = handleAsyncError(async (req, res) => {
  // Extract certificate ID from URL parameters
  const { id } = req.params;
  
  // Validate MongoDB ObjectId format
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError('Invalid certificate ID format');
  }
  
  // Find and delete certificate from database
  const deletedCertificate = await Certificate.findByIdAndDelete(id);
  
  // Return 404 if certificate not found
  if (!deletedCertificate) {
    return res.status(404).json({
      success: false,
      message: 'Certificate not found',
    });
  }
  
  // Return success response with deleted data
  res.status(200).json({
    success: true,
    message: 'Certificate deleted successfully',
    data: deletedCertificate,
  });
});

/**
 * GET /api/certificates/stats
 * Get statistics about certificates
 * Returns count by issuer and most recent certificates
 * 
 * @returns {Object} Certificate statistics including counts by issuer
 */
export const getCertificatesStats = handleAsyncError(async (req, res) => {
  // Aggregate certificates by issuer to get count statistics
  const stats = await Certificate.aggregate([
    {
      // Group certificates by issuer and count them
      $group: {
        _id: '$issuer',
        count: { $sum: 1 },
        latestDate: { $max: '$dateIssued' },
      },
    },
    {
      // Sort by count in descending order
      $sort: { count: -1 },
    },
  ]);
  
  // Get total certificate count
  const total = await Certificate.countDocuments();
  
  // Get most recent certificates (last 5)
  const recent = await Certificate.find()
    .sort({ dateIssued: -1 })
    .limit(5)
    .lean();
  
  // Return success response with statistics
  res.status(200).json({
    success: true,
    data: {
      total,
      byIssuer: stats,
      recent,
    },
  });
});

/**
 * GET /api/certificates/issuer/:issuer
 * Get all certificates from a specific issuer
 * 
 * @param {String} issuer - Name of the issuer
 * @returns {Array} Array of certificates from the specified issuer
 */
export const getCertificatesByIssuer = handleAsyncError(async (req, res) => {
  // Extract issuer name from URL parameters
  const { issuer } = req.params;
  
  // Validate issuer parameter is not empty
  if (!issuer || !issuer.trim()) {
    throw new ValidationError('Issuer name is required');
  }
  
  // Query database for certificates matching issuer (case-insensitive)
  const certificates = await Certificate.find({
    issuer: { $regex: issuer, $options: 'i' },
  })
    .sort({ dateIssued: -1 })
    .lean();
  
  // Return success response with certificates
  res.status(200).json({
    success: true,
    data: certificates,
  });
});

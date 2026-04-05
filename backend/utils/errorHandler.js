/**
 * ========================================
 * ERROR HANDLER UTILITY
 * ========================================
 * Purpose: Centralized error handling for the application
 * Provides custom error classes and async error wrapper
 * Ensures consistent error responses across all API endpoints
 */

/**
 * Custom ValidationError class for input validation failures
 * Extends Error to provide consistent error handling
 */
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400; // HTTP 400 Bad Request
  }
}

/**
 * Custom AuthenticationError class for authentication failures
 * Used when user credentials are missing or invalid
 */
export class AuthenticationError extends Error {
  constructor(message = 'Authentication failed') {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401; // HTTP 401 Unauthorized
  }
}

/**
 * Custom AuthorizationError class for authorization failures
 * Used when user lacks required permissions
 */
export class AuthorizationError extends Error {
  constructor(message = 'You do not have permission to perform this action') {
    super(message);
    this.name = 'AuthorizationError';
    this.statusCode = 403; // HTTP 403 Forbidden
  }
}

/**
 * Custom NotFoundError class for resource not found
 * Used when requested resource doesn't exist
 */
export class NotFoundError extends Error {
  constructor(resource = 'Resource') {
    super(`${resource} not found`);
    this.name = 'NotFoundError';
    this.statusCode = 404; // HTTP 404 Not Found
  }
}

/**
 * Custom ServerError class for internal server errors
 * Used for unexpected server-side errors
 */
export class ServerError extends Error {
  constructor(message = 'An internal server error occurred') {
    super(message);
    this.name = 'ServerError';
    this.statusCode = 500; // HTTP 500 Internal Server Error
  }
}

/**
 * Async error wrapper function
 * Wraps async route handlers to catch errors and pass them to error middleware
 * 
 * @param {Function} fn - Async function to wrap (route handler)
 * @returns {Function} Express middleware that catches errors
 */
export const handleAsyncError = (fn) => {
  return (req, res, next) => {
    // Execute the async function and catch any errors
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Global error handling middleware
 * Should be used as the last middleware in Express app
 * Catches all errors and formats consistent error responses
 * 
 * @param {Error} err - Error object from the application
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
export const errorHandler = (err, req, res, next) => {
  // Set default error values
  let statusCode = err.statusCode || 500; // Default to 500 Internal Server Error
  let message = err.message || 'An internal server error occurred';
  let name = err.name || 'Error';
  
  // Log error details to console for debugging (in production, use a logging service)
  console.error(`[${new Date().toISOString()}] ${name}: ${message}`);
  
  // Handle specific Mongoose validation errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    // Combine all validation error messages
    const messages = Object.values(err.errors)
      .map(e => e.message)
      .join(', ');
    message = `Validation Error: ${messages}`;
  }
  
  // Handle MongoDB duplicate key error (duplicate unique field)
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyPattern)[0];
    message = `${field} already exists`;
  }
  
  // Handle Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid ID format';
  }
  
  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
  }
  
  // Handle JWT expiration
  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token has expired';
  }
  
  // Return formatted error response
  res.status(statusCode).json({
    success: false,
    error: {
      name,
      message,
      statusCode,
      // Include stack trace only in development environment
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
};

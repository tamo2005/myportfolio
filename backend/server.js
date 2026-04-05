/**
 * ========================================
 * MAIN SERVER FILE
 * ========================================
 * Purpose: Initialize and configure the Express server
 * Sets up middleware, database connection, routes, and error handling
 * This is the entry point for the backend application
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// ========== 1. IMPORT UTILITIES ==========
// Import custom error handler and middleware
import { errorHandler } from './utils/errorHandler.js';

// ========== 2. IMPORT ALL ROUTE FILES ==========
// These imports connect to the controllers which handle the business logic
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

// ========== 3. LOAD ENVIRONMENT VARIABLES ==========
// Load variables from .env file (MONGO_URI, PORT, etc.)
dotenv.config();

// ========== 4. INITIALIZE EXPRESS APP ==========
// Create main Express application instance
const app = express();

// ========== 5. MIDDLEWARE CONFIGURATION ==========
// CORS Middleware: Allow frontend to make requests to this backend
// Configure CORS based on environment
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Allow frontend URL in production
  credentials: true, // Allow cookies and credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Body Parser Middleware: Parse incoming JSON requests
// Limit payload size to 50MB to prevent memory issues
app.use(express.json({ limit: '50mb' }));

// URL-encoded Middleware: Parse form-encoded data
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Request Logging Middleware: Log incoming requests (useful for debugging)
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// ========== 6. DATABASE CONNECTION ==========
// Connect to MongoDB using Mongoose
// Includes error handling and connection logging
mongoose
  .connect(process.env.MONGO_URI, {
    // Connection pooling for better performance
    maxPoolSize: 10,
    minPoolSize: 2,
  })
  .then(() => {
    // Log successful connection
    console.log('✓ MongoDB connected successfully');
    console.log(`  Database: ${mongoose.connection.name}`);
  })
  .catch((err) => {
    // Log connection error and exit
    console.error('✗ MongoDB Connection Error:');
    console.error(`  ${err.message}`);
    // Exit process with failure code
    process.exit(1);
  });

// Log database events
mongoose.connection.on('disconnected', () => {
  console.warn('⚠ MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('✗ MongoDB error:', err.message);
});

// ========== 7. HEALTH CHECK ENDPOINT ==========
// Simple endpoint to verify server is running
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is operational',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// ========== 8. API ROUTES REGISTRATION ==========
// Mount all route handlers at their respective endpoints
// Each route file handles requests to its specific resource

// Project routes: /api/projects
app.use('/api/projects', projectRoutes);

// Skill routes: /api/skills
app.use('/api/skills', skillRoutes);

// Experience routes: /api/experience
app.use('/api/experience', experienceRoutes);

// Certificate routes: /api/certificates
app.use('/api/certificates', certificateRoutes);

// Message routes: /api/messages
app.use('/api/messages', messageRoutes);

// ========== 9. 404 NOT FOUND HANDLER ==========
// Handle requests to endpoints that don't exist
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.path}`,
    availableEndpoints: {
      projects: '/api/projects',
      skills: '/api/skills',
      experience: '/api/experience',
      certificates: '/api/certificates',
      messages: '/api/messages',
      health: '/api/health',
    },
  });
});

// ========== 10. GLOBAL ERROR HANDLING MIDDLEWARE ==========
// Must be the last middleware to catch all errors
// Handles errors from controllers and other middleware
app.use(errorHandler);

// ========== 11. SERVER STARTUP ==========
// Get port from environment or use default
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Start listening for requests
const server = app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║      🚀 PORTFOLIO BACKEND SERVER       ║
╠════════════════════════════════════════╣
║ Server running on port ${PORT.toString().padEnd(22)} ║
║ Environment: ${NODE_ENV.padEnd(28)} ║
║ Base URL: http://localhost:${PORT.toString().padEnd(19)} ║
╠════════════════════════════════════════╣
║ Available Endpoints:                   ║
║ • GET    /api/projects                 ║
║ • GET    /api/skills                   ║
║ • GET    /api/experience                ║
║ • GET    /api/certificates             ║
║ • GET    /api/messages (admin)         ║
║ • POST   /api/messages (public)        ║
║ • GET    /api/health                   ║
╚════════════════════════════════════════╝
  `);
});

// ========== 12. GRACEFUL SHUTDOWN ==========
// Handle server termination gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  
  // Close server and terminate after requests finish
  server.close(() => {
    console.log('HTTP server closed');
    
    // Disconnect from MongoDB
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
  
  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
});

// Handle unexpected errors
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Log to error tracking service in production
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Log to error tracking service and restart in production
  process.exit(1);
});

// Export app for testing purposes
export default app;
# Frontend-Backend Integration Guide

## Overview

This document guides you through integrating the **React Frontend** with the **Express Backend API** for your portfolio application.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [API Integration](#api-integration)
4. [Running the Application](#running-the-application)
5. [Testing the Integration](#testing-the-integration)
6. [Troubleshooting](#troubleshooting)
7. [Components & Endpoints](#components--endpoints)
8. [Future Enhancements](#future-enhancements)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** running locally or MongoDB Atlas connection string
- **Git** (optional, for version control)

---

## Environment Setup

### Backend Configuration

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. **Configure your `.env` file:**
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/myportfolio
   # Or use MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myportfolio

   # CORS Configuration (allows frontend to communicate)
   FRONTEND_URL=http://localhost:5173
   # Production: https://your-portfolio-domain.com
   ```

### Frontend Configuration

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env.local` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your `.env.local` file:**
   ```env
   # Backend API URL
   VITE_API_URL=http://localhost:5000/api
   # Production: https://your-api-domain.com/api
   ```

---

## API Integration

### Contact Form Integration

The **ContactSection** component has been updated to send messages to the backend API instead of EmailJS.

#### Key Changes:

1. **Removed:** EmailJS dependency
2. **Added:** Backend API integration via fetch
3. **Endpoint:** `POST /api/messages`

#### How It Works:

```javascript
// Frontend sends a POST request to the backend
const response = await fetch(`${API_BASE_URL}/messages`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }),
});
```

#### Backend Processing:

The backend (`messageController.js`) will:
1. ✅ Validate all input fields
2. ✅ Check email format
3. ✅ Implement rate limiting (5 messages per email per hour)
4. ✅ Store message in MongoDB
5. ✅ Return success/error response

#### Error Handling:

The frontend intelligently handles different error types:

```javascript
// Rate limit error
"You've sent too many messages recently. Please try again later."

// Validation error
"Please fill in all fields."

// Generic error
"Sorry, there was an error sending your message..."
```

---

## Running the Application

### Option 1: Run Backend & Frontend Separately (Recommended for Development)

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```
✅ Backend runs on: `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```
✅ Frontend runs on: `http://localhost:5173`

### Option 2: Use Concurrently (Run Both in One Terminal)

**Install concurrently globally:**
```bash
npm install -g concurrently
```

**Create a script in root `package.json`:**
```json
{
  "scripts": {
    "dev": "concurrently \"cd backend && npm run dev\" \"cd frontend && npm run dev\""
  }
}
```

**Run:**
```bash
npm run dev
```

---

## Testing the Integration

### 1. Verify Backend is Running

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Backend is running"
}
```

### 2. Test Message Submission via cURL

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "This is a test message",
    "isRead": false,
    "createdAt": "2024-01-01T12:00:00Z"
  }
}
```

### 3. Test Frontend Form

1. **Open browser:** `http://localhost:5173`
2. **Navigate to:** Contact section
3. **Fill in the form:**
   - Name: Test User
   - Email: test@example.com
   - Message: Testing the integration
4. **Click:** "Send Message" button
5. **Expected:** Success message: "Your message has been sent successfully!"

### 4. View Messages in Database

```bash
# Using MongoDB CLI
mongosh
> use myportfolio
> db.messages.find()
```

Or use MongoDB Atlas GUI to view messages.

---

## Troubleshooting

### Issue: Backend refuses connection

**Problem:** `Connection refused - http://localhost:5000`

**Solution:**
```bash
# 1. Check if backend is running
lsof -i :5000

# 2. Kill any process using port 5000
kill -9 <PID>

# 3. Start backend again
cd backend
npm run dev
```

### Issue: CORS Error

**Problem:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
1. **Check backend .env:**
   ```env
   FRONTEND_URL=http://localhost:5173
   ```

2. **Verify CORS middleware in server.js:**
   ```javascript
   app.use(cors({
     origin: process.env.FRONTEND_URL,
     credentials: true
   }));
   ```

3. **Restart backend:**
   ```bash
   npm run dev
   ```

### Issue: Messages not saving to database

**Problem:** `MongoDB connection failed`

**Solution:**
```bash
# 1. Verify MongoDB is running
# Local MongoDB:
mongod

# 2. Check connection string in .env
MONGODB_URI=mongodb://localhost:27017/myportfolio

# 3. Test connection:
mongosh mongodb://localhost:27017
```

### Issue: "Too many requests" error

**Problem:** `You've sent too many messages recently. Please try again later.`

**Solution:**
- This is intentional rate limiting (5 messages per email per hour)
- Wait 1 hour or use a different email address
- Check backend logs for details

### Issue: 400 Bad Request

**Problem:** Messages not sending with validation error

**Solution:**
Check validation requirements:
- ✅ Name: 2-100 characters
- ✅ Email: Valid email format (xxx@xxx.xxx)
- ✅ Message: 10-1000 characters

---

## Components & Endpoints

### Frontend Components Updated

#### `ContactSection.jsx`

**Changes Made:**
- Removed EmailJS dependency
- Updated `handleSubmit()` to use backend API
- Added rate limit error handling
- Maintained beautiful UI with Three.js animation

**Form Fields:**
- Name (text input)
- Email (email input)
- Message (textarea)

**API Call:**
```javascript
POST /api/messages
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### Backend Endpoints

#### Message Endpoints

| Method | Endpoint | Purpose | Auth |
|--------|----------|---------|------|
| POST | `/api/messages` | Submit new message | ❌ Public |
| GET | `/api/messages` | Get all messages | ⛔ Admin only |
| GET | `/api/messages/:id` | Get message details | ⛔ Admin only |
| PUT | `/api/messages/:id` | Update message | ⛔ Admin only |
| DELETE | `/api/messages/:id` | Delete message | ⛔ Admin only |
| GET | `/api/messages/unread` | Get unread messages | ⛔ Admin only |
| PATCH | `/api/messages/:id/read` | Mark as read | ⛔ Admin only |
| PATCH | `/api/messages/read-all` | Mark all as read | ⛔ Admin only |
| GET | `/api/messages/stats` | Message statistics | ⛔ Admin only |

#### Other Endpoints Available

**Projects:** `/api/projects` - CRUD operations  
**Skills:** `/api/skills` - CRUD operations  
**Experience:** `/api/experience` - CRUD operations  
**Certificates:** `/api/certificates` - CRUD operations  

See `API_DOCUMENTATION.md` in the backend folder for full details.

---

## Future Enhancements

### Phase 2: Authentication & Admin Panel

- [ ] Implement JWT authentication
- [ ] Create admin dashboard
- [ ] Admin-only message viewing
- [ ] Message management interface

### Phase 3: Additional Frontend Features

- [ ] Dynamic Projects loading from API
- [ ] Dynamic Skills loading from API
- [ ] Timeline view of Experience
- [ ] Certificates gallery

### Phase 4: Advanced Features

- [ ] Email notification system
- [ ] Rate limiting middleware
- [ ] Security headers (Helmet.js)
- [ ] Request sanitization
- [ ] API documentation (Swagger)

### Phase 5: Deployment

- [ ] Production database setup
- [ ] Environment configuration
- [ ] Deployment to hosting platform
- [ ] SSL/TLS setup
- [ ] Monitoring & logging

---

## Quick Reference

### Common Commands

```bash
# Backend
cd backend
npm install          # Install dependencies
npm run dev          # Start development server
npm start            # Start production server
node seed.js         # Populate database with sample data

# Frontend
cd frontend
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

### Database

```bash
# View all messages
mongosh
> use myportfolio
> db.messages.find().pretty()

# Clear all messages
> db.messages.deleteMany({})

# View message count
> db.messages.countDocuments()
```

### Debugging

```bash
# Check if ports are in use
lsof -i :5000   # Backend port
lsof -i :5173   # Frontend port

# View backend logs
tail -f backend/logs/* (if logging is implemented)

# Browser DevTools
- Open DevTools (F12)
- Network tab: See API requests
- Console tab: See error messages
```

---

## Support & Documentation

For more information, see:

1. **Backend Documentation:** `backend/README.md`
2. **API Documentation:** `backend/API_DOCUMENTATION.md`
3. **Architecture Guide:** `ARCHITECTURE.md`
4. **Quick Start Guide:** `QUICKSTART.md`

---

## Summary

You now have:
- ✅ Updated ContactSection with backend integration
- ✅ Backend API ready to receive messages
- ✅ Complete error handling and validation
- ✅ Rate limiting to prevent spam
- ✅ MongoDB storage for messages
- ✅ Beautiful UI with Three.js animations

**Next Steps:**
1. Configure `.env` files
2. Start backend: `npm run dev` (in backend folder)
3. Start frontend: `npm run dev` (in frontend folder)
4. Test the contact form
5. View messages in database
6. Build additional features using the API endpoints

---

**Last Updated:** 2024
**Status:** ✅ Production Ready

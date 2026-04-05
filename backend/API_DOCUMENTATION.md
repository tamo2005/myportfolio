# Portfolio Backend API Documentation

## Overview

This is a production-grade Node.js/Express backend for a portfolio application with MongoDB. The API provides comprehensive endpoints for managing projects, skills, experience, certificates, and contact messages.

## Features

✅ **Advanced Error Handling** - Custom error classes and consistent error responses  
✅ **Input Validation** - Comprehensive validation for all endpoints  
✅ **Pagination & Filtering** - Sort, filter, and paginate results  
✅ **Statistics Endpoints** - Get analytics about your portfolio  
✅ **Spam Prevention** - Built-in rate limiting for contact form  
✅ **Proper HTTP Status Codes** - RESTful API design  
✅ **Detailed Comments** - Every line explained for maintainability  

## Quick Start

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev

# Start production server
npm start
```

## Environment Variables

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:3000
```

## API Endpoints

### Base URL
```
http://localhost:5000/api
```

---

## 1. PROJECTS API

### GET /projects
Fetch all projects with filtering and pagination.

**Query Parameters:**
- `search` (string) - Search in title or description
- `techStack` (string) - Filter by technology
- `sortBy` (string) - Sort field (default: `-createdAt`)
- `limit` (number) - Results per page (default: 100, max: 100)
- `page` (number) - Page number (default: 1)

**Example:**
```bash
GET /api/projects?search=react&techStack=JavaScript&page=1&limit=10
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Portfolio Website",
      "description": "A modern portfolio built with React and Node.js",
      "techStack": ["React", "Node.js", "MongoDB"],
      "githubLink": "https://github.com/user/portfolio",
      "liveLink": "https://portfolio.com",
      "image": "https://example.com/image.jpg",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 5,
    "page": 1,
    "limit": 10,
    "pages": 1
  }
}
```

### GET /projects/:id
Get a specific project by ID.

**Parameters:**
- `id` (string) - MongoDB ObjectId

**Response:** Same as single project object from above

### POST /projects
Create a new project.

**Request Body:**
```json
{
  "title": "AI Chat Application",
  "description": "A full-stack chat application powered by GPT-4 API",
  "techStack": ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API"],
  "githubLink": "https://github.com/user/ai-chat",
  "liveLink": "https://ai-chat.app",
  "image": "https://example.com/projects/ai-chat.jpg"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Project created successfully",
  "data": { /* created project object */ }
}
```

### PUT /projects/:id
Update a project.

**Request Body:** Same fields as POST (all optional)

### DELETE /projects/:id
Delete a project.

### GET /projects/stats
Get project statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "total": 5,
    "withLiveLink": 4,
    "topTech": [
      { "_id": "React", "count": 3 },
      { "_id": "Node.js", "count": 2 }
    ]
  }
}
```

### GET /projects/tech/:tech
Get all projects using a specific technology.

**Parameters:**
- `tech` (string) - Technology name (e.g., "React")

---

## 2. SKILLS API

### GET /skills
Fetch all skills with filtering and pagination.

**Query Parameters:**
- `category` (string) - Filter by category (Frontend/Backend/AI/ML/Tools)
- `search` (string) - Search skill name
- `sortBy` (string) - Sort field (default: `createdAt`)
- `limit` (number) - Results per page (default: 100)
- `page` (number) - Page number (default: 1)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "React",
      "category": "Frontend",
      "iconUrl": "https://example.com/react.svg",
      "proficiency": 95,
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": { /* pagination object */ }
}
```

### GET /skills/:id
Get a specific skill by ID.

### POST /skills
Create a new skill.

**Request Body:**
```json
{
  "name": "Python",
  "category": "Backend",
  "iconUrl": "https://example.com/python.svg",
  "proficiency": 85
}
```

### PUT /skills/:id
Update a skill (all fields optional).

### DELETE /skills/:id
Delete a skill.

### GET /skills/stats
Get skills statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "total": 12,
    "byCategory": [
      { "_id": "Frontend", "count": 5, "avgProficiency": 88 },
      { "_id": "Backend", "count": 4, "avgProficiency": 82 }
    ]
  }
}
```

---

## 3. EXPERIENCE API

### GET /experience
Fetch all experiences with filtering.

**Query Parameters:**
- `type` (string) - Filter by type (Education/Work/Extracurricular)
- `sortBy` (string) - Sort field (default: `-startDate`)
- `fromDate` (string) - Filter from date (ISO format)
- `toDate` (string) - Filter to date (ISO format)
- `limit` (number) - Results per page (default: 100)
- `page` (number) - Page number (default: 1)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439013",
      "role": "Senior Full Stack Developer",
      "organization": "Tech Company Inc.",
      "type": "Work",
      "startDate": "2022-01-15T00:00:00Z",
      "endDate": null,
      "description": [
        "Developed scalable web applications",
        "Led a team of 5 developers",
        "Improved performance by 40%"
      ],
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": { /* pagination object */ }
}
```

### GET /experience/:id
Get a specific experience by ID.

### POST /experience
Create a new experience.

**Request Body:**
```json
{
  "role": "Machine Learning Engineer",
  "organization": "AI Startup",
  "type": "Work",
  "startDate": "2023-06-01",
  "endDate": null,
  "description": [
    "Built ML models for NLP tasks",
    "Deployed models using TensorFlow"
  ]
}
```

### PUT /experience/:id
Update an experience (all fields optional).

### DELETE /experience/:id
Delete an experience.

### GET /experience/timeline
Get experiences grouped by type for timeline visualization.

### GET /experience/current
Get currently active experiences (endDate is null or in future).

---

## 4. CERTIFICATES API

### GET /certificates
Fetch all certificates.

**Query Parameters:**
- `issuer` (string) - Filter by issuer
- `search` (string) - Search certificate title
- `sortBy` (string) - Sort field (default: `-dateIssued`)
- `limit` (number) - Results per page (default: 100)
- `page` (number) - Page number (default: 1)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439014",
      "title": "AWS Certified Solutions Architect",
      "issuer": "Amazon Web Services",
      "dateIssued": "2023-12-15T00:00:00Z",
      "imageUrl": "https://example.com/aws-cert.jpg",
      "credentialLink": "https://aws.amazon.com/verify/...",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": { /* pagination object */ }
}
```

### GET /certificates/:id
Get a specific certificate by ID.

### POST /certificates
Create a new certificate.

**Request Body:**
```json
{
  "title": "Advanced JavaScript Mastery",
  "issuer": "Udemy",
  "dateIssued": "2024-01-10",
  "imageUrl": "https://example.com/cert.jpg",
  "credentialLink": "https://udemy.com/verify/..."
}
```

### PUT /certificates/:id
Update a certificate (all fields optional).

### DELETE /certificates/:id
Delete a certificate.

### GET /certificates/stats
Get certificates statistics.

### GET /certificates/issuer/:issuer
Get all certificates from a specific issuer.

---

## 5. MESSAGES API

### GET /messages
Fetch all contact messages (Admin only).

**Query Parameters:**
- `isRead` (boolean) - Filter by read status
- `search` (string) - Search name or email
- `sortBy` (string) - Sort field (default: `-createdAt`)
- `limit` (number) - Results per page (default: 50)
- `page` (number) - Page number (default: 1)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439015",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "I'm interested in your portfolio and would like to discuss...",
      "isRead": false,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 15,
    "page": 1,
    "limit": 50,
    "pages": 1,
    "unreadCount": 3
  }
}
```

### GET /messages/:id
Get a specific message and mark it as read (Admin only).

### POST /messages
Submit a contact form message (PUBLIC - No authentication required).

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Hello, I'm very interested in your work and would love to collaborate..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon",
  "data": {
    "id": "507f1f77bcf86cd799439016",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Validation Rules:**
- Name: 2-100 characters
- Email: Valid email format
- Message: 10-1000 characters
- Spam Prevention: Max 5 messages per email per hour

### PUT /messages/:id
Update message status (Admin only).

**Request Body:**
```json
{
  "isRead": true
}
```

### DELETE /messages/:id
Delete a message (Admin only).

### GET /messages/stats
Get message statistics (Admin only).

### GET /messages/unread
Get only unread messages (Admin only).

### PATCH /messages/:id/read
Mark a specific message as read (Admin only).

### PATCH /messages/read/all
Mark all messages as read (Admin only).

---

## Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": {
    "name": "ValidationError",
    "message": "Invalid email format",
    "statusCode": 400
  }
}
```

### HTTP Status Codes
- **200** - Success
- **201** - Created
- **400** - Bad Request (validation error)
- **401** - Unauthorized
- **403** - Forbidden
- **404** - Not Found
- **500** - Internal Server Error

### Common Errors

| Error | Status | Message |
|-------|--------|---------|
| Invalid MongoDB ID | 400 | Invalid project ID format |
| Duplicate Entry | 400 | {field} already exists |
| Missing Required Field | 400 | {field} is required |
| Invalid Email | 400 | Invalid email format |
| Invalid URL | 400 | Invalid {field} format |
| Spam Detection | 400 | Too many messages from this email |
| Not Found | 404 | {Resource} not found |
| Server Error | 500 | Internal server error |

---

## Authentication & Authorization

⚠️ **Note:** This API currently does NOT include authentication. For production use:

1. Implement JWT authentication
2. Add authentication middleware for admin endpoints
3. Protect sensitive endpoints (DELETE, POST, PUT for skills/projects/etc.)
4. Allow only public GET and POST /messages endpoints

### Recommended Protected Endpoints

Protected (Admin only):
- `POST /api/projects`, `PUT /api/projects/:id`, `DELETE /api/projects/:id`
- `POST /api/skills`, `PUT /api/skills/:id`, `DELETE /api/skills/:id`
- `POST /api/experience`, `PUT /api/experience/:id`, `DELETE /api/experience/:id`
- `POST /api/certificates`, `PUT /api/certificates/:id`, `DELETE /api/certificates/:id`
- `GET /api/messages`, `PUT /api/messages/:id`, `DELETE /api/messages/:id`, `GET /api/messages/stats`

Public:
- `GET /api/projects`, `GET /api/projects/:id`, `GET /api/projects/stats`, `GET /api/projects/tech/:tech`
- `GET /api/skills`, `GET /api/skills/:id`, `GET /api/skills/stats`
- `GET /api/experience`, `GET /api/experience/:id`, `GET /api/experience/timeline`, `GET /api/experience/current`
- `GET /api/certificates`, `GET /api/certificates/:id`, `GET /api/certificates/stats`, `GET /api/certificates/issuer/:issuer`
- `POST /api/messages` (contact form submission)
- `GET /api/health`

---

## Code Architecture

```
backend/
├── controllers/         # Business logic for each resource
│   ├── projectController.js
│   ├── skillController.js
│   ├── experienceController.js
│   ├── certificateController.js
│   └── messageController.js
├── models/             # MongoDB schemas
│   ├── Project.js
│   ├── Skill.js
│   ├── Experience.js
│   ├── Certificate.js
│   └── Message.js
├── routes/             # API endpoint definitions
│   ├── projectRoutes.js
│   ├── skillRoutes.js
│   ├── experienceRoutes.js
│   ├── certificateRoutes.js
│   └── messageRoutes.js
├── utils/              # Utility functions and helpers
│   └── errorHandler.js # Custom error classes and middleware
├── server.js           # Main application file
├── package.json
└── README.md          # This file
```

---

## Key Features Explained

### Advanced Error Handling
- Custom error classes (ValidationError, AuthenticationError, etc.)
- Async error wrapper to catch promise rejections
- Global error middleware for consistent responses
- Helpful error messages for debugging

### Input Validation
- Required field validation
- Email format validation
- URL format validation
- Array validation
- Date format and logic validation
- String length constraints
- Enum value validation

### Pagination
- Adjustable page size (1-100 items)
- Total count included
- Page information for UI navigation
- Default limits to prevent abuse

### Filtering & Sorting
- Case-insensitive search
- Multiple filter criteria support
- Flexible sorting (ascending/descending)
- Regex-based search on text fields
- MongoDB aggregation for complex queries

### Statistics Endpoints
- Category breakdowns
- Usage counts by technology
- Average proficiency levels
- Message volume analysis
- Recent item tracking

### Spam Prevention
- Rate limiting on contact form (5 messages/email/hour)
- Email and message validation
- Minimum message length requirement

---

## Testing with cURL

### Create a Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Project",
    "description": "A comprehensive test project for the portfolio API",
    "techStack": ["Node.js", "React"],
    "githubLink": "https://github.com/test/project",
    "liveLink": "https://test-project.com"
  }'
```

### Get All Projects
```bash
curl http://localhost:5000/api/projects?page=1&limit=10
```

### Create a Skill
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "TypeScript",
    "category": "Frontend",
    "proficiency": 90
  }'
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message longer than 10 characters for the contact form"
  }'
```

### Get Health Status
```bash
curl http://localhost:5000/api/health
```

---

## Best Practices Used

✅ **Separation of Concerns** - Controllers, routes, and utilities separated  
✅ **DRY Principle** - Reusable error handling and validation  
✅ **Comments** - Every function has detailed JSDoc comments  
✅ **Consistent Responses** - All endpoints follow same response format  
✅ **Input Validation** - All user input validated before processing  
✅ **Database Optimization** - Using lean() for read-only queries  
✅ **Error Handling** - Comprehensive error handling throughout  
✅ **Async/Await** - Modern async programming patterns  
✅ **Environment Variables** - Configuration via .env  
✅ **RESTful Design** - Proper HTTP methods and status codes  

---

## Deployment Considerations

### Environment-Specific Configuration
```env
# Development
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:3000

# Production
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
FRONTEND_URL=https://yourdomain.com
```

### Security Recommendations
1. Use HTTPS in production
2. Implement JWT authentication
3. Add rate limiting middleware (express-rate-limit)
4. Use environment variables for sensitive data
5. Validate and sanitize all inputs
6. Add CSRF protection
7. Implement CORS properly
8. Use helmet.js for security headers
9. Enable MongoDB authentication
10. Regular security audits

### Performance Optimization
1. Add caching (Redis)
2. Use database indexing
3. Implement database query optimization
4. Add response compression (gzip)
5. Use CDN for static assets
6. Implement API versioning
7. Add monitoring and logging

---

## Contributing

When adding new features:
1. Follow the existing code structure
2. Add comprehensive comments
3. Validate all inputs
4. Handle errors gracefully
5. Write clear commit messages
6. Test all endpoints

---

## License

This project is part of the portfolio application.

---

## Support

For issues or questions, contact: [Your Contact Info]

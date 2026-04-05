# Backend Architecture & Flow Diagrams

## 🏗️ Overall Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                         │
│               http://localhost:3000                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP Requests
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    BACKEND SERVER                            │
│               http://localhost:5000                          │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              MIDDLEWARE LAYER                         │  │
│  │  • CORS handling                                      │  │
│  │  • JSON parsing                                       │  │
│  │  • Request logging                                    │  │
│  │  • Error handling                                     │  │
│  └──────────────────────────────────────────────────────┘  │
│                          │                                    │
│  ┌──────────────────────▼──────────────────────────────┐   │
│  │            ROUTING LAYER (routes/)                  │   │
│  │  • projectRoutes.js                                  │   │
│  │  • skillRoutes.js                                    │   │
│  │  • experienceRoutes.js                               │   │
│  │  • certificateRoutes.js                              │   │
│  │  • messageRoutes.js                                  │   │
│  └──────────────────────▼──────────────────────────────┘   │
│                          │                                    │
│  ┌──────────────────────▼──────────────────────────────┐   │
│  │         CONTROLLER LAYER (controllers/)             │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │  projectController.js                       │   │   │
│  │  │  • getProjects()                             │   │   │
│  │  │  • getProjectById()                          │   │   │
│  │  │  • addProject()                              │   │   │
│  │  │  • updateProject()                           │   │   │
│  │  │  • deleteProject()                           │   │   │
│  │  │  • getProjectStats()                         │   │   │
│  │  │  • getProjectsByTech()                       │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │  skillController.js (+ 4 more similar)      │   │   │
│  │  │  experienceController.js                    │   │   │
│  │  │  certificateController.js                   │   │   │
│  │  │  messageController.js                       │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  └──────────────────────▼──────────────────────────────┘   │
│                          │                                    │
│  ┌──────────────────────▼──────────────────────────────┐   │
│  │      DATA LAYER (models/ + MongoDB)                │   │
│  │  • Project.js                                        │   │
│  │  • Skill.js                                          │   │
│  │  • Experience.js                                     │   │
│  │  • Certificate.js                                    │   │
│  │  • Message.js                                        │   │
│  └──────────────────────▼──────────────────────────────┘   │
│                          │                                    │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         │ Database Operations
                         │
┌────────────────────────▼─────────────────────────────────────┐
│              MONGODB DATABASE                                │
│         mongodb://localhost:27017/portfolio                  │
│                                                              │
│  Collections:                                                │
│  • projects          (portfolio projects)                   │
│  • skills            (technical skills)                     │
│  • experiences       (work & education)                     │
│  • certificates      (professional certs)                   │
│  • messages          (contact form submissions)             │
└──────────────────────────────────────────────────────────────┘
```

## 📊 Request-Response Flow

```
REQUEST FROM FRONTEND
        │
        ├─ Method: GET/POST/PUT/DELETE
        ├─ Path: /api/projects, /api/skills, etc.
        ├─ Headers: Content-Type: application/json
        └─ Body: JSON data (for POST/PUT)
                │
                ▼
        ┌──────────────────────┐
        │   CORS Middleware    │ ◄─ Check origin
        └──────────┬───────────┘
                │
                ▼
        ┌──────────────────────┐
        │  Body Parser         │ ◄─ Parse JSON
        └──────────┬───────────┘
                │
                ▼
        ┌──────────────────────┐
        │  Logger Middleware   │ ◄─ Log request
        └──────────┬───────────┘
                │
                ▼
        ┌──────────────────────┐
        │  Route Matching      │ ◄─ Find route handler
        └──────────┬───────────┘
                │
                ▼
        ┌──────────────────────┐
        │  Controller Function │ ◄─ Business logic
        │  (async)             │
        │  ├─ Validate input   │
        │  ├─ Query database   │
        │  ├─ Transform data   │
        │  └─ Return response  │
        └──────────┬───────────┘
                │
                ├─ Error? ──┐
                │           │
                │           ▼
                │    ┌──────────────────┐
                │    │ Error Handler    │ ◄─ Catch error
                │    │ Middleware       │
                │    └────────┬─────────┘
                │             │
                ▼             ▼
        ┌──────────────────────────────┐
        │  Format Response             │
        │  {                           │
        │    success: true/false,      │
        │    data: {...} or error: {...}  │
        │    pagination: {...}         │
        │  }                           │
        └────────────┬─────────────────┘
                │
                ▼
        RESPONSE TO FRONTEND
        ├─ Status Code: 200, 201, 400, 404, 500, etc.
        ├─ Headers: Content-Type: application/json
        └─ Body: JSON response
```

## 🔄 CRUD Operation Flow (Example: Project)

```
CREATE PROJECT
└─ Frontend submits form
   └─ POST /api/projects
      └─ projectController.addProject()
         ├─ Validate input
         │  ├─ Check required fields
         │  ├─ Validate URLs
         │  └─ Validate tech stack array
         ├─ Create new Project instance
         ├─ Save to MongoDB
         └─ Return created project with ID
            └─ 201 Created response

READ PROJECTS
└─ Frontend requests list
   └─ GET /api/projects?page=1&limit=10&search=react
      └─ projectController.getProjects()
         ├─ Parse query parameters
         ├─ Build filter object
         │  └─ Add search filter (regex)
         ├─ Query MongoDB
         ├─ Count total documents
         └─ Return paginated results
            └─ 200 OK response

READ SINGLE PROJECT
└─ Frontend requests details
   └─ GET /api/projects/:id
      └─ projectController.getProjectById()
         ├─ Validate ID format
         ├─ Query MongoDB by ID
         └─ Return project or 404
            └─ 200 OK or 404 Not Found

UPDATE PROJECT
└─ Frontend submits edit form
   └─ PUT /api/projects/:id
      └─ projectController.updateProject()
         ├─ Validate ID
         ├─ Validate input fields
         ├─ Find and update document
         └─ Return updated project
            └─ 200 OK response

DELETE PROJECT
└─ Frontend confirms deletion
   └─ DELETE /api/projects/:id
      └─ projectController.deleteProject()
         ├─ Validate ID
         ├─ Find and delete document
         └─ Return confirmation
            └─ 200 OK response
```

## 🔌 Data Flow: Project Lifecycle

```
USER INTERACTION → API CALL → VALIDATION → DATABASE → RESPONSE

Create Project:
User fills form
    │
    ▼
POST /api/projects
{
  title: "My App",
  description: "...",
  techStack: ["React", "Node.js"],
  githubLink: "https://github.com/...",
  liveLink: "https://..."
}
    │
    ▼
projectController.addProject()
    │
    ├─ Validate title (required, not empty)
    ├─ Validate description (required, min 10 chars)
    ├─ Validate techStack (is array of strings)
    ├─ Validate URLs (valid URL format)
    │
    ▼
new Project({ validated data })
    │
    ▼
project.save()
    │
    ▼
MongoDB (projects collection)
    │
    ▼
Return {
  success: true,
  message: "Project created successfully",
  data: {
    _id: "...",
    title: "My App",
    description: "...",
    techStack: [...],
    createdAt: "...",
    updatedAt: "..."
  }
}
    │
    ▼
Frontend receives 201 Created
    │
    ▼
Update UI with new project
```

## 📡 API Endpoints Hierarchy

```
/api
├─ /health ........................... Server status
├─ /projects
│  ├─ GET ........................... List all projects
│  ├─ GET /stats ................... Project statistics
│  ├─ GET /tech/:tech ............. Projects by technology
│  ├─ GET /:id ..................... Get single project
│  ├─ POST ......................... Create project
│  ├─ PUT /:id ..................... Update project
│  └─ DELETE /:id .................. Delete project
│
├─ /skills
│  ├─ GET ........................... List all skills
│  ├─ GET /stats ................... Skill statistics
│  ├─ GET /:id ..................... Get single skill
│  ├─ POST ......................... Create skill
│  ├─ PUT /:id ..................... Update skill
│  └─ DELETE /:id .................. Delete skill
│
├─ /experience
│  ├─ GET ........................... List all experiences
│  ├─ GET /timeline ................ Timeline view
│  ├─ GET /current ................. Current experiences
│  ├─ GET /:id ..................... Get single experience
│  ├─ POST ......................... Create experience
│  ├─ PUT /:id ..................... Update experience
│  └─ DELETE /:id .................. Delete experience
│
├─ /certificates
│  ├─ GET ........................... List all certificates
│  ├─ GET /stats ................... Certificate statistics
│  ├─ GET /issuer/:issuer ......... Certificates by issuer
│  ├─ GET /:id ..................... Get single certificate
│  ├─ POST ......................... Create certificate
│  ├─ PUT /:id ..................... Update certificate
│  └─ DELETE /:id .................. Delete certificate
│
└─ /messages
   ├─ GET ........................... List messages (admin)
   ├─ GET /stats ................... Message statistics (admin)
   ├─ GET /unread .................. Unread messages (admin)
   ├─ GET /:id ..................... Get single message (admin)
   ├─ POST ......................... Submit message (PUBLIC)
   ├─ PUT /:id ..................... Update message (admin)
   ├─ DELETE /:id .................. Delete message (admin)
   ├─ PATCH /:id/read .............. Mark as read (admin)
   └─ PATCH /read/all .............. Mark all read (admin)
```

## 🛡️ Error Handling Flow

```
REQUEST PROCESSING
        │
        ▼
    ┌─────────────┐
    │  Try Block  │
    └─────┬───────┘
        │
        ├─ Success? ──────┐
        │                 │
        │                 ▼
        │          Return response
        │          (200/201)
        │
        └─ Error? ────┐
                      │
                      ▼
              ┌────────────────────┐
              │ Catch Error        │
              │ (in handleAsyncError) │
              └────────┬───────────┘
                       │
                       ▼
              ┌────────────────────┐
              │ Error Middleware   │
              │ (errorHandler)     │
              └────────┬───────────┘
                       │
                       ├─ ValidationError? → 400
                       ├─ AuthenticationError? → 401
                       ├─ AuthorizationError? → 403
                       ├─ NotFoundError? → 404
                       ├─ MongoDB error? → Handle specially
                       │  ├─ ValidationError → 400
                       │  ├─ CastError → 400
                       │  ├─ Duplicate Key → 400
                       │  └─ Other → 500
                       │
                       └─ ServerError? → 500
                             │
                             ▼
                       Return error response
                       {
                         success: false,
                         error: {
                           name: "ErrorType",
                           message: "Helpful message",
                           statusCode: 400-500
                         }
                       }
                             │
                             ▼
                       Frontend receives error
                             │
                             ▼
                       Display error to user
```

## 📝 Validation Pipeline

```
USER INPUT
    │
    ▼
┌──────────────────────────────────┐
│ 1. Required Field Check          │
│    • title required              │
│    • description required        │
│    └─ Missing? → ValidationError │
└──────────────────┬───────────────┘
    │
    ▼
┌──────────────────────────────────┐
│ 2. String Validation             │
│    • Not empty after trim        │
│    • Min/max length              │
│    └─ Invalid? → ValidationError │
└──────────────────┬───────────────┘
    │
    ▼
┌──────────────────────────────────┐
│ 3. Format Validation             │
│    • Email format (regex)        │
│    • URL format (URL constructor)│
│    • Date format (ISO)           │
│    └─ Invalid? → ValidationError │
└──────────────────┬───────────────┘
    │
    ▼
┌──────────────────────────────────┐
│ 4. Type Validation               │
│    • Array is array              │
│    • Number is number            │
│    • Boolean is boolean          │
│    └─ Invalid? → ValidationError │
└──────────────────┬───────────────┘
    │
    ▼
┌──────────────────────────────────┐
│ 5. Enum Validation               │
│    • Category in enum list       │
│    • Type in allowed values      │
│    └─ Invalid? → ValidationError │
└──────────────────┬───────────────┘
    │
    ▼
┌──────────────────────────────────┐
│ 6. Business Logic Validation     │
│    • End date after start date   │
│    • Future date check           │
│    • Duplicate prevention        │
│    └─ Invalid? → ValidationError │
└──────────────────┬───────────────┘
    │
    ▼
┌──────────────────────────────────┐
│ ✅ ALL VALIDATION PASSED         │
│    Data is safe for database     │
└──────────────────┬───────────────┘
    │
    ▼
PROCEED WITH DATABASE OPERATION
```

## 🗄️ Database Operations

```
MongoDB Collections
├─ projects
│  ├─ _id: ObjectId
│  ├─ title: String
│  ├─ description: String
│  ├─ techStack: [String]
│  ├─ githubLink: String (optional)
│  ├─ liveLink: String (optional)
│  ├─ image: String (optional)
│  ├─ createdAt: Date (auto)
│  └─ updatedAt: Date (auto)
│
├─ skills
│  ├─ _id: ObjectId
│  ├─ name: String
│  ├─ category: String (enum)
│  ├─ iconUrl: String (optional)
│  ├─ proficiency: Number (1-100)
│  └─ timestamps: {created, updated}
│
├─ experiences
│  ├─ _id: ObjectId
│  ├─ role: String
│  ├─ organization: String
│  ├─ type: String (enum)
│  ├─ startDate: Date
│  ├─ endDate: Date (optional, null = Present)
│  ├─ description: [String]
│  └─ timestamps: {created, updated}
│
├─ certificates
│  ├─ _id: ObjectId
│  ├─ title: String
│  ├─ issuer: String
│  ├─ dateIssued: Date
│  ├─ imageUrl: String
│  ├─ credentialLink: String (optional)
│  └─ timestamps: {created, updated}
│
└─ messages
   ├─ _id: ObjectId
   ├─ name: String
   ├─ email: String
   ├─ message: String
   ├─ isRead: Boolean (default: false)
   └─ timestamps: {created, updated}
```

## 🎯 Key Operations Summary

```
OPERATION          CONTROLLER FUNCTION    DB QUERY         RESPONSE
─────────────────────────────────────────────────────────────────────
List items         getXxx()               find() + limit   200 + array
Get single         getXxxById()           findById()       200 + object
Create             addXxx()               save()           201 + object
Update             updateXxx()            findByIdAndUpdate() 200 + object
Delete             deleteXxx()            findByIdAndDelete() 200 + object
Get stats          getXxxStats()          aggregate()      200 + stats
Filter/Search      getXxx()               find() + regex   200 + array
```

## 📊 Pagination Example

```
Frontend Request:
GET /api/projects?page=2&limit=5

Backend Processing:
├─ pageNum = 2
├─ pageSize = 5
├─ skip = (2-1) * 5 = 5
│
├─ Query: find().skip(5).limit(5)
│
└─ Returns 5 documents starting from position 5

Response:
{
  success: true,
  data: [ /* 5 projects */ ],
  pagination: {
    total: 23,           ◄─ Total documents in collection
    page: 2,             ◄─ Current page
    limit: 5,            ◄─ Items per page
    pages: 5             ◄─ Total pages (23/5 = 5)
  }
}

Frontend shows:
"Showing 6-10 of 23 | Page 2 of 5"
[Previous] 1 [2] 3 4 5 [Next]
```

---

This architecture ensures:
✅ Clear separation of concerns
✅ Easy to test each layer
✅ Scalable to new features
✅ Consistent error handling
✅ Efficient database queries
✅ Professional code structure

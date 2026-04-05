# 🚀 Quick Start Guide - Backend

Get your portfolio backend running in 5 minutes!

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (1 min)
```bash
cd backend
npm install
```

### Step 2: Configure Environment (1 min)
```bash
cp .env.example .env
```

Edit `.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:3000
```

**Using MongoDB Atlas instead?**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### Step 3: Start Server (30 sec)
```bash
npm run dev
```

You should see:
```
╔════════════════════════════════════════╗
║      🚀 PORTFOLIO BACKEND SERVER       ║
╠════════════════════════════════════════╣
║ Server running on port 5000            ║
║ Environment: development               ║
║ Base URL: http://localhost:5000        ║
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
```

### Step 4: Verify It's Working (1 min)

**Terminal:**
```bash
curl http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Server is operational",
  "timestamp": "2024-01-15T10:30:00Z",
  "uptime": 5.234,
  "environment": "development"
}
```

### Step 5: Seed Sample Data (1 min, Optional)

```bash
node seed.js
```

You'll see:
```
🌱 Starting database seeding...
✓ Connected to MongoDB
🗑️  Clearing existing data...
✓ Database cleared
📁 Seeding projects...
✓ Created 3 projects
🎯 Seeding skills...
✓ Created 8 skills
💼 Seeding experiences...
✓ Created 3 experiences
🏆 Seeding certificates...
✓ Created 3 certificates
✅ Database seeding completed successfully!
```

---

## 🧪 Test the API

### Get Projects
```bash
curl http://localhost:5000/api/projects
```

### Get Skills
```bash
curl http://localhost:5000/api/skills
```

### Create a Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Amazing App",
    "description": "A full-stack application built with modern technologies",
    "techStack": ["React", "Node.js", "MongoDB"],
    "githubLink": "https://github.com/yourname/myapp",
    "liveLink": "https://myapp.com"
  }'
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Recruiter",
    "email": "jane@company.com",
    "message": "Your portfolio looks amazing! We would love to discuss opportunities."
  }'
```

### Get Project Statistics
```bash
curl http://localhost:5000/api/projects/stats
```

---

## 📚 Available Endpoints Quick Reference

### Projects
```
GET    /api/projects                    # List all
GET    /api/projects/:id                # Get one
POST   /api/projects                    # Create
PUT    /api/projects/:id                # Update
DELETE /api/projects/:id                # Delete
GET    /api/projects/stats              # Statistics
GET    /api/projects/tech/React         # By technology
```

### Skills
```
GET    /api/skills                      # List all
GET    /api/skills/:id                  # Get one
POST   /api/skills                      # Create
PUT    /api/skills/:id                  # Update
DELETE /api/skills/:id                  # Delete
GET    /api/skills/stats                # Statistics
```

### Experience
```
GET    /api/experience                  # List all
GET    /api/experience/:id              # Get one
POST   /api/experience                  # Create
PUT    /api/experience/:id              # Update
DELETE /api/experience/:id              # Delete
GET    /api/experience/timeline         # Timeline view
GET    /api/experience/current          # Current only
```

### Certificates
```
GET    /api/certificates                # List all
GET    /api/certificates/:id            # Get one
POST   /api/certificates                # Create
PUT    /api/certificates/:id            # Update
DELETE /api/certificates/:id            # Delete
GET    /api/certificates/stats          # Statistics
GET    /api/certificates/issuer/AWS     # By issuer
```

### Messages (Contact Form)
```
POST   /api/messages                    # Submit (PUBLIC)
GET    /api/messages                    # List (admin)
GET    /api/messages/:id                # Get one (admin)
GET    /api/messages/stats              # Statistics (admin)
GET    /api/messages/unread             # Unread (admin)
PUT    /api/messages/:id                # Update (admin)
DELETE /api/messages/:id                # Delete (admin)
PATCH  /api/messages/:id/read           # Mark read (admin)
PATCH  /api/messages/read/all           # Mark all read (admin)
```

---

## 🐛 Troubleshooting

### "Port 5000 already in use"
```bash
# Change PORT in .env to 5001, or:
lsof -ti:5000 | xargs kill -9
npm run dev
```

### "Cannot connect to MongoDB"
```bash
# Make sure MongoDB is running:
mongod

# Or use MongoDB Atlas connection string in .env
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
```

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### "Unknown route"
- Check the endpoint path
- Make sure you're using the right HTTP method (GET, POST, etc.)
- Check that server is running on port 5000

---

## 📝 Example Requests with Data

### Create a Skill
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Python",
    "category": "Backend",
    "proficiency": 85,
    "iconUrl": "https://via.placeholder.com/50?text=Python"
  }'
```

### Create an Experience
```bash
curl -X POST http://localhost:5000/api/experience \
  -H "Content-Type: application/json" \
  -d '{
    "role": "Senior Developer",
    "organization": "Tech Company",
    "type": "Work",
    "startDate": "2022-01-15",
    "endDate": null,
    "description": [
      "Led development team",
      "Improved performance by 40%",
      "Mentored junior developers"
    ]
  }'
```

### Create a Certificate
```bash
curl -X POST http://localhost:5000/api/certificates \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AWS Solutions Architect",
    "issuer": "Amazon Web Services",
    "dateIssued": "2023-12-15",
    "imageUrl": "https://via.placeholder.com/200x150?text=AWS",
    "credentialLink": "https://aws.amazon.com/verify"
  }'
```

---

## 🔄 Development Workflow

### While Developing
```bash
npm run dev
# Auto-restarts on file changes
```

### Before Production
```bash
# Stop dev server
# Change NODE_ENV=production in .env
npm start
```

### Running Tests
```bash
# Test endpoints manually with curl (see above)
# Or use Postman/Insomnia for GUI testing
```

---

## 📊 Typical Response Format

### Success Response
```json
{
  "success": true,
  "message": "Project created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "My Project",
    "description": "Project description",
    "techStack": ["React", "Node.js"],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### List Response with Pagination
```json
{
  "success": true,
  "data": [ /* items */ ],
  "pagination": {
    "total": 5,
    "page": 1,
    "limit": 10,
    "pages": 1
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "name": "ValidationError",
    "message": "Title is required",
    "statusCode": 400
  }
}
```

---

## 🎓 Next Steps

1. **Review the Code**
   - Read through the controllers (comments explain everything)
   - Check out the error handling in utils/errorHandler.js
   - Look at the routes for endpoint definitions

2. **Test All Endpoints**
   - Use the example curl commands above
   - Try different query parameters (?page=2&limit=5)
   - Test error cases (invalid data)

3. **Understand the Architecture**
   - Read ARCHITECTURE.md for diagrams
   - See API_DOCUMENTATION.md for complete reference
   - Check README.md for detailed explanations

4. **Connect Your Frontend**
   - Frontend should be at http://localhost:3000
   - Make requests to http://localhost:5000/api/...
   - Handle success and error responses

5. **Customize for Your Portfolio**
   - Edit seed.js with your actual data
   - Add more endpoints if needed
   - Implement authentication for admin functions

---

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Overview & features |
| API_DOCUMENTATION.md | Complete API reference |
| ARCHITECTURE.md | System design & flows |
| BACKEND_SUMMARY.md | Implementation details |
| .env.example | Configuration template |
| seed.js | Sample data seeder |

---

## ⌨️ Common Commands

```bash
# Development
npm run dev              # Start with auto-reload

# Production
npm start               # Start production server

# Database
node seed.js            # Seed with sample data

# Maintenance
npm install             # Install dependencies
npm list                # List dependencies
npm update              # Update dependencies
```

---

## 🎯 You're Ready!

Your backend is production-ready and fully documented. Now:

1. ✅ Start the backend: `npm run dev`
2. ✅ Test the endpoints (see examples above)
3. ✅ Build your frontend
4. ✅ Connect them together
5. ✅ Deploy to production

**Questions?** Check the documentation files for detailed info.

**Ready to impress?** Your code is already doing it! 🚀

# Testing & Verification Guide

Complete guide for testing the frontend-backend integration and verifying everything works correctly.

---

## Table of Contents

1. [Pre-Testing Setup](#pre-testing-setup)
2. [Backend Testing](#backend-testing)
3. [Frontend Testing](#frontend-testing)
4. [Integration Testing](#integration-testing)
5. [Performance Testing](#performance-testing)
6. [Security Testing](#security-testing)
7. [Debugging Tools](#debugging-tools)

---

## Pre-Testing Setup

### Ensure Everything is Installed

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### Verify Environment Files

**Backend `.env`:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/myportfolio
FRONTEND_URL=http://localhost:5173
```

**Frontend `.env.local`:**
```env
VITE_API_URL=http://localhost:5000/api
```

### Verify MongoDB is Running

```bash
# Check if MongoDB is running
mongosh

# If connected, you should see:
# test> 

# If not running, start it:
# macOS with Homebrew:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod

# Or run as standalone:
mongod
```

---

## Backend Testing

### 1. Start Backend Server

```bash
cd backend
npm run dev
```

Expected output:
```
🚀 Backend Server initialized!
✅ MongoDB Connected Successfully!
📡 Server running on: http://localhost:5000
```

### 2. Test Health Endpoint

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "Backend is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### 3. Test Message Submission

#### Test with Valid Data

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "This is a test message with sufficient length."
  }'
```

Expected response (Status 201):
```json
{
  "success": true,
  "message": "Message created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "This is a test message with sufficient length.",
    "isRead": false,
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
}
```

#### Test with Missing Fields

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John"
  }'
```

Expected response (Status 400):
```json
{
  "success": false,
  "message": "Email is required",
  "status": 400
}
```

#### Test with Invalid Email

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "invalid-email",
    "message": "Test message"
  }'
```

Expected response (Status 400):
```json
{
  "success": false,
  "message": "Please provide a valid email address",
  "status": 400
}
```

#### Test Message Too Short

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Short"
  }'
```

Expected response (Status 400):
```json
{
  "success": false,
  "message": "Message must be between 10 and 1000 characters",
  "status": 400
}
```

### 4. Test Rate Limiting

Submit 6 messages from the same email within a short time:

```bash
# Send message 1
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"ratelimit@test.com","message":"Message 1 test content here"}'

# Send message 5
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"ratelimit@test.com","message":"Message 5 test content here"}'

# This 6th message should be rejected
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"ratelimit@test.com","message":"Message 6 test content here"}'
```

Expected response on 6th message (Status 429):
```json
{
  "success": false,
  "message": "You have exceeded the maximum number of messages. Please try again later.",
  "status": 429
}
```

### 5. Test Get Messages (Admin)

```bash
# Get all messages
curl http://localhost:5000/api/messages

# Get paginated
curl "http://localhost:5000/api/messages?page=1&limit=10"

# Get specific message
curl http://localhost:5000/api/messages/507f1f77bcf86cd799439011
```

### 6. Test Database Entry

```bash
# Open MongoDB shell
mongosh

# Switch to database
use myportfolio

# View all messages
db.messages.find().pretty()

# Count messages
db.messages.countDocuments()

# View message statistics
db.messages.aggregate([
  { $group: { _id: null, count: { $sum: 1 }, unread: { $sum: { $cond: [{ $eq: ["$isRead", false] }, 1, 0] } } } }
])
```

---

## Frontend Testing

### 1. Start Frontend Server

```bash
cd frontend
npm run dev
```

Expected output:
```
VITE v7.0.3  ready in 245 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### 2. Open in Browser

Navigate to: `http://localhost:5173`

### 3. Test Contact Form

1. **Scroll to Contact Section**
2. **Fill in the form:**
   - Name: John Doe
   - Email: test@example.com
   - Message: This is a test message from the contact form.

3. **Click "Send Message" button**

4. **Expected behavior:**
   - Button shows loading state with spinner
   - Success message appears: "Your message has been sent successfully!"
   - Form fields clear
   - Message appears in database

### 4. Test Form Validation (Frontend)

#### Missing Fields
- Fill only "Name" field
- Click "Send Message"
- Expected: Error message "Please fill in all fields."

#### Invalid Email
- Name: John
- Email: invalid-email
- Message: Test message
- Expected: Error message "Please enter a valid email address."

#### Message Too Short
- Name: John
- Email: test@example.com
- Message: Hi
- Expected: Form should have HTML5 validation (minlength="10")

### 5. Test Rate Limiting (Frontend)

Send 6 messages from same email quickly:

1. Fill form and submit
2. Success message appears
3. Fill form again with same email
4. Repeat 5 more times
5. On 6th attempt:
   - Expected error: "You've sent too many messages recently. Please try again later."

### 6. Inspect Network Requests

**Open DevTools (F12) → Network tab**

1. Fill and submit form
2. Look for POST request to `/api/messages`
3. Verify request:
   - Method: POST
   - URL: http://localhost:5000/api/messages
   - Headers include: Content-Type: application/json
   - Body contains: name, email, message

4. Verify response:
   - Status: 201 (Created) or 400/429 (Error)
   - Body contains: success, message, data

---

## Integration Testing

### Full Flow Test

**Step 1: Clear Database**
```bash
mongosh
use myportfolio
db.messages.deleteMany({})
exit
```

**Step 2: Start Backend**
```bash
cd backend
npm run dev
# Wait for "Server running on: http://localhost:5000"
```

**Step 3: Start Frontend**
```bash
cd frontend
npm run dev
# Wait for "Local: http://localhost:5173"
```

**Step 4: Test in Browser**

1. Navigate to http://localhost:5173
2. Fill contact form
3. Submit message
4. Verify success message
5. Check database

**Step 5: Verify in Database**

```bash
mongosh
use myportfolio
db.messages.findOne({email: "test@example.com"})
```

Expected output:
```json
{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "test@example.com",
  "message": "Test message content",
  "isRead": false,
  "createdAt": ISODate("2024-01-01T12:00:00Z"),
  "updatedAt": ISODate("2024-01-01T12:00:00Z"),
  "__v": 0
}
```

### Browser Console Check

Open DevTools Console (F12) and verify:
- No red errors
- Only blue network info (normal)
- No CORS errors

---

## Performance Testing

### 1. Measure API Response Time

```bash
# Time how long the request takes
time curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"perf@test.com","message":"Performance test message content here"}'
```

Expected: Response in < 100ms

### 2. Test with DevTools Network Tab

1. Open DevTools → Network tab
2. Throttle to "Slow 3G" (simulate slow network)
3. Submit form
4. Verify timeout isn't reached (should still work)
5. Check request time in Network tab

### 3. Load Test (Optional - Using Apache Bench)

```bash
# Install: apt-get install apache2-utils (Linux) or brew install httpd (macOS)

ab -n 100 -c 10 -p data.json -T application/json http://localhost:5000/api/messages
```

This sends 100 requests with 10 concurrent connections.

---

## Security Testing

### 1. Test Input Sanitization

#### Test with Malicious Input

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John<script>alert(1)</script>",
    "email": "test@example.com",
    "message": "Test<img src=x onerror=alert(1)>"
  }'
```

Expected: Input should be stored as-is (no execution). Backend should display safely.

#### Test with SQL Injection

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "test@example.com",
    "message": "'; DROP TABLE messages; --"
  }'
```

Expected: Request succeeds, table is NOT dropped (MongoDB uses different syntax)

### 2. Test CORS

#### Valid Origin (From Frontend)

Automatically tested when submitting from http://localhost:5173

#### Invalid Origin

```bash
curl -X POST http://localhost:5000/api/messages \
  -H "Content-Type: application/json" \
  -H "Origin: http://evil.com" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message content here"}'
```

Expected: Should be rejected or blocked by browser

### 3. Test Content Length Limits

```bash
# Create a string with 1001 characters
python3 -c "
import json
import urllib.request

data = {
    'name': 'John',
    'email': 'test@example.com',
    'message': 'x' * 1001
}

req = urllib.request.Request(
    'http://localhost:5000/api/messages',
    data=json.dumps(data).encode('utf-8'),
    headers={'Content-Type': 'application/json'}
)

try:
    urllib.request.urlopen(req)
except Exception as e:
    print(f'Error: {e}')
"
```

Expected: Error 400 - "Message must be between 10 and 1000 characters"

---

## Debugging Tools

### 1. VS Code Debugger

Add to `.vscode/launch.json` in backend:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Backend",
      "program": "${workspaceFolder}/backend/server.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
```

Press F5 to start debugging.

### 2. Browser DevTools

**Network Tab:**
- Filter by XHR requests
- See request/response details
- Check status codes and timing

**Console Tab:**
- See any JavaScript errors
- Test API calls manually:
  ```javascript
  fetch('http://localhost:5000/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test',
      email: 'test@example.com',
      message: 'Testing from console'
    })
  }).then(r => r.json()).then(console.log)
  ```

**Application Tab:**
- Check local storage
- Check cookies
- Check IndexedDB

### 3. MongoDB Compass

GUI for MongoDB:
1. Download from https://www.mongodb.com/products/compass
2. Connect to `mongodb://localhost:27017`
3. Browse `myportfolio` database
4. View `messages` collection
5. See real-time data updates

### 4. Postman Collection

Create a Postman collection for testing:

```json
{
  "info": {
    "name": "Portfolio API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Submit Message",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"John Doe\",\n  \"email\": \"john@example.com\",\n  \"message\": \"Test message content here\"\n}"
        },
        "url": {
          "raw": "http://localhost:5000/api/messages",
          "protocol": "http",
          "host": ["localhost"],
          "port": "5000",
          "path": ["api", "messages"]
        }
      }
    }
  ]
}
```

### 5. Logs & Output

**Check Backend Logs:**
```bash
# If using PM2
pm2 logs backend

# If running with npm run dev
# Logs appear in terminal output
```

**Check Frontend Logs:**
```bash
# Browser Console (F12)
# Look for any errors or warnings
```

---

## Test Checklist

### Backend Tests
- [ ] Health endpoint returns OK
- [ ] Message submission with valid data succeeds
- [ ] Missing fields validation works
- [ ] Invalid email validation works
- [ ] Message length validation works
- [ ] Rate limiting works (5 per hour)
- [ ] Database stores messages correctly
- [ ] Get messages endpoint works

### Frontend Tests
- [ ] Contact form visible
- [ ] Form submission triggers API call
- [ ] Success message displays
- [ ] Form clears after submission
- [ ] Error messages display correctly
- [ ] Loading spinner shows
- [ ] No CORS errors in console

### Integration Tests
- [ ] Frontend and backend communicate
- [ ] Messages saved to database from frontend
- [ ] API response errors display in UI
- [ ] Rate limiting triggers on UI
- [ ] All validation rules enforced

### Security Tests
- [ ] XSS protection (input sanitization)
- [ ] CORS properly configured
- [ ] Input length limits enforced
- [ ] Email validation prevents invalid input
- [ ] No sensitive data in logs

---

## Troubleshooting During Testing

### Error: Cannot POST /api/messages

**Cause:** Wrong URL or backend not running

**Fix:**
```bash
# Check backend is running
curl http://localhost:5000/api/health

# Check frontend uses correct API URL
echo $VITE_API_URL
```

### Error: CORS policy blocked request

**Cause:** Frontend URL not in CORS whitelist

**Fix:**
```env
# backend/.env
FRONTEND_URL=http://localhost:5173
```

### Error: MongoDB connection failed

**Cause:** MongoDB not running

**Fix:**
```bash
# Start MongoDB
mongod

# Or verify connection string in .env
# mongodb://localhost:27017/myportfolio
```

### Error: Message saved but not visible in UI

**Cause:** Response parsing issue

**Fix:**
```javascript
// Check response format in browser console
fetch('http://localhost:5000/api/messages', {...})
  .then(r => r.json())
  .then(data => console.log(data))
```

---

## Summary

Complete testing ensures:
- ✅ Backend works correctly
- ✅ Frontend integrates properly
- ✅ Data persists to database
- ✅ Validation works on both ends
- ✅ Error handling is robust
- ✅ Performance is acceptable
- ✅ Security is maintained

All tests should pass before deploying to production!

---

**Last Updated:** 2024
**Status:** ✅ Complete Testing Framework Ready

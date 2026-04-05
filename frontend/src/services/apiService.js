/**
 * API Service for Frontend
 * 
 * This service provides a centralized way to make requests to the backend API.
 * It handles:
 * - Base URL configuration
 * - Error handling
 * - Request/response formatting
 * - Status code handling
 * 
 * Usage Example:
 * ```javascript
 * import apiService from './services/apiService';
 * 
 * // Submit a message
 * try {
 *   const response = await apiService.post('/messages', {
 *     name: 'John',
 *     email: 'john@example.com',
 *     message: 'Hello!'
 *   });
 *   console.log('Message sent:', response.data);
 * } catch (error) {
 *   console.error('Failed to send message:', error.message);
 * }
 * ```
 */

class APIService {
  constructor() {
    // Get API base URL from environment variables
    // Falls back to localhost:5000 for development
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    
    // Default headers for all requests
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Handle API response
   * Checks status code and throws error if response is not ok
   * @param {Response} response - Fetch response object
   * @returns {Promise<Object>} - Parsed JSON response
   * @throws {APIError} - Custom error with message and status
   */
  async handleResponse(response) {
    const data = await response.json();

    // If response is not ok (status 200-299), throw error
    if (!response.ok) {
      const error = new Error(
        data.message || `API Error: ${response.status}`
      );
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  }

  /**
   * Make a GET request
   * Retrieves data from the server without modifying anything
   * 
   * @param {string} endpoint - API endpoint (e.g., '/messages', '/projects/1')
   * @param {Object} options - Additional fetch options
   * @returns {Promise<Object>} - API response data
   * 
   * @example
   * const projects = await apiService.get('/projects');
   */
  async get(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'GET',
        headers: this.defaultHeaders,
        ...options,
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`GET ${endpoint} failed:`, error);
      throw error;
    }
  }

  /**
   * Make a POST request
   * Sends new data to the server to create a resource
   * 
   * @param {string} endpoint - API endpoint (e.g., '/messages', '/projects')
   * @param {Object} data - Data to send in request body
   * @param {Object} options - Additional fetch options
   * @returns {Promise<Object>} - API response data
   * 
   * @example
   * const newProject = await apiService.post('/projects', {
   *   title: 'My Project',
   *   description: 'A cool project'
   * });
   */
  async post(endpoint, data = {}, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: this.defaultHeaders,
        body: JSON.stringify(data),
        ...options,
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`POST ${endpoint} failed:`, error);
      throw error;
    }
  }

  /**
   * Make a PUT request
   * Replaces an entire resource on the server
   * 
   * @param {string} endpoint - API endpoint (e.g., '/projects/1')
   * @param {Object} data - Updated data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<Object>} - API response data
   * 
   * @example
   * const updated = await apiService.put('/projects/1', {
   *   title: 'Updated Title'
   * });
   */
  async put(endpoint, data = {}, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'PUT',
        headers: this.defaultHeaders,
        body: JSON.stringify(data),
        ...options,
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`PUT ${endpoint} failed:`, error);
      throw error;
    }
  }

  /**
   * Make a PATCH request
   * Partially updates a resource on the server
   * 
   * @param {string} endpoint - API endpoint (e.g., '/messages/1/read')
   * @param {Object} data - Partial data to update
   * @param {Object} options - Additional fetch options
   * @returns {Promise<Object>} - API response data
   * 
   * @example
   * const updated = await apiService.patch('/messages/1', {
   *   isRead: true
   * });
   */
  async patch(endpoint, data = {}, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'PATCH',
        headers: this.defaultHeaders,
        body: JSON.stringify(data),
        ...options,
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`PATCH ${endpoint} failed:`, error);
      throw error;
    }
  }

  /**
   * Make a DELETE request
   * Removes a resource from the server
   * 
   * @param {string} endpoint - API endpoint (e.g., '/messages/1', '/projects/1')
   * @param {Object} options - Additional fetch options
   * @returns {Promise<Object>} - API response data
   * 
   * @example
   * await apiService.delete('/messages/1');
   */
  async delete(endpoint, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'DELETE',
        headers: this.defaultHeaders,
        ...options,
      });

      return await this.handleResponse(response);
    } catch (error) {
      console.error(`DELETE ${endpoint} failed:`, error);
      throw error;
    }
  }

  /**
   * Set custom header for all future requests
   * Useful for adding authentication tokens
   * 
   * @param {string} key - Header name (e.g., 'Authorization')
   * @param {string} value - Header value (e.g., 'Bearer token...')
   * 
   * @example
   * apiService.setHeader('Authorization', 'Bearer eyJhbGc...');
   */
  setHeader(key, value) {
    this.defaultHeaders[key] = value;
  }

  /**
   * Remove a custom header from all future requests
   * 
   * @param {string} key - Header name to remove
   * 
   * @example
   * apiService.removeHeader('Authorization');
   */
  removeHeader(key) {
    delete this.defaultHeaders[key];
  }

  /**
   * Get current base URL
   * Useful for debugging
   * 
   * @returns {string} - Current API base URL
   */
  getBaseURL() {
    return this.baseURL;
  }
}

// Create and export a singleton instance
// This ensures all components use the same configuration
const apiService = new APIService();

export default apiService;

/**
 * Available API Endpoints
 * 
 * MESSAGES (Contact Form)
 * ========================
 * POST   /messages                    - Submit contact form message
 * GET    /messages                    - Get all messages (admin)
 * GET    /messages/:id                - Get message details (admin)
 * PUT    /messages/:id                - Update message (admin)
 * DELETE /messages/:id                - Delete message (admin)
 * GET    /messages/unread             - Get unread messages (admin)
 * PATCH  /messages/:id/read           - Mark as read (admin)
 * PATCH  /messages/read-all           - Mark all as read (admin)
 * GET    /messages/stats              - Message statistics (admin)
 * 
 * PROJECTS
 * ========================
 * POST   /projects                    - Create new project (admin)
 * GET    /projects                    - Get all projects
 * GET    /projects/:id                - Get project details
 * PUT    /projects/:id                - Update project (admin)
 * DELETE /projects/:id                - Delete project (admin)
 * GET    /projects/stats              - Project statistics
 * GET    /projects/tech/:technology   - Get projects by tech
 * 
 * SKILLS
 * ========================
 * POST   /skills                      - Create new skill (admin)
 * GET    /skills                      - Get all skills
 * GET    /skills/:id                  - Get skill details
 * PUT    /skills/:id                  - Update skill (admin)
 * DELETE /skills/:id                  - Delete skill (admin)
 * GET    /skills/stats                - Skill statistics
 * 
 * EXPERIENCE
 * ========================
 * POST   /experience                  - Create experience entry (admin)
 * GET    /experience                  - Get all experiences
 * GET    /experience/:id              - Get experience details
 * PUT    /experience/:id              - Update experience (admin)
 * DELETE /experience/:id              - Delete experience (admin)
 * GET    /experience/timeline         - Get experience timeline
 * GET    /experience/current          - Get current experiences
 * 
 * CERTIFICATES
 * ========================
 * POST   /certificates                - Create certificate (admin)
 * GET    /certificates                - Get all certificates
 * GET    /certificates/:id            - Get certificate details
 * PUT    /certificates/:id            - Update certificate (admin)
 * DELETE /certificates/:id            - Delete certificate (admin)
 * GET    /certificates/stats          - Certificate statistics
 * GET    /certificates/issuer/:issuer - Get certificates by issuer
 */

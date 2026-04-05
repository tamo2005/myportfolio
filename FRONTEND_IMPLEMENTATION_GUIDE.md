# Frontend Component Integration Examples

This guide shows how to integrate other frontend components with the backend API.

---

## Table of Contents

1. [Projects Section](#projects-section)
2. [Skills Section](#skills-section)
3. [Experience Section](#experience-section)
4. [Certificates Section](#certificates-section)
5. [General Patterns](#general-patterns)
6. [Error Handling](#error-handling)

---

## Projects Section

### Current Implementation (Static Data)

```jsx
// ProjectsSection.jsx - Currently using hardcoded data
const projects = [
  {
    title: 'Gradify.AI',
    description: '...',
    tech: ['React', 'Python', 'TensorFlow'],
    // ... more fields
  },
  // ... more projects
];
```

### Enhanced Implementation (API Integration)

```jsx
import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from backend on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await apiService.get('/projects');
        setProjects(response.data); // Backend returns { data: [...] }
        setError(null);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Failed to load projects. Please refresh the page.');
        // Fall back to static data here if needed
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center py-20">Loading projects...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  // Render projects
  return (
    <section className="projects-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
```

### Add New Project (Admin Feature - Future)

```jsx
const handleAddProject = async (formData) => {
  try {
    const response = await apiService.post('/projects', {
      title: formData.title,
      description: formData.description,
      techStack: formData.tech,
      githubLink: formData.github,
      liveLink: formData.demo,
      image: formData.image,
    });
    
    // Add new project to state
    setProjects([...projects, response.data]);
    console.log('Project created successfully');
  } catch (error) {
    console.error('Failed to create project:', error.message);
  }
};
```

---

## Skills Section

### API Integration Example

```jsx
import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [skillsByCategory, setSkillsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await apiService.get('/skills');
        setSkills(response.data);
        
        // Group skills by category
        const grouped = response.data.reduce((acc, skill) => {
          if (!acc[skill.category]) {
            acc[skill.category] = [];
          }
          acc[skill.category].push(skill);
          return acc;
        }, {});
        
        setSkillsByCategory(grouped);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <div>Loading skills...</div>;

  return (
    <section className="skills-section">
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} className="skill-category">
          <h3 className="text-xl font-bold mb-4">{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categorySkills.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
```

### Get Skill Statistics

```jsx
const fetchSkillStats = async () => {
  try {
    const response = await apiService.get('/skills/stats');
    console.log('Skill Statistics:', response.data);
    // response.data contains:
    // {
    //   totalSkills: 25,
    //   byCategory: { Frontend: 8, Backend: 7, AI: 5, ML: 5 },
    //   averageProficiency: 85
    // }
  } catch (error) {
    console.error('Failed to fetch skill stats:', error);
  }
};
```

---

## Experience Section

### Dynamic Timeline Implementation

```jsx
import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const ExperienceSection = () => {
  const [timeline, setTimeline] = useState([]);
  const [currentExperiences, setCurrentExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        // Fetch timeline view (grouped by type)
        const timelineResponse = await apiService.get('/experience/timeline');
        setTimeline(timelineResponse.data);

        // Fetch current experiences (active ones)
        const currentResponse = await apiService.get('/experience/current');
        setCurrentExperiences(currentResponse.data);
      } catch (error) {
        console.error('Failed to fetch experience:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) return <div>Loading experience...</div>;

  return (
    <section className="experience-section">
      {/* Current Experiences Badge */}
      {currentExperiences.length > 0 && (
        <div className="current-experiences mb-8">
          <h3 className="text-lg font-bold text-[#FF6B47]">Currently</h3>
          {currentExperiences.map((exp) => (
            <div key={exp._id} className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-[#FF6B47] rounded-full animate-pulse"></div>
              <span>{exp.role} at {exp.organization}</span>
            </div>
          ))}
        </div>
      )}

      {/* Timeline */}
      <div className="timeline">
        {timeline.map((item, index) => (
          <ExperienceItem key={item._id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
```

### Filter Experience by Date Range

```jsx
const fetchExperienceByDate = async (startDate, endDate) => {
  try {
    const response = await apiService.get(
      `/experience?startDate=${startDate}&endDate=${endDate}`
    );
    return response.data;
  } catch (error) {
    console.error('Failed to fetch filtered experience:', error);
  }
};
```

---

## Certificates Section

### Display Certificates with Filtering

```jsx
import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const CertificatesSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [issuers, setIssuers] = useState([]);
  const [selectedIssuer, setSelectedIssuer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await apiService.get('/certificates');
        setCertificates(response.data);

        // Extract unique issuers
        const uniqueIssuers = [...new Set(
          response.data.map(cert => cert.issuer)
        )];
        setIssuers(uniqueIssuers);
      } catch (error) {
        console.error('Failed to fetch certificates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const handleFilterByIssuer = async (issuer) => {
    try {
      const response = await apiService.get(`/certificates/issuer/${issuer}`);
      setCertificates(response.data);
      setSelectedIssuer(issuer);
    } catch (error) {
      console.error('Failed to filter certificates:', error);
    }
  };

  const handleShowAll = async () => {
    try {
      const response = await apiService.get('/certificates');
      setCertificates(response.data);
      setSelectedIssuer(null);
    } catch (error) {
      console.error('Failed to fetch all certificates:', error);
    }
  };

  if (loading) return <div>Loading certificates...</div>;

  return (
    <section className="certificates-section">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={handleShowAll}
          className={`px-4 py-2 rounded-full transition-all ${
            selectedIssuer === null
              ? 'bg-[#FF6B47] text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All Certificates
        </button>

        {issuers.map((issuer) => (
          <button
            key={issuer}
            onClick={() => handleFilterByIssuer(issuer)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedIssuer === issuer
                ? 'bg-[#FF6B47] text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {issuer}
          </button>
        ))}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <CertificateCard key={cert._id} certificate={cert} />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
```

---

## General Patterns

### Loading State Pattern

```jsx
// Show loading indicator while fetching data
if (loading) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B47]"></div>
    </div>
  );
}
```

### Error Handling Pattern

```jsx
// Show error message if fetch fails
if (error) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p className="font-bold">Error loading data</p>
      <p>{error}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Retry
      </button>
    </div>
  );
}
```

### Empty State Pattern

```jsx
// Show message when no data is available
if (data.length === 0) {
  return (
    <div className="text-center py-20 text-gray-400">
      <p className="text-xl">No data available</p>
      <p className="text-sm mt-2">Check back soon for updates!</p>
    </div>
  );
}
```

### Pagination Pattern

```jsx
const [currentPage, setCurrentPage] = useState(1);
const [pageSize] = useState(10);

useEffect(() => {
  const fetchPage = async () => {
    try {
      const response = await apiService.get(
        `/items?page=${currentPage}&limit=${pageSize}`
      );
      setItems(response.data);
      setTotalPages(response.totalPages); // Backend provides this
    } catch (error) {
      console.error('Failed to fetch page:', error);
    }
  };

  fetchPage();
}, [currentPage]);

return (
  <div>
    {/* Items */}
    <div className="grid gap-4">
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1
              ? 'bg-[#FF6B47] text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  </div>
);
```

### Search/Filter Pattern

```jsx
const [searchTerm, setSearchTerm] = useState('');
const [filteredItems, setFilteredItems] = useState([]);

useEffect(() => {
  const fetchFiltered = async () => {
    if (!searchTerm.trim()) {
      // Fetch all if search is empty
      const response = await apiService.get('/items');
      setFilteredItems(response.data);
      return;
    }

    try {
      const response = await apiService.get(
        `/items?search=${encodeURIComponent(searchTerm)}`
      );
      setFilteredItems(response.data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  // Debounce search to avoid too many API calls
  const timer = setTimeout(fetchFiltered, 500);
  return () => clearTimeout(timer);
}, [searchTerm]);
```

---

## Error Handling

### Custom Error Handler Hook

```jsx
/**
 * useAPI Hook for cleaner API integration
 * Handles loading, error, and success states automatically
 */
import { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const useAPI = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiService.get(endpoint, options);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, options]);

  return { data, loading, error };
};

// Usage:
const MyComponent = () => {
  const { data: projects, loading, error } = useAPI('/projects');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {projects.map(project => (
        <div key={project._id}>{project.title}</div>
      ))}
    </div>
  );
};

export default useAPI;
```

### Error Type Handling

```jsx
const handleError = (error) => {
  if (error.status === 404) {
    return 'Resource not found';
  } else if (error.status === 400) {
    return `Invalid input: ${error.data.message}`;
  } else if (error.status === 429) {
    return 'Too many requests. Please try again later.';
  } else if (error.status === 500) {
    return 'Server error. Please try again later.';
  } else {
    return 'An unexpected error occurred';
  }
};

// Usage in catch block:
catch (error) {
  const errorMessage = handleError(error);
  setError(errorMessage);
}
```

---

## Summary

With these patterns, you can:
- ✅ Fetch data from backend APIs
- ✅ Handle loading and error states
- ✅ Display dynamic content
- ✅ Implement filtering and search
- ✅ Handle pagination
- ✅ Manage errors gracefully

All components will integrate seamlessly with your Express backend and MongoDB database.

---

**Last Updated:** 2024
**Status:** ✅ Ready for Implementation

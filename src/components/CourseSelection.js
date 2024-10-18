// src/components/CoursesList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name} - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;

// src/components/AddCourseForm.js
import React, { useState } from 'react';
import api from '../api';

const AddCourseForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/courses', { name, description });
      console.log('Course added:', response.data);
      // Optionally, reset the form or show a success message
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourseForm;

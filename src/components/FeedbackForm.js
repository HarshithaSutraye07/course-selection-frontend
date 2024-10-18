// src/components/FeedbackForm.js
import React, { useState } from 'react';
import api from '../api';

const FeedbackForm = ({ studentId, teacherId, courseId }) => {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/feedback', {
        student_id: studentId,
        teacher_id: teacherId,
        course_id: courseId,
        rating,
        comments,
      });
      alert('Feedback submitted successfully!');
      setRating('');
      setComments('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        placeholder="Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;

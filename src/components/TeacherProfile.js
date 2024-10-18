import React from 'react';
import { useParams } from 'react-router-dom';

const teacherData = {
  1: {
    name: 'Dr. Smith',
    ratings: 4.5,
    research: 'Machine Learning, AI',
    background: 'Ph.D. in Computer Science from MIT',
  },
};

const TeacherProfile = () => {
  const { id } = useParams();
  const teacher = teacherData[id];

  return (
    <div className="teacher-profile">
      <h2>{teacher.name}</h2>
      <p><strong>Ratings:</strong> {teacher.ratings}</p>
      <p><strong>Research Interests:</strong> {teacher.research}</p>
      <p><strong>Background:</strong> {teacher.background}</p>
    </div>
  );
};

export default TeacherProfile;

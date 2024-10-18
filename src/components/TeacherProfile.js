// src/components/TeacherProfile.js
import React, { useEffect, useState } from 'react';
import api from '../api';
import { useParams } from 'react-router-dom';

const TeacherProfile = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await api.get(`/teachers/${id}`);
        setTeacher(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching teacher:', error);
        setLoading(false);
      }
    };

    fetchTeacher();
  }, [id]);

  if (loading) return <p>Loading teacher profile...</p>;
  if (!teacher) return <p>Teacher not found.</p>;

  return (
    <div>
      <h2>{teacher.name}</h2>
      <p>{teacher.profile}</p>
      {/* Additional details like ratings, research projects, etc. */}
    </div>
  );
};

export default TeacherProfile;

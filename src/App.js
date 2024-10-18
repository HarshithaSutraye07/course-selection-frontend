import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CourseSelection from './components/CourseSelection';
import TeacherProfile from './components/TeacherProfile';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import './styles.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<CourseSelection />} />
          <Route path="/teachers/:id" element={<TeacherProfile />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
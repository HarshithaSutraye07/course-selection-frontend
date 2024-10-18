import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Course Selection System</h1>
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/courses">Select Courses</Link>
      <Link to="/feedback">Feedback</Link>
    </nav>
  </header>
);

export default Header;
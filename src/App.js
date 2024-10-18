// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoursesList from './components/CoursesList';
import AddCourseForm from './components/AddCourseForm';
import TeacherProfile from './components/TeacherProfile';
import FeedbackForm from './components/FeedbackForm';

const App = () => (
  <Router>
    <div>
      <h1>Course Selection System</h1>
      <Switch>
        <Route path="/courses" component={CoursesList} />
        <Route path="/add-course" component={AddCourseForm} />
        <Route path="/teacher/:id" component={TeacherProfile} />
        <Route path="/feedback" component={FeedbackForm} />
        {/* Add other routes as needed */}
      </Switch>
    </div>
  </Router>
);

export default App;

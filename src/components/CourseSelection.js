import React, { useState } from 'react';

const availableCourses = [
  { id: 1, name: 'Theory Course 1' },
  { id: 2, name: 'Theory Course 2' },
  { id: 3, name: 'Lab Course 1' },
  { id: 4, name: 'Lab Course 2' },
];

const CourseSelection = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelect = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  return (
    <div className="course-selection">
      <h2>Select Your Courses</h2>
      <ul>
        {availableCourses.map((course) => (
          <li key={course.id}>
            <input
              type="checkbox"
              checked={selectedCourses.includes(course)}
              onChange={() => handleSelect(course)}
            />
            {course.name}
          </li>
        ))}
      </ul>
      <button disabled={selectedCourses.length !== 6}>
        Submit Selection
      </button>
    </div>
  );
};

export default CourseSelection;
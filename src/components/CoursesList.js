import React, { useState, useEffect } from "react";
import CourseListItem from "./CourseListItem";

const CoursesList = () => {
  const [courses, setCourses] = useState(null);

  const fetchCourses = () => {
    fetch("http://localhost:4000/v1/courses")
      .then((response) => response.json())
      .then((result) => setCourses(result));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <h2>Courses List</h2>
      {courses &&
        courses.map((course) => (
          <CourseListItem key={course.id} course={course} />
        ))}
    </>
  );
};

export default CoursesList;

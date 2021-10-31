import React, { useState } from "react";

const CourseListItem = ({ course }) => {
  const [studentsList, setStudentsList] = useState(null);

  const GQL_API = `https://gruesome-vault-83096.herokuapp.com/`;
  const GQL_QUERY = `
    query($id: ID!){
      course(id: $id){
        students{
          id
          name
        }
      }
    }`;

  const handleLoadStudents = () => {
    const variables = { id: course.id };
    fetch(GQL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GQL_QUERY,
        variables,
      }),
    })
      .then((response) => response.json())
      .then((result) => setStudentsList(result.data.course.students));
  };

  return (
    <div>
      <a href="#" onClick={handleLoadStudents}>
        {course.name}
      </a>
      {studentsList &&
        studentsList.map((student) => {
          return <div key={student.id}>{student.name}</div>;
        })}
    </div>
  );
};

export default CourseListItem;

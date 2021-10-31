import React, { useState } from "react";

const AddStudent = (props) => {
  const [studentName, setStudentName] = useState("");

  const handleChangeName = (event) => {
    setStudentName(event.target.value);
  };

  const handleAddStudent = () => {
    props.onAddStudent(studentName);
  };

  return (
    <div>
      <input type="text" value={studentName} onChange={handleChangeName} />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default AddStudent;

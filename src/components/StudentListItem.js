import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentDetails from "./StudentDetails";

function StudentListItem({ id, name, onDeleteStudent }) {
  const [details, setDetails] = useState(null);

  function handleLoadDetails() {
    fetch(`https://evil-beast-90114.herokuapp.com/v1/student/${id}`)
      .then((response) => response.json())
      .then((response) => setDetails(response));
  }

  function handleDeleteStudent() {
    onDeleteStudent(id);
  }

  return (
    <div>
      <a href="#" onClick={handleLoadDetails}>
        {name}
      </a>
      <button onClick={handleDeleteStudent}>X</button>
      {details && <StudentDetails {...details} />}
    </div>
  );
}

StudentListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default StudentListItem;

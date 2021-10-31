import React from "react";

const StudentDetails = ({ dob, program, email }) => {


  return (
    <>
      <h5>Date of Birth: {dob}</h5>
      <h5>Program: {program}</h5>
      <h5>Email Address: {email}</h5>
    </>
  );
};

export default StudentDetails;

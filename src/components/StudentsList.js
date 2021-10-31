import React, { Component } from "react";
import StudentListItem from "./StudentListItem";
import AddStudent from "./AddStudent";

export default class StudentsList extends Component {
  constructor(props) {
    super(props);

    this.state = { students: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4000/v1/students")
      .then((response) => response.json())
      .then((result) => this.setState({ students: result }));
  }

  handleDeleteStudent(id) {
    const newStudentsList = this.state.students.filter(
      (student) => student.id !== id
    );

    this.setState({ students: newStudentsList });
  }

  renderStudents() {
    return this.state.students.map((student) => (
      <StudentListItem
        key={student.id}
        id={student.id}
        name={student.name}
        onDeleteStudent={(id) => this.handleDeleteStudent(id)}
      ></StudentListItem>
    ));
  }

  handleAddStudent(name) {
    const newStudent = { id: Date.now().toString(), name: name };
    const newStudentsList = [...this.state.students, newStudent];

    this.setState({ students: newStudentsList });
  }

  render() {
    return (
      <>
        <h2>Students List</h2>
        <AddStudent onAddStudent={(name) => this.handleAddStudent(name)} />
        {this.renderStudents()}
      </>
    );
  }
}

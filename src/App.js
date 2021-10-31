import logo from "./logo.svg";
import "./App.css";
import StudentsList from "./components/StudentsList";
import CoursesList from "./components/CoursesList";

function App(props) {
  return (
    <>
      <h1>Access to {props.name}</h1>
      <StudentsList />
      <CoursesList />
    </>
  );
}

export default App;

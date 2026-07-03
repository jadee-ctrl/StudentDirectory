import { useState, useEffect } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import DisplayStudents from "./components/DisplayStudents";
import StudentCounter from "./components/StudentCounter";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <h1 className="head">Student Directory</h1>

      <RegistrationForm addStudent={addStudent} />

      <StudentCounter count={students.length} />

      <DisplayStudents students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
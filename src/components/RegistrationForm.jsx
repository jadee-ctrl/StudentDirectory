import { useState } from "react";
import AddStudent from "./AddStudent";

function RegistrationForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course) {
      alert("Please fill out all fields.");
      return;
    }

    const student = {
      id: Date.now(),
      name,
      course,
    };

    addStudent(student);

    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
        <h2>Registration Form</h2>
        <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
        />
        <AddStudent />
    </form>
  );
}

export default RegistrationForm;
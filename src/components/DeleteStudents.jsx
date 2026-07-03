function DeleteStudents({ id, deleteStudent }) {
  return (

    <button className="delete-btn" onClick={() => deleteStudent(id)}>
      Delete
    </button>
  );
}

export default DeleteStudents;
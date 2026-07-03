import DeleteStudents from "./DeleteStudents";

function DisplayStudent({ students, deleteStudent }) {
  return (
    <div className="text">
      {students.length > 0 && (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <DeleteStudents
                    id={student.id}
                    deleteStudent={deleteStudent}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayStudent;
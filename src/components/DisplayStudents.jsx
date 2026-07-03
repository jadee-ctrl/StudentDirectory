import DeleteStudents from "./DeleteStudents";

function DisplayStudent({ students, deleteStudent }) {
  return (
    <div>
      <h2 className="head">Registered Students</h2>

      {students.length === 0 ? (
        <p className="head">No students registered.</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>

            <DeleteStudents
              id={student.id}
              deleteStudent={deleteStudent}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default DisplayStudent;
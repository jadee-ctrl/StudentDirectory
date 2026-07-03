function StudentCounter({ count }) {
  if (count === 0) return null;

  return (
    <div>
      <h2 style={{ color: '#000000' }}>Total Registered Students: {count}</h2>
    </div>
  );
}



export default StudentCounter;
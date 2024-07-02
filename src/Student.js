import React, {Component} from 'react';
class Student extends Component {
	render() {
		const students = [
		  { id: 1, name: 'John Doe', age: 20, grade: 'A' },
		  { id: 2, name: 'Jane Smith', age: 21, grade: 'B' },
		  { id: 3, name: 'Alice Johnson', age: 19, grade: 'C' },
		  { id: 4, name: 'Bob Brown', age: 22, grade: 'B' },
		];

		return (
			<div>
      <h2>Student List</h2>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
		)
	};
}
export default Student;
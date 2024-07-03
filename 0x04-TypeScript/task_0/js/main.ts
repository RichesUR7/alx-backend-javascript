// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Mohannad',
  lastName: 'Babeker',
  age: 35,
  location: 'UAE',
};

const student2: Student = {
  firstName: 'Abdallah',
  lastName: 'Alkaser',
  age: 25,
  location: 'KSA',
};

// Array named studentList for the two students
const studentList: Student[] = [student1, student2];

// Render table, for each element in the array create a raw
const table = document.createElement('table');
studentList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});
document.body.appendChild(table);

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Aiman',
  lastName: 'Mengesha',
  age: 24,
  location: 'Addis Ababa',
};

const student2: Student = {
  firstName: 'Kidus',
  lastName: 'Micheal',
  age: 24,
  location: 'Dire Dawa',
};

const studentList = Array<Student>();
studentList.push(student1, student2);

studentList.forEach((student) =>
  console.log(`${student.firstName} - ${student.location}`)
);
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
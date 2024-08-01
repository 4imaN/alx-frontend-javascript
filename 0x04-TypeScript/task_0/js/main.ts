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

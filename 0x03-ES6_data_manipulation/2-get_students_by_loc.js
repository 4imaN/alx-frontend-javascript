export default function getStudentsByLoc(loc) {
  return getListStudents().filter(student => student.loc === loc)
}
import getListStudents from "./0-get_list_students.js"

export default function getListStudentIds (students_list) {
  if (students_list instanceof Array) {
    return students_list.map((student) => student.id);
  }
  return [];
}

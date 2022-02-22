import { Student } from "./Student";
import { StudentList } from "./StudentList";
//update course, college and address
const student1 = new Student(
    "2015-105867",
    "BSIT",
    "CCS",
    "John Carlo",
    20,
    "MALE",
    "TERESA RIZAL"
);

const student2 = new Student(
    "2015-105868",
    "BSIT",
    "CCS",
    "Jhon Rhay",
    20,
    "MALE",
    "ANTIPOLO RIZAL"
);

const student3 = new Student(
    "2015-105869",
    "BSIT",
    "CCS",
    "Jhon Rhay",
    20,
    "MALE",
    "BINANGONAN RIZAL"
);

const studentList = new StudentList([
    student1,
    student2,
    student3
]);

console.log(studentList.getStudents());
// console.log("*************");
// console.log(studentList.updateStudentName("2015-105869", "Michael Jordan"));
// console.log("*************");
console.log(studentList.updateAge("2015-105869", 25));
// console.log(studentList.checkStudentId("2015-105870"));
console.log(studentList.getStudents());

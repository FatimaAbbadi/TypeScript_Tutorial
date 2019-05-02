/*
 Student 1 -> 1 Libretto
 Student N -> N Course
 Student N -> 1 School
 Course N -> 1 School
 Teacher N -> 1 School
 Teacher 1 -> N Course
 Maronato N -> 1 School

 assignGrade (teacher)
 registerToCourse (student)
 leaveACrouse (student)
 printGradeList (student)
 changeTitleOfACourse (teacher)
 ...

  ask Nikos for feedback

*/
//type Course
/* let courseList : string[]= ["Maths I","Maths II","Web Development", "Database Administration", "Digital Management","Computer Networking"]
console.log(coursesName)
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function assign_Grade(student, courseName, grade) {
    //gradeList: student.gradeList.concat(`COURSE NAME : ${courseName} - GRADE: ${grade}`),
    // console.log(`Student ID: ${student.student_id} \n COURSE NAME : ${courseName} - GRADE: ${grade}`)
    return __assign({}, student, { gradeList: student.gradeList.concat(["COURSE NAME : " + courseName + " - GRADE: " + grade]) });
}
function add_Course(courseName, school) {
    //courseList : this.courseList.concat(courseName),
    //console.log(`Course ${courseName} added to student ${this.student_id} - ${this.name} ${this.surname}`)
    //if course is in school then ok
    return __assign({}, this, { courseList: this.courseList.concat([courseName]) });
}
function print_CourseList() {
    console.log("_________CA' FOSCARI UNIVERSITY____________");
    this.courseList.forEach(function (value) {
        console.log(value + " \n");
    });
}
function print_MarksList() {
    console.log("_________CA' FOSCARI UNIVERSITY____________");
    this.courseList.forEach(function (value) {
        console.log(value + " \n");
    });
}
var student1 = {
    kind: "student",
    student_id: 12345,
    bsn: "ASD123",
    name: "Fatima",
    surname: "Abbadi",
    age: 19,
    courseList: [],
    gradeList: [],
    registerToCourse: add_Course,
    printCourseList: print_CourseList
};
var teacher1 = {
    kind: "teacher",
    bsn: "WER234",
    name: "Paolo",
    surname: "Cortesi",
    age: 45,
    assignGrade: assign_Grade
};
console.log(student1.name);
student1 = student1.registerToCourse("Maths I");
student1 = student1.registerToCourse("Maths II");
student1.printCourseList();
student1 = teacher1.assignGrade(student1, "Math I", 10);
console.log(JSON.stringify(student1));

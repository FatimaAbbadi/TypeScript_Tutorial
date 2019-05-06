"use strict";
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
exports.__esModule = true;
var courseList = ["Maths I", "Maths II", "Web Development", "Database Administration", "Digital Management", "Computer Networking"];
function change_TitleOfACourse(courseNameOld, courseNameNew) {
    if (courseList.indexOf(courseNameOld) > -1) {
        var indexCourse_1 = courseList.indexOf(courseNameOld);
        courseList = courseList.map(function (e, index) { return (indexCourse_1 == index) ? e = courseNameNew : e; });
        console.log("Course list updated: \n" + JSON.stringify(courseList));
    }
    else
        console.log("Course name not found!");
}
function assign_Grade(student, courseName, grade) {
    if (student.courseList.indexOf(courseName) > -1) {
        return {
            fst: true,
            snd: __assign({}, student, { gradeList: student.gradeList.concat(["COURSE NAME : " + courseName + " - GRADE: " + grade]) })
        };
    }
    else
        return {
            fst: false,
            snd: student
        };
}
function register_ToCourse(courseName, school) {
    if (courseList.indexOf(courseName) > -1) {
        return {
            fst: true,
            snd: __assign({}, this, { courseList: this.courseList.concat([courseName]) })
        };
    }
    else
        return {
            fst: false,
            snd: this
        };
}
function remove_FromCourse(courseName, school) {
    if (courseList.indexOf(courseName) > -1) {
        var index_1 = courseList.indexOf(courseName);
        console.log(courseName + " " + index_1 + " ------- " + this.courseList);
        return {
            fst: true,
            snd: __assign({}, this, { courseList: this.courseList.filter(function (elemento, indice) {
                    if (indice == index_1)
                        return false;
                    else
                        return true;
                }) })
        };
    }
    else
        return {
            fst: false,
            snd: this
        };
}
function print_CourseList() {
    console.log("_________CA' FOSCARI UNIVERSITY____________\n\nSTUDENT : " + this.name + " " + this.surname + "\n__________________COURSE LIST______________");
    this.courseList.forEach(function (value) {
        console.log(value + " \n");
    });
}
function print_GradeList(student) {
    console.log("__________________GRADE LIST______________");
    student.gradeList.forEach(function (value) {
        console.log(value + " \n");
    });
}
var checkResultTeacher;
var checkResultStudent;
var school1 = {
    school_name: "Ca' Foscari School",
    address: "Via Piave 27 - Venizia",
    phone: 12345,
    courses: [],
    students: [],
    teachers: []
};
var student1 = {
    kind: "student",
    student_id: 12345,
    bsn: "ASD123",
    name: "Fatima",
    surname: "Abbadi",
    age: 19,
    courseList: [],
    gradeList: [],
    printCourseList: print_CourseList,
    registerToCourse: register_ToCourse,
    removeCourse: remove_FromCourse
};
var teacher1 = {
    kind: "teacher",
    bsn: "WER234",
    name: "Paolo",
    surname: "Cortesi",
    age: 45,
    assignGrade: assign_Grade,
    printGradeList: print_GradeList,
    changeTitleOfACourse: change_TitleOfACourse
};
//
checkResultStudent = student1.registerToCourse("Maths I", school1);
console.log("Name:" + student1.name + " ID:" + student1.student_id + " " + (checkResultStudent.fst ? "Registered to corse Maths I" : "Course NOT available in ${school1.school_name}") + "\n");
student1 = checkResultStudent.snd;
checkResultStudent = student1.registerToCourse("Web Development", school1);
console.log("Name:" + student1.name + " ID:" + student1.student_id + " " + (checkResultStudent.fst ? "Registered to corse Web Development" : "Course NOT available in ${school1.school_name}") + "\n");
student1 = checkResultStudent.snd;
checkResultStudent = student1.registerToCourse("Maths II", school1);
console.log("Name:" + student1.name + " ID:" + student1.student_id + " " + (checkResultStudent.fst ? "Registered to corse Maths II" : "Course NOT available in ${school1.school_name}") + "\n");
student1 = checkResultStudent.snd;
checkResultStudent = student1.registerToCourse("Maths III", school1);
console.log("Name:" + student1.name + " ID:" + student1.student_id + " " + (checkResultStudent.fst ? "Registered to corse Maths III" : "Course NOT available in our school") + "\n");
student1 = checkResultStudent.snd;
checkResultStudent = student1.removeCourse("Maths I", school1);
console.log("Name:" + student1.name + " ID:" + student1.student_id + " " + (checkResultStudent.fst ? "Corse Maths I REMOVED" : "Course NOT available in ${school1.school_name}") + "\n");
student1 = checkResultStudent.snd;
student1.printCourseList();
checkResultTeacher = teacher1.assignGrade(student1, "Maths I", 50);
console.log(" " + (checkResultTeacher.fst ? "EXAM REGISTERED" : "EXAM NOT REGISTERED") + "\n");
student1 = checkResultTeacher.snd;
teacher1.printGradeList(student1);
teacher1.changeTitleOfACourse("Database Administration", "Database - Administration");
//console.log(JSON.stringify(student1)) 
/* let elems = [1, 2, 3, 4, 5]
console.log(JSON.stringify(elems))

elems = elems.map((e, indice )=> e + 2)
console.log(JSON.stringify(elems)) */
/* let elems1 = ["Fatima","Sara","Miriam"]
console.log(JSON.stringify(elems1))

let indice = elems1.indexOf("Fatima")

let changeName = "Nora"

elems1 = elems1.map((e,index)=> (indice == index)? e=changeName:e)
console.log(JSON.stringify(elems1))
 */ 

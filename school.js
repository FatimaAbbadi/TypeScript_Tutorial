/*
 Student 1 -> 1 Libretto
 Student N -> N Course
 Student N -> 1 School
 Course N -> 1 School
 Teacher N -> 1 School
 Teacher 1 -> N Course
 Maronato N -> 1 School

 assignGrade (teacher) X
 registerToCourse (student)X
 leaveACrouse (student) X
 printGradeList (student)X
 changeTitleOfACourse (teacher)
 ...

  ask Nikos for feedback

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
var courseList = ["Maths I", "Maths II", "Web Development", "Database Administration", "Digital Management", "Computer Networking"];
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
            snd: __assign({}, student)
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
            snd: __assign({}, this)
        };
}
function remove_FromCourse(courseName, school) {
    if (courseList.indexOf(courseName) > -1) {
        var index = courseList.indexOf(courseName);
        console.log(courseName + " " + index + " ------- " + this.courseList);
        return {
            fst: true,
            snd: __assign({}, this, { courseList: this.courseList.splice(index, 1) })
        };
    }
    else
        return {
            fst: false,
            snd: __assign({}, this)
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
    printGradeList: print_GradeList
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
//console.log(JSON.stringify(student1)) 

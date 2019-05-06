import { Pair } from "./calcolatrice";

                        
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

type School = {
    school_name: string
    address: string 
    phone: number

    students:Student[]
    teachers:Teacher[]
    courses:Course[]
}

type Person = {
    bsn:string
    name: string
    surname: string 
    age:number
}

type Student = Person & 
                {kind:"student",student_id:number, courseList:string[], gradeList:string[]} &
                StudentsOperations

type Teacher = Person & {kind:"teacher"} & TeachersOperations

type Course = {courseList:string[]}





let courseList = ["Maths I","Maths II","Web Development", "Database Administration", "Digital Management","Computer Networking"]

type StudentsOperations = {
    //courseListHistory:{courseName:string}[]
    printCourseList:(this:Student) => void
    registerToCourse:(this:Student, courseName:string, school:School) => Pair<boolean, Student>
    removeCourse:(this:Student, courseName:string, school:School) => Pair<boolean, Student>
}


type TeachersOperations = {
    changeTitleOfACourse:(this:Teacher,courseNameOld:string,courseNameNew:string) => void 
    printGradeList:(student:Student) => void
    assignGrade:(this:Teacher,student:Student ,courseName:string,grade:number) => Pair<boolean, Student>
}


function change_TitleOfACourse(this:Teacher,courseNameOld:string,courseNameNew:string) : void {

    if (courseList.indexOf(courseNameOld) > -1){
        const indexCourse = courseList.indexOf(courseNameOld)
        courseList = courseList.map((e,index)=> (indexCourse == index)? e = courseNameNew:e)
        console.log(`Course list updated: \n` + JSON.stringify(courseList))

    }
    else console.log("Course name not found!")
}
function assign_Grade(this:Teacher,student:Student,courseName:string,grade:number) : Pair<boolean, Student> {
    if (student.courseList.indexOf(courseName) > -1){
        return {
            fst:true,
            snd: {...student,
                gradeList : student.gradeList.concat([`COURSE NAME : ${courseName} - GRADE: ${grade}`]),}}
    }
    else
        return {
            fst:false,
            snd: student
        }
}

function register_ToCourse(this:Student, courseName:string, school:School) : Pair<boolean, Student> {
    if (courseList.indexOf(courseName) > -1){
        return {
            fst:true,
            snd: {...this,
                courseList : this.courseList.concat([courseName]),}}
    }
    else
        return {
            fst:false,
            snd: this
        }
}

function remove_FromCourse(this:Student, courseName:string, school:School) : Pair<boolean, Student> {
    if (courseList.indexOf(courseName) > -1){
        const index = courseList.indexOf(courseName)
        console.log(courseName +  " " + index + " ------- " + this.courseList)
        return {
            fst:true,
            snd: {...this,
                courseList : this.courseList.filter((elemento, indice) => {
                    if(indice == index) return false
                    else return true
                }) }}
    }
    else
        return {
            fst:false,
            snd: this
        }
}

function print_CourseList(this:Student):void{
    console.log(`_________CA' FOSCARI UNIVERSITY____________\n\nSTUDENT : ${this.name} ${this.surname}\n__________________COURSE LIST______________`)
  
    this.courseList.forEach(function(value) {
        console.log(`${value} \n`)
    });
  }

  function print_GradeList(student:Student):void{
    console.log(`__________________GRADE LIST______________`)
  
    student.gradeList.forEach(function(value) {
        console.log(`${value} \n`)
    });
  }


let checkResultTeacher  : Pair<boolean, Student>
let checkResultStudent  : Pair<boolean, Student>


let school1 : School = {
    school_name: "Ca' Foscari School",
    address: "Via Piave 27 - Venizia",
    phone: 12345,
    courses: [],
    students:[],
    teachers:[]
}

let student1 : Student = {
    kind:"student", 
    student_id:12345,
    bsn:"ASD123",
    name:"Fatima",
    surname:"Abbadi",
    age:19,
    courseList:[],
    gradeList:[],
    printCourseList: print_CourseList,
    registerToCourse:register_ToCourse,
    removeCourse:remove_FromCourse
  }

  

let teacher1 : Teacher = {
    kind:"teacher",
    bsn:"WER234",
    name:"Paolo",
    surname:"Cortesi",
    age:45,
    assignGrade: assign_Grade,
    printGradeList:print_GradeList,
    changeTitleOfACourse:change_TitleOfACourse
}


//

checkResultStudent = student1.registerToCourse("Maths I",school1)
console.log(`Name:${student1.name} ID:${student1.student_id} ${checkResultStudent.fst ? "Registered to corse Maths I" : "Course NOT available in ${school1.school_name}" }\n`)
student1 = checkResultStudent.snd



checkResultStudent= student1.registerToCourse("Web Development",school1)
console.log(`Name:${student1.name} ID:${student1.student_id} ${checkResultStudent.fst ? "Registered to corse Web Development" : "Course NOT available in ${school1.school_name}" }\n`)
student1 = checkResultStudent.snd


checkResultStudent= student1.registerToCourse("Maths II",school1)
console.log(`Name:${student1.name} ID:${student1.student_id} ${checkResultStudent.fst ? "Registered to corse Maths II" : "Course NOT available in ${school1.school_name}" }\n`)
student1 = checkResultStudent.snd

checkResultStudent= student1.registerToCourse("Maths III",school1)
console.log(`Name:${student1.name} ID:${student1.student_id} ${checkResultStudent.fst ? "Registered to corse Maths III" : "Course NOT available in our school" }\n`)
student1 = checkResultStudent.snd

checkResultStudent= student1.removeCourse("Maths I",school1)
console.log(`Name:${student1.name} ID:${student1.student_id} ${checkResultStudent.fst ? "Corse Maths I REMOVED" : "Course NOT available in ${school1.school_name}" }\n`)
student1 = checkResultStudent.snd

student1.printCourseList()

checkResultTeacher = teacher1.assignGrade(student1, "Maths I", 50)

console.log(` ${checkResultTeacher.fst ? "EXAM REGISTERED" : "EXAM NOT REGISTERED" }\n`)

student1 = checkResultTeacher.snd 


teacher1.printGradeList(student1) 

teacher1.changeTitleOfACourse("Database Administration","Database - Administration")


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
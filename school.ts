                        
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

type Pair1<t1, t2> = {
    fst:t1
    snd:t2
  }

type Pair2<t1, t2> = {
    fst:t1
    snd:t2
}

let courseList = ["Maths I","Maths II","Web Development", "Database Administration", "Digital Management","Computer Networking"]

type StudentsOperations = {
    //courseListHistory:{courseName:string}[]
    printCourseList:(this:Student) => void
    registerToCourse:(this:Student, courseName:string, school:School) => Pair2<boolean, Student>
    removeCourse:(this:Student, courseName:string, school:School) => Pair2<boolean, Student>
}


type TeachersOperations = {
    /* changeDescriptionOfACourse:(profile:TeacherOperations,courses:string[]) => [], */
    printGradeList:(student:Student) => void
    assignGrade:(this:Teacher,student:Student ,courseName:string,grade:number) => Pair1<boolean, Student>
}

function assign_Grade(this:Teacher,student:Student,courseName:string,grade:number) : Pair1<boolean, Student> {
    if (student.courseList.indexOf(courseName) > -1){
        return {
            fst:true,
            snd: {...student,
                gradeList : student.gradeList.concat([`COURSE NAME : ${courseName} - GRADE: ${grade}`]),}}
    }
    else
        return {
            fst:false,
            snd: {...student,}}
}

function register_ToCourse(this:Student, courseName:string, school:School) : Pair2<boolean, Student> {
    if (courseList.indexOf(courseName) > -1){
        return {
            fst:true,
            snd: {...this,
                courseList : this.courseList.concat([courseName]),}}
    }
    else
        return {
            fst:false,
            snd: {...this,}}
}

function remove_FromCourse(this:Student, courseName:string, school:School) : Pair2<boolean, Student> {
    if (courseList.indexOf(courseName) > -1){
        const index = courseList.indexOf(courseName)
        console.log(courseName +  " " + index + " ------- " + this.courseList)
        return {
            fst:true,
            snd: {...this,
                courseList : this.courseList.splice(index ,1),}}
    }
    else
        return {
            fst:false,
            snd: {...this,}}
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


let checkResultTeacher  : Pair1<boolean, Student>
let checkResultStudent  : Pair2<boolean, Student>


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
    printGradeList:print_GradeList
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




//console.log(JSON.stringify(student1)) 



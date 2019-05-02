                        
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

type School = {
    school_name: string
    address: string 
    phone: number

    students:Student[]
    teachers:Teacher[]
    //courses:Course[]
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


type StudentsOperations = {
    //courseListHistory:{courseName:string}[]
    printCourseList:(this:Student) => void
    registerToCourse:(this:Student, courseName:string) => Student
  //  removeCourse:(this:StudentsOperations, courseName:string) => string
}


type TeachersOperations = {
    /* changeDescriptionOfACourse:(profile:TeacherOperations,courses:string[]) => [], */
    assignGrade:(this:Teacher,student:Student ,courseName:string,grade:number) => Student
}


function assign_Grade(this:Teacher,student:Student,courseName:string,grade:number) : Student {
    //gradeList: student.gradeList.concat(`COURSE NAME : ${courseName} - GRADE: ${grade}`),
    // console.log(`Student ID: ${student.student_id} \n COURSE NAME : ${courseName} - GRADE: ${grade}`)

    return {
        ...student,
        gradeList: student.gradeList.concat([`COURSE NAME : ${courseName} - GRADE: ${grade}`]),
    }
}

function add_Course(this:Student, courseName:string, school:School) : Student {
    //courseList : this.courseList.concat(courseName),
    //console.log(`Course ${courseName} added to student ${this.student_id} - ${this.name} ${this.surname}`)
//if course is in school then ok
    return {
        ...this,
        courseList : this.courseList.concat([courseName]),
    }
}


function print_CourseList(this:Student):void{
    console.log("_________CA' FOSCARI UNIVERSITY____________")
    
    this.courseList.forEach(function(value) {
        console.log(`${value} \n`)
    });
  }

  function print_MarksList(this:Student):void{
    console.log("_________CA' FOSCARI UNIVERSITY____________")
    
    this.courseList.forEach(function(value) {
        console.log(`${value} \n`)
    });
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
    registerToCourse:add_Course,
    printCourseList: print_CourseList
  }


let teacher1 : Teacher = {
    kind:"teacher",
    bsn:"WER234",
    name:"Paolo",
    surname:"Cortesi",
    age:45,
    assignGrade: assign_Grade
}



console.log(student1.name)

student1= student1.registerToCourse("Maths I")
student1= student1.registerToCourse("Maths II")

student1.printCourseList()
student1 = teacher1.assignGrade(student1, "Math I", 10)

console.log(JSON.stringify(student1)) 



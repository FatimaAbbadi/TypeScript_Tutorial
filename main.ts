console.log("Hello World")

// stessi tipi primitivi
let a:number = 1
let b:string = "Fatima"
let c:boolean = true

// custom type
type Person = {
    name: string
    surname?: string //? OPTIONAL
    age?:number
}


type Animal = {
    animalSpecies:string
    numberOfLegs:number
    domestic:boolean
    origin:string
}

type Dog = Animal  & {kind:"dog",bark:boolean}
type Monkey = Animal & {kind:"monkey",jumps:boolean}

//extend our type at once
type Student = Person  & {kind:"student", student_id:number, average:number}   //{kind:"student"} is aclled value type
type Teacher = Person  & {kind:"teacher", teacher_id:number}

type AnimalInPlanet = Dog | Monkey

type PersonFromSchool = Student | Teacher

let pippo : Student = {kind:"student" , average:4,student_id:12345,name:"rossi",}

let pluto : Teacher = {kind:"teacher" ,teacher_id:76543,name:"luca",}

function printName(entity:PersonFromSchool) : void{                         // returns NULL
    if (entity.kind == "student")
    {
        console.log(`Hello student: ${entity.name}  Your average is  ${entity.average}` )
    }
    else
    {
        console.log(`Hello teacher: ${entity.name}  Your id is  ${entity.teacher_id}` )
    }

}

let fufy : Dog = {kind:"dog" ,bark:true, animalSpecies:"domestic", domestic:true,numberOfLegs:4,origin:"city" }
let bubble : Monkey = {kind:"monkey" ,jumps:true, animalSpecies:"Notdomestic", domestic:false,numberOfLegs:4,origin:"forest" }


function printAnimal(entity:AnimalInPlanet) : void{                         // returns NULL
    if (entity.kind == "dog" )
    {
        if (entity.bark==true )
        {
        console.log("He is an angry dog")
        }
        else{
            console.log(`The dog is: ${entity.animalSpecies}` )
        }
    }
    else
    {
        if (entity.jumps==true )
        {
        console.log("He is a wild monkey")
        }
        else{
            console.log(`The monkey is: ${entity.animalSpecies}` )
        }
        
    }

}

printAnimal(fufy)
console.log("---------------------")
printAnimal(bubble)

console.log("---------------------")
console.log("---------------------")
printName(pippo)
console.log("---------------------")
printName(pluto)



//Functions 


type NerdStudent ={ 
    energy:number
    eat:  (this:NerdStudent, chocoBars:number) => NerdStudent
    study:  (this:NerdStudent) => NerdStudent
    stats: (this:NerdStudent) => void
}

function eat_Nerd(this:NerdStudent, chocoBars:number) : NerdStudent{

    return {
        energy: this.energy + chocoBars,
        eat:this.eat, 
        study:this.study,
        stats:this.stats
    }
}

function study_Nerd(this:NerdStudent) : NerdStudent{

    return {
        ...this,      
        energy: this.energy - 100,
        // eat:this.eat, 
        // study:this.study,
        // stats:this.stats
    }
}

function stats_Nerd(this:NerdStudent) : void {

    console.log(`My energy ${this.energy}`)
}

let pippoNerd : NerdStudent = {
    energy:100,
    stats:stats_Nerd,
    eat: eat_Nerd,
    study:study_Nerd
}


pippoNerd.stats()
pippoNerd =  pippoNerd.study()
pippoNerd =  pippoNerd.study()
pippoNerd.stats()
pippoNerd =  pippoNerd.eat(10)
pippoNerd.stats()


//FUNZIONE LAMDA
type calcolatore ={
    add : (n1:number, n2:number) => number
    sub : (n1:number, n2:number) => number
    div : (n1:number, n2:number) => number
    mul : (n1:number, n2:number) => number
    neg : (n1:number) => number

}

function myAddi(n1:number,n2:number){
return n1+n2
}

let my_mul = (n1:number,n2:number):number => n1*n2

let my_calculator : calcolatore = {
    //LAMBDA FUNCTION GOES LIKE THIS
    add:myAddi,      //named function
    sub:function(n1,n2) {      //anonymus function
        return n1 -n2
    },
    div:(n1,n2) => n1 /n2,    //lambda inline
    mul: my_mul,    //named lambda
    neg:(n1) => {  //lambda multiline
        return n1*-1
    }
}


/* //array definition
let collection : number[]= [1,3,5,6]
console.log(collection)

collection = collection.concat(1010)
console.log(collection)
 */
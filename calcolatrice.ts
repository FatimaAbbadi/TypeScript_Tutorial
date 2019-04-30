


type CalcolatricWithMemory = {
    memorizzaOperazione : string
    memorizza_n1:number
    memorizza_n2:number
    historyOperazione : string[]
    printHistory:(this:CalcolatricWithMemory) => void
} 

type Calcolatrice =  CalcolatricWithMemory & {
    add:(this:Calcolatrice,n1:number, n2:number) => number
    div:(this:Calcolatrice,n1:number, n2:number) => number
    sub:(this:Calcolatrice,n1:number, n2:number) => number
    mul:(this:Calcolatrice,n1:number, n2:number) => number
    neg:(this:Calcolatrice,n1:number) => number

} 


function print_History(this:Calcolatrice):void{
    
    //console.log(` ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)
    console.log(" ")
    if(this.memorizzaOperazione == "*-1")
    {
        this.historyOperazione = this.historyOperazione.concat(this.memorizza_n1 + this.memorizzaOperazione + " ") 
        console.log("HISTORY --------> " +this.historyOperazione)
    }
    else
    {
        this.historyOperazione = this.historyOperazione.concat(this.memorizza_n1 + this.memorizzaOperazione + this.memorizza_n2 + " ") 
        console.log("HISTORY --------> " +this.historyOperazione)
    }
}



function myAdd(this:Calcolatrice, n1:number,n2:number):number{
    this.memorizza_n1 = n1
    this.memorizza_n2 = n2
    this.memorizzaOperazione = "+"

    console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)

    return n1+n2
}
function mySub(this:Calcolatrice,n1:number,n2:number):number{
    this.memorizza_n1 = n1
    this.memorizza_n2 = n2
    this.memorizzaOperazione = "-"

    console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)

    return n1-n2
}
function myDiv(this:Calcolatrice,n1:number,n2:number):number{
    this.memorizza_n1 = n1
    this.memorizza_n2 = n2
    this.memorizzaOperazione = "/"

    console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)

    return n1/n2
}
function myMul(this:Calcolatrice,n1:number,n2:number):number{
    this.memorizza_n1 = n1
    this.memorizza_n2 = n2
    this.memorizzaOperazione = "*"

    console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)

    return n1*n2
}
function myNeg(this:Calcolatrice,n1:number):number{
    this.memorizza_n1 = n1
    this.memorizzaOperazione = "*-1"

    console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione}`)


    return n1 * -1
}

let my_calc : Calcolatrice = {
    add:myAdd,     
    sub:mySub, 
    div:myDiv,    
    mul:myMul,    
    neg:myNeg,
    memorizzaOperazione: "",
    memorizza_n1: 0,
    memorizza_n2: 0,
    historyOperazione:[],
    printHistory:print_History
}

let resutl :number

console.log("--------------START")

console.log(" ")
resutl =  my_calc.add(1,1)
console.log("Result:" + resutl)
my_calc.printHistory()

resutl =  my_calc.sub(5,2)
console.log("Result:" + resutl)
my_calc.printHistory()

resutl =  my_calc.sub(7,2)
console.log("Result:" + resutl)
my_calc.printHistory()

resutl =  my_calc.mul(3,3)
console.log("Result:" + resutl)
my_calc.printHistory()

resutl =  my_calc.div(10,5)
console.log("Result:" + resutl)
my_calc.printHistory()

resutl =  my_calc.neg(7)
console.log("Result:" + resutl)
my_calc.printHistory()


console.log("--------------END")

console.log("--------------END")

type Operazioni_Calcolatrice = "+" | "-" | "*" | "/" | "*-1"

type Memory_Storage = {
    memorizzaOperazione : string
    memorizza_n1:number
    memorizza_n2:number
    historyOperazione : string[]
    printHistory:(this:Memory_Storage) => void
} 

type Calcolatrice2 =  Memory_Storage  & {
    doOperation:(this:Calcolatrice2,oper:Operazioni_Calcolatrice,n1:number, n2:number) => number
} 


function print_History2(this:Calcolatrice2):void{
    
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


function SelectOperationCalc(this:Calcolatrice2,operatore:Operazioni_Calcolatrice, n1:number,n2:number):number{
    this.memorizza_n1 = n1
    this.memorizza_n2 = n2

    this.memorizzaOperazione = operatore

    switch(operatore) { 
        case "+": { 
            console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)
            return n1+n2
        } 
        case "-": { 
            console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)
            return n1-n2 
        } 
        case "*": {
            console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)
            return n1*n2   
        } 
        case "/": { 
            console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)
            return n1/n2 
        }  
        case "*-1": { 
            console.log(`Operation: ${this.memorizza_n1} ${this.memorizzaOperazione}`)
            return n1 * -1
         }
        default: { 
            console.log("Error")
            return 0             
        } 
     }

    
}

let my_calc2 : Calcolatrice2 = {
    memorizzaOperazione: "",
    memorizza_n1: 0,
    memorizza_n2: 0,
    historyOperazione:[],
    printHistory:print_History2,
    doOperation:SelectOperationCalc
}

let resutl2 :number


resutl2 =  my_calc2.doOperation("+",5,3)
console.log("Result:" + resutl2)
my_calc2.printHistory()


resutl2 =  my_calc2.doOperation("-",10,6)
console.log("Result:" + resutl2)
my_calc2.printHistory()


resutl2 =  my_calc2.doOperation("*",7,4)
console.log("Result:" + resutl2)
my_calc2.printHistory()


resutl2 =  my_calc2.doOperation("/",15,3)
console.log("Result:" + resutl2)
my_calc2.printHistory()

resutl2 =  my_calc2.doOperation("*-1",21,7)
console.log("Result:" + resutl2)
my_calc2.printHistory()


/*type Add = calculator  & {kind:"+"}
type Sub =  calculator  & {kind:"-"}
type Div =  calculator  & {kind:"/"}
type Mul =  calculator  & {kind:"*"}
type Neg =  calculator  & {kind:"-"}

type TypeOperationCalculator = Add | Sub  | Div | Mul | Neg*/

let my_calcolatore : calcolatrice = {
    add:(n1,n2) => n1 + n2,     
    sub:(n1,n2) => n1 - n2, 
    div:(n1,n2) => n1 / n2,    
    mul:(n1,n2) => n1 * n2,    
    neg:(n1) => n1*-1
    }

   /* function printOperation(entity:TypeOperationCalculator) : void{                     
        if (entity.kind.includes("+") )
        {
     console.log("...")
        }
        else
        {

            
        }
    
    }*/
   


my_calcolatore.add(1,1);
console.log(my_calcolatore.add(1,1))

/*
let printHistory : number[]
console.log(printHistory)

printHistory = printHistory.concat(1010)
console.log(collection)*/


/*
type CalculatorWithMemory = {
    ... its a calculator
    history: ... []
    printHistory: ...
} 

let c = make CalculatorWithMemory
c.printHistory() => []
c = c.add(1, 5)
c.printHistory() => [1+5]
c = c.mul(6, 7)
c = c.mul(7, 5)
c = c.div(4, 1)
c.printHistory() => [1+5, 6*7, 7*5, 4/1]

hint: &, concat, this, function, log
*/


type MemoryStorage = {
  historyOperazione : {operazione:string, n1:number, n2?:number}[]
  printHistory:(this:MemoryStorage) => void
}

type Pair<t1, t2> = {
  fst:t1
  snd:t2
}

type Calcolatrice =  MemoryStorage  & {
  add:(this:Calcolatrice,n1:number, n2:number) => Pair<number, Calcolatrice>
  div:(this:Calcolatrice,n1:number, n2:number) => Pair<number, Calcolatrice>
  sub:(this:Calcolatrice,n1:number, n2:number) => Pair<number, Calcolatrice>
  mul:(this:Calcolatrice,n1:number, n2:number) => Pair<number, Calcolatrice>
  neg:(this:Calcolatrice,n1:number) => Pair<number, Calcolatrice>

} 


function print_History(this:Calcolatrice):void{
  console.log("_____________________")
  this.historyOperazione.forEach(op => {
      console.log(`${op.n1} ${op.operazione} ${op.n2 != undefined ? op.n2 : "" }\n`)
  });
}


function myAdd(this:Calcolatrice, n1:number,n2:number):Pair<number, Calcolatrice>{
  return {fst : n1+n2, 
          snd : {...this, 
                    historyOperazione : this.historyOperazione.concat([{
                                                                        n1 : n1,
                                                                        n2 : n2,
                                                                        operazione : "+"
                                                                        }])}}
}

function mySub(this:Calcolatrice,n1:number,n2:number):Pair<number, Calcolatrice>{
  return {fst : n1-n2, 
          snd : {...this, 
                    historyOperazione : this.historyOperazione.concat([{
                                                                        n1 : n1,
                                                                        n2 : n2,
                                                                        operazione : "-"
                                                                        }])}}
}
function myDiv(this:Calcolatrice,n1:number,n2:number):Pair<number, Calcolatrice>{
  return {fst : n1/n2, 
          snd : {...this, 
                    historyOperazione : this.historyOperazione.concat([{
                                                                        n1 : n1,
                                                                        n2 : n2,
                                                                        operazione : "/"
                                                                        }])}}
}
function myMul(this:Calcolatrice,n1:number,n2:number):Pair<number, Calcolatrice>{
  return {fst : n1*n2, 
          snd : {...this, 
                    historyOperazione : this.historyOperazione.concat([{
                                                                        n1 : n1,
                                                                        n2 : n2,
                                                                        operazione : "*"
                                                                        }])}}
}
function myNeg(this:Calcolatrice,n1:number):Pair<number, Calcolatrice>{
  return {fst : n1*-1, 
          snd : {...this, 
                    historyOperazione : this.historyOperazione.concat([{
                                                                        n1 : n1,
                                                                        operazione : "*-1"
                                                                        }])}}
}

let my_calc : Calcolatrice = {
  add:myAdd,     
  sub:mySub, 
  div:myDiv,    
  mul:myMul,    
  neg:myNeg,
  historyOperazione:[],
  printHistory:print_History,
}

let resutl : Pair<number, Calcolatrice>


console.log(" -ONE WAY ")

resutl =  my_calc.add(1,1)
my_calc = resutl.snd
console.log("Result:" + resutl.fst)

my_calc.printHistory()

resutl =  my_calc.sub(5,2)
console.log("Result:" + resutl.fst)
my_calc= resutl.snd

resutl =  my_calc.sub(7,2)
console.log("Result:" + resutl.fst)
my_calc= resutl.snd

resutl =  my_calc.mul(3,3)
console.log("Result:" + resutl.fst)
my_calc= resutl.snd

resutl =  my_calc.div(10,5)
console.log("Result:" + resutl.fst)
my_calc= resutl.snd

resutl =  my_calc.neg(7)
console.log("Result:" + resutl.fst)
my_calc= resutl.snd

my_calc.printHistory()

console.log(" -- ")

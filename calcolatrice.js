function print_History() {
    //console.log(` ${this.memorizza_n1} ${this.memorizzaOperazione} ${this.memorizza_n2}`)
    console.log(" ");
    if (this.memorizzaOperazione == "*-1") {
        this.historyOperazione = this.historyOperazione.concat(this.memorizza_n1 + this.memorizzaOperazione + " ");
        console.log("HISTORY --------> " + this.historyOperazione);
    }
    else {
        this.historyOperazione = this.historyOperazione.concat(this.memorizza_n1 + this.memorizzaOperazione + this.memorizza_n2 + " ");
        console.log("HISTORY --------> " + this.historyOperazione);
    }
}
function myAdd(n1, n2) {
    this.memorizza_n1 = n1;
    this.memorizza_n2 = n2;
    this.memorizzaOperazione = "+";
    console.log("Operation: " + this.memorizza_n1 + " " + this.memorizzaOperazione + " " + this.memorizza_n2);
    return n1 + n2;
}
function mySub(n1, n2) {
    this.memorizza_n1 = n1;
    this.memorizza_n2 = n2;
    this.memorizzaOperazione = "-";
    console.log("Operation: " + this.memorizza_n1 + " " + this.memorizzaOperazione + " " + this.memorizza_n2);
    return n1 - n2;
}
function myDiv(n1, n2) {
    this.memorizza_n1 = n1;
    this.memorizza_n2 = n2;
    this.memorizzaOperazione = "/";
    console.log("Operation: " + this.memorizza_n1 + " " + this.memorizzaOperazione + " " + this.memorizza_n2);
    return n1 / n2;
}
function myMul(n1, n2) {
    this.memorizza_n1 = n1;
    this.memorizza_n2 = n2;
    this.memorizzaOperazione = "*";
    console.log("Operation: " + this.memorizza_n1 + " " + this.memorizzaOperazione + " " + this.memorizza_n2);
    return n1 * n2;
}
function myNeg(n1) {
    this.memorizza_n1 = n1;
    this.memorizzaOperazione = "*-1";
    console.log("Operation: " + this.memorizza_n1 + " " + this.memorizzaOperazione);
    return n1 * -1;
}
var my_calc = {
    add: myAdd,
    sub: mySub,
    div: myDiv,
    mul: myMul,
    neg: myNeg,
    memorizzaOperazione: "",
    memorizza_n1: 0,
    memorizza_n2: 0,
    historyOperazione: [],
    printHistory: print_History
};
var resutl;
console.log(" -ONE WAY ");
resutl = my_calc.add(1, 1);
console.log("Result:" + resutl);
my_calc.printHistory();
resutl = my_calc.sub(5, 2);
console.log("Result:" + resutl);
my_calc.printHistory();
resutl = my_calc.sub(7, 2);
console.log("Result:" + resutl);
my_calc.printHistory();
resutl = my_calc.mul(3, 3);
console.log("Result:" + resutl);
my_calc.printHistory();
resutl = my_calc.div(10, 5);
console.log("Result:" + resutl);
my_calc.printHistory();
resutl = my_calc.neg(7);
console.log("Result:" + resutl);
my_calc.printHistory();
console.log(" -- ");

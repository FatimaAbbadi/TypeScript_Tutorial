"use strict";
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
exports.__esModule = true;
function print_History() {
    console.log("_____________________");
    this.historyOperazione.forEach(function (op) {
        console.log(op.n1 + " " + op.operazione + " " + (op.n2 != undefined ? op.n2 : "") + "\n");
    });
}
function myOperation(the_operation, symbol) {
    return function (n1, n2) {
        return { fst: the_operation(n1, n2),
            snd: __assign({}, this, { historyOperazione: this.historyOperazione.concat([{
                        n1: n1,
                        n2: n2,
                        operazione: symbol
                    }]) }) };
    };
}
var my_calc = {
    add: myOperation(function (x, y) { return x + y; }, "+"),
    sub: myOperation(function (x, y) { return x - y; }, "-"),
    div: myOperation(function (x, y) { return x / y; }, "/"),
    mul: myOperation(function (x, y) { return x * y; }, "*"),
    neg: myOperation(function (x) { return x * -1; }, "*-1"),
    historyOperazione: [],
    printHistory: print_History
};
var resutl;
console.log(" -ONE WAY ");
resutl = my_calc.add(1, 1);
my_calc = resutl.snd;
console.log("Result:" + resutl.fst);
my_calc.printHistory();
resutl = my_calc.sub(5, 2);
console.log("Result:" + resutl.fst);
my_calc = resutl.snd;
resutl = my_calc.sub(7, 2);
console.log("Result:" + resutl.fst);
my_calc = resutl.snd;
resutl = my_calc.mul(3, 3);
console.log("Result:" + resutl.fst);
my_calc = resutl.snd;
resutl = my_calc.div(10, 5);
console.log("Result:" + resutl.fst);
my_calc = resutl.snd;
resutl = my_calc.neg(7);
console.log("Result:" + resutl.fst);
my_calc = resutl.snd;
my_calc.printHistory();
console.log(" -- ");
var sum = function (x, y) { return x + y; };
var sum_c = function (x) { return function (y) { return x + y; }; };
var mul_c = function (x) { return function (y) { return x * y; }; };
var inc = sum_c(1);
var neg = mul_c(-1);
// let generic_operation = (the_operation: (n1:number, n2:number) => number,
//            n1:number, 
//            n2:number):number => 
//            the_operation(n1,n2)
// let sum1 = (x:number, y:number) => 
//             generic_operation((n1,n2) => n1 + n2, x, y)
// let mul1 = (x:number, y:number) => 
//             generic_operation((n1,n2) => n1 * n2, x, y)
var generic_operation = function (the_operation) {
    return function (n1, n2) {
        return the_operation(n1, n2);
    };
}; //  O)
//        (number, number) => number
var sum1 = generic_operation(function (n1, n2) { return n1 + n2; });
var mul1 = generic_operation(function (n1, n2) { return n1 * n2; });
/*
 Student 1 -> 1 Libretto
 Student N -> N Course
 Student N -> 1 School
 Course N -> 1 School
 Teacher N -> 1 School
 Teacher 1 -> N Course
 Maronato N -> 1 School

 assignGrade (teacher)
 enrollToCourse (student)
 assignToCourse (maronato)
 leaveACrouse (student)
 historyEsami (student)
 doExam (student)
 changeDescriptionOfACourse (teacher)
 ...

  ask Nikos for feedback

*/ 

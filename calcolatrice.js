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
function print_History() {
    console.log("_____________________");
    this.historyOperazione.forEach(function (op) {
        console.log(op.n1 + " " + op.operazione + " " + (op.n2 != undefined ? op.n2 : "") + "\n");
    });
}
function myAdd(n1, n2) {
    return { fst: n1 + n2,
        snd: __assign({}, this, { historyOperazione: this.historyOperazione.concat([{
                    n1: n1,
                    n2: n2,
                    operazione: "+"
                }]) }) };
}
function mySub(n1, n2) {
    return { fst: n1 - n2,
        snd: __assign({}, this, { historyOperazione: this.historyOperazione.concat([{
                    n1: n1,
                    n2: n2,
                    operazione: "-"
                }]) }) };
}
function myDiv(n1, n2) {
    return { fst: n1 / n2,
        snd: __assign({}, this, { historyOperazione: this.historyOperazione.concat([{
                    n1: n1,
                    n2: n2,
                    operazione: "/"
                }]) }) };
}
function myMul(n1, n2) {
    return { fst: n1 * n2,
        snd: __assign({}, this, { historyOperazione: this.historyOperazione.concat([{
                    n1: n1,
                    n2: n2,
                    operazione: "*"
                }]) }) };
}
function myNeg(n1) {
    return { fst: n1 * -1,
        snd: __assign({}, this, { historyOperazione: this.historyOperazione.concat([{
                    n1: n1,
                    operazione: "*-1"
                }]) }) };
}
var my_calc = {
    add: myAdd,
    sub: mySub,
    div: myDiv,
    mul: myMul,
    neg: myNeg,
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

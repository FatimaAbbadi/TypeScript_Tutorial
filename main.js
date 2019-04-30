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
console.log("Hello World");
// stessi tipi primitivi
var a = 1;
var b = "Fatima";
var c = true;
var pippo = { kind: "student", average: 4, student_id: 12345, name: "rossi" };
var pluto = { kind: "teacher", teacher_id: 76543, name: "luca" };
function printName(entity) {
    if (entity.kind == "student") {
        console.log("Hello student: " + entity.name + "  Your average is  " + entity.average);
    }
    else {
        console.log("Hello teacher: " + entity.name + "  Your id is  " + entity.teacher_id);
    }
}
var fufy = { kind: "dog", bark: true, animalSpecies: "domestic", domestic: true, numberOfLegs: 4, origin: "city" };
var bubble = { kind: "monkey", jumps: true, animalSpecies: "Notdomestic", domestic: false, numberOfLegs: 4, origin: "forest" };
function printAnimal(entity) {
    if (entity.kind == "dog") {
        if (entity.bark == true) {
            console.log("He is an angry dog");
        }
        else {
            console.log("The dog is: " + entity.animalSpecies);
        }
    }
    else {
        if (entity.jumps == true) {
            console.log("He is a wild monkey");
        }
        else {
            console.log("The monkey is: " + entity.animalSpecies);
        }
    }
}
printAnimal(fufy);
console.log("---------------------");
printAnimal(bubble);
console.log("---------------------");
console.log("---------------------");
printName(pippo);
console.log("---------------------");
printName(pluto);
function eat_Nerd(chocoBars) {
    return {
        energy: this.energy + chocoBars,
        eat: this.eat,
        study: this.study,
        stats: this.stats
    };
}
function study_Nerd() {
    return __assign({}, this, { energy: this.energy - 100 });
}
function stats_Nerd() {
    console.log("My energy " + this.energy);
}
var pippoNerd = {
    energy: 100,
    stats: stats_Nerd,
    eat: eat_Nerd,
    study: study_Nerd
};
pippoNerd.stats();
pippoNerd = pippoNerd.study();
pippoNerd = pippoNerd.study();
pippoNerd.stats();
pippoNerd = pippoNerd.eat(10);
pippoNerd.stats();
function myAddi(n1, n2) {
    return n1 + n2;
}
var my_mul = function (n1, n2) { return n1 * n2; };
var my_calculator = {
    //LAMBDA FUNCTION GOES LIKE THIS
    add: myAddi,
    sub: function (n1, n2) {
        return n1 - n2;
    },
    div: function (n1, n2) { return n1 / n2; },
    mul: my_mul,
    neg: function (n1) {
        return n1 * -1;
    }
};
/* //array definition
let collection : number[]= [1,3,5,6]
console.log(collection)

collection = collection.concat(1010)
console.log(collection)
 */ 

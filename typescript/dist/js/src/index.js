"use strict";
//String, boolean, number, ...
let x = 10;
console.log(x);
//Inferência
let b = 30;
//Annotation
let s = 20;
//arrays
const num = [1, 2, 3];
//tuplas
let dados;
dados = ["Josué", 18, "M"];
console.log(dados);
//objects
const user = {
    name: "Josué",
    ano: 2004,
    sexo: 'M'
};
console.log(user);
//any
let a = 0;
a = true;
a = "Josué";
a = 13;
//union type
let id = 0;
id = "josué";
id = 200;
let us = 18;
let p = true;
//enum
var lapis;
(function (lapis) {
    lapis["po"] = "ponta";
    lapis["lar"] = "tronco";
    lapis["ja"] = "cabeca";
})(lapis || (lapis = {}));
console.log(lapis.ja);
//literal types
let l;
l = 'Olá mundo';
//Funçôes
function sans(a, b) {
    return a + b;
}
console.log(sans(12, 13));
function susNumbers(nums) {
    return nums.n1 + nums.n2;
}
function MultNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(susNumbers({ n1: 1, n2: 2 }), MultNumbers({ n1: 3, n2: 6 }));
//Narrowing
function dos(info) {
    if (typeof info == 'number') {
        console.log(`O número passado é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
dos(5);
dos(true);
//Generics
function show(ar) {
    ar.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
show(a1);
show(a2);
//Class
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const zeca = new User('Zeca', "Admin", true);
console.log(zeca);

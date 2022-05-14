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
    age: 18
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

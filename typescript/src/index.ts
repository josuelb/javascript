//String, boolean, number, ...
let x:number = 10;

console.log(x);

//Inferência
let b = 30

//Annotation
let s:number = 20

//arrays

const num: number[] = [1, 2, 3]

//tuplas
let dados: [string, number, string];

dados = ["Josué", 18, "M"]

console.log(dados)

//objects
const user:{name: string, age: number} = {
    name: "Josué",
    age:18
};

console.log(user);

//any
let a:any = 0

a = true
a = "Josué"
a = 13

//union type
let id: string|number = 0

id = "josué"
id = 200

//type alias
type eu = number | boolean
let us: eu = 18
let p: eu = true

//enum
enum lapis{
    po = "ponta",
    lar = "tronco",
    ja = "cabeca"
}

console.log(lapis.ja)

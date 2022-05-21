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
const user:{name: string, ano: number, sexo: string} = {
    name: "Josué",
    ano:2004,
    sexo: 'M'
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

//literal types
let l:'Olá mundo'

l = 'Olá mundo'

//Funçôes
function sans(a:number,b:number){
    return a + b
}

console.log(sans(12, 13))


//Interfaces
interface MathFunction{
    n1: number, 
    n2: number
}

function susNumbers(nums: MathFunction){
    return nums.n1 + nums.n2
}
function MultNumbers(nums: MathFunction){
    return nums.n1 * nums.n2
}

console.log(susNumbers({n1: 1, n2: 2}), MultNumbers({n1: 3, n2: 6}));

//Narrowing
function dos(info: number|boolean){
    if(typeof info == 'number'){
        console.log(`O número passado é ${info}`)
        return;
    } 
    console.log('Não foi passado um número')
}

dos(5)
dos(true)

//Generics
function show<T>(ar: T[]){
    ar.forEach((item) =>{
        console.log(`Item: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ['a', 'b', 'c']

show(a1)
show(a2)

//Class
class User{
    name
    role
    isApproved

    constructor(name:string, role:string, isApproved: boolean){
        this.name = name
        this.role = role 
        this.isApproved = isApproved
    }
}

const zeca = new User('Zeca', "Admin", true)
console.log(zeca);
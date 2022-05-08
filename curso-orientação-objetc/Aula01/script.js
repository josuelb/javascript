var pessoa = new Object()
let pessoa2 = {nome:'Josué', idade:'18', sexo:'M'}

console.log(typeof pessoa)
console.log(typeof pessoa2)

let pess = {
    nome:'Josué',
    enter(p){
        console.log(`Olá ${pess.nome}, seja bem vindo. Sua variável é ${p}`)
    }
}
console.log(pess)
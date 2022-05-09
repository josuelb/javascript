class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
}

var Rodrigo = new Pessoa('Josué', 18, 'M')
console.log(Rodrigo)
console.log(Rodrigo instanceof Pessoa)
console.log(Rodrigo.constructor === Pessoa)
for(prop in Rodrigo){
    console.log(Rodrigo[prop])
}
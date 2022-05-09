class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
}

Pessoa.prototype.getNome = function(){
    return this.nome
}
Pessoa.prototype.getIdades = function(){
    return this.idade
}
Pessoa.prototype.getSexo = function(){
    return this.sexo
}

var josue = new Pessoa('Josué', 21, 'M')
var joao = new Pessoa('João', 18, 'M')
console.log(josue.getNome(), josue.getIdades(), josue.getSexo())
console.log(joao.getNome(), joao.getIdades(), joao.getSexo())

console.log(josue)
console.log(joao)

console.log(josue instanceof Pessoa)
console.log(josue.constructor === Pessoa)
function Pessoa(nome, idade, sexo){
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
}

Pessoa.prototype = {
    getNome: function(){
        return this.nome
    }
}

var josue = new Pessoa('Josué', 21, 'M')
var joao = new Pessoa('João', 18, 'M')
console.log(josue.getNome())

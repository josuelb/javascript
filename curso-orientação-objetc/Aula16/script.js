function Pessoa(nome, idade, sexo){
    if (this instanceof Pessoa){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    } else{
        return new Pessoa(nome, idade, sexo)
    }
    
}

var josue = Pessoa('Josué', 18, 'M')

console.log(josue instanceof Pessoa)
console.log(josue)
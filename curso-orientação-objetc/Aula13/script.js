const Pessoa = function (nome, idade, sexo){
    return{
        constructor: Pessoa,
        nome: nome,
        idade: idade,
        sexo: sexo,
        getidade: function(){
            return this.idade
        } 
    }
}

var josue = Pessoa('Josué', 18, 'M')
console.log(josue)
console.log(Object.getPrototypeOf(josue))
console.log(josue.getidade())
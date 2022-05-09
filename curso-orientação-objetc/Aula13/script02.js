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
//console.log(josue)


const pessoacriada = Object.create(josue,{
    endereço: {
        value: 'Rua Fulando de Tal 5001 - SP - Capital',
        writable: true,
        configurable: true,
        enumerable: true
    }
})
console.log(pessoacriada.getidade())
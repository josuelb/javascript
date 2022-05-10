//Veja no console do navegador 

//Métodos privilegiados
const pessoa = (function(nome, idade, sexo){
    var Nome = nome
    var Idade = idade
    var Sexo = sexo

    return{
        getNome:function(){
            return Nome
        },
        getIdade: function(){
            return Idade
        },
        getSexo: function(){
            return Sexo
        }
    }
})('Josué', 18, 'M')


//Métodos privados
const pessoa2 = (function(nome, idade, sexo){
    var Nome = nome
    var Idade = idade
    var Sexo = sexo

    var getNome = function(){
        return Nome
    }
    var getIdade = function(){
        return Idade
    }
    var getSexo =function(){
        return Sexo
    }

    return{
        getnome: getNome,
        getidade: getIdade,
        getsexo: getSexo
    }
})('Josué', 18, 'M')
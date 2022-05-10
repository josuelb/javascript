//Veja no console do navegador 


//Mais sobre Métodos privados
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

    var setnome = function(value){
        return Nome = value
    }
    var setidade = function(value){
        return Idade = value
    }
    var setsexo = function(value){
        return Sexo = value
    }

    var metodos = {
        getnome: getNome,
        getidade: getIdade,
        getsexo: getSexo,
        setNome: setnome,
        setIdade: setidade,
        setSexo: setsexo
    }

    Object.defineProperties(metodos,{
        getidade:{
            enumerable: false
        },
        getsexo:{
            enumerable: false
        },
        getnome:{
            enumerable: false
        }
    })

    return metodos
})('Josué', 18, 'M')


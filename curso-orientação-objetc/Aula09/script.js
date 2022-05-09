var pessoa = {}

Object.defineProperties(pessoa,{
    _nome: {
        value:'Rodrigo',
        enumerable: true,
        configurable: false,
        writable: false
    },
    _sexo: {
        value:'M',
        enumerable: true,
        configurable: true,
        writable: true

    },
    _idade:{
        value: 25,
        enumerable:true,
        configurable: true,
        writable: true
    },

    nome:{
        get: function(){
            return this._nome

        },
        set: function(value){
            this._nome = value;
        }
    },

    sexo:{
        get: function(){
            return this._sexo

        },
        set: function(value){
            this._sexo = value;
        }
    }
})

var atributos = Object.getOwnPropertyDescriptor(pessoa, '_nome')

pessoa._nome = 'Josué'
console.log(pessoa.nome)

console.log(atributos)
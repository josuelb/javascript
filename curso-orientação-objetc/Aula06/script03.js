let pessoa = {}
pessoa.nome = 'Rodrigo'
pessoa.idade = 29
pessoa.idade = 'M'
pessoa.casado = false

var i, size
let propriedade = Object.keys(pessoa)

for(i = 0, size = propriedade.length; i < size; i++){
    console.log(`Chave: ${propriedade[i]}`)
    console.log(`Indice: ${pessoa[propriedade[i]]}`)
}
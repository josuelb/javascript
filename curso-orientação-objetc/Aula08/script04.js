let pessoa = {
    nome: 'Rodrigo',
    idade: 29,
    sexo: 'M',
    casado: false
}

console.log(pessoa.idade)

Object.defineProperty(pessoa, 'idade', {
    writable: false
})

pessoa.idade = 18

console.log(pessoa.idade)
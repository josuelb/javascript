let pessoa = {
    nome: 'Rodrigo',
    idade: 29,
    idade: 'M',
    casado: false
}

console.log(pessoa.nome)

Object.defineProperty(pessoa, 'nome', {
    value: 'Josué'
})

console.log(pessoa.nome)

if (pessoa.nome.value == 'Rodrigo'){
    pessoa.nome = 'Josué'
    console.log(pessoa.nome)
} else {
    pessoa.nome = 'Rodrigo'
    console.log(pessoa.nome)
}

let pessoa = {
    nome: 'Rodrigo',
    idade: 29,
    idade: 'M',
    casado: false
}

Object.defineProperty(pessoa, 'nome', {
    configurable: false
})

console.log(pessoa)
pessoa.nome = 'Josué' //Pode pois é uma alteração de valor
console.log(pessoa)
delete pessoa.nome //Não pode pois é uma alteração de configuração
console.log(pessoa)

let pessoa = {}
pessoa.nome = 'Rodrigo'
pessoa.idade = 29
pessoa.idade = 'M'
pessoa.casado = false

for (propriedade in pessoa){
    console.log(`Chave: ${propriedade}`)
    console.log(`Conteudo: ${pessoa[propriedade]}`)
}
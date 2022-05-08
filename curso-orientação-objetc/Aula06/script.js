let pessoa = {}
pessoa.nome = 'Rodrigo'
pessoa.idade = 29
pessoa.idade = 'M'
pessoa.casado = false

if("casado" in pessoa){
    delete pessoa.casado
}

console.log(pessoa)
let pessoa = {
    nome: 'Rodrigo',
    idade: 29,
    idade: 'M',
    casado: false
}

Object.defineProperty(pessoa, 'idade', {
    enumerable: false
})

for(prop in pessoa){
    console.log(prop) //Não aparecerá pois a propriedade esta inumerável
}
let pessoa = {
    nome: 'Rodrigo',
    _idade: 29,
    idade: 'M',
    casado: false,
    get idade() {
        return this._idade
    }
}
console.log(pessoa.idade)

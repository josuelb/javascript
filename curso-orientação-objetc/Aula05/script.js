var f = function(){
    console.log(this.nome)
}

let pessoa = {
    nome:'Rodrigo Rocha',
    idade:'29',
    getnome: f
}

let carro = {
    nome:'Gol',
    marca:'VW',
    getnome: f
}

pessoa.getnome()
f.call(pessoa)

 
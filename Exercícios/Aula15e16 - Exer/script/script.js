let num = document.querySelector('input#num')
let list = document.querySelector('select#res1')
let res = document.querySelector('div#res2')
let valores = []

function isnumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}
function islist(n, l){
    if(l.indexOf(Number(n) != -1)){
        return true
    } else{
        return false
    }
}


function add(){
    if(isnumero(num.value) && islist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('Valor invalido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function final(){
    valores.sort()
    if(valores.length == 0){
        window.alert('Digite um valor na caixa!!!')
    } else{
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[tot-1]
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    }
}
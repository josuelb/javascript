function verificar(){
    var date = new Date()
    var year = date.getFullYear()
    var year0 = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (year0.value.length == 0 || Number(year0.value) > year) {
        window.alert(`[ERRO]
        Verifique os dados e tente novamente.`)
    }
    else {
        var fsex = document.getElementsByName('hadsex')
        var idad = year - Number(year0.value)
        var sex = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sex = 'HOMEM'
            if (idad < 10){
                //criança
                img.setAttribute('src', 'bebe-H.png')
            }
            else if (idad < 21){
                //jovem
                img.setAttribute('src', 'jovem-H.png')
            }
            else if (idad < 50){
                //adulto
                img.setAttribute('src', 'adulto.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        else if (fsex[1].checked){
            sex = 'MULHER'
            if (idad < 10){
                //criança
                img.setAttribute('src', 'bebe-M.png')
            }
            else if (idad < 21){
                //jovem
                img.setAttribute('src', 'jovem-M.png')
            }
            else if (idad < 50){
                //adulto
                img.setAttribute('src', 'adulta.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sex} com ${idad} anos.`
        res.appendChild(img)
    }
}
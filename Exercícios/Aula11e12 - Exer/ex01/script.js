function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imag')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 5){
        //MADRUGADA
        img.src = 'boamadrugada.png'
        document.body.style.background = `#292E3D`
    }
    else if (hora >= 5 && hora < 12){
        //BOM DIA
        img.src = 'bomdia.png'
        document.body.style.background = `#DECFCA`
    }
    else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'boatarde.png'
        document.body.style.background = `#EFCC99`
    }
    else if (hora >= 18 && hora < 24){
        //BOA NOITE
        img.src = 'boanoite.png'
        document.body.style.background = `#03162E`
    }
    else{
        msg.innerHTML = `[ERRO]
        Verifique a Data/Hora de sua máquina.`
    }
}

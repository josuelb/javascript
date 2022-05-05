var agora = new Date()//Para pegar a hora da máquina
var hora = agora.getHours()//Continuação..

console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log("Bom dia")
}
else if (hora <= 18) {
    console.log("Boa tarde")
}
else {
    console.log("Boa noite")
}

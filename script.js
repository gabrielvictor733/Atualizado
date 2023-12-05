function ProximaIMG(){
cont ++
if(cont > 3){
    cont = 1
}
document.getElementById('radio' + cont).checked = true
}

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true //quando abrir a pagina, marcar o primeiro input automaticamente

setInterval(() => { //definir o tempo de cada imagem
    ProximaIMG()
}, 5000) //5 segundos

function mexe(){
    let circulo = document.querySelector('.circulo')
    let background = document.querySelector('.background')
    if(circulo.style.left != '40px'){
        circulo.style.left = '40px'
        background.style.width = '70px'
        document.body.style.background = 'black'
        document.body.style.color = 'white'
    }else{
        circulo.style.left = '0px'
        background.style.width = '0px'
        document.body.style.background = 'white'
        document.body.style.color = 'black'
    }
}

function abrefecha(){
    let menu = document.querySelector('.menu')
    if(menu.style.width = '100%'){
        menu.style.width = '0%'
    }else{
        menu.style.width = '100%'
    }
}


// 1 Ajustar o tamanho da tela

let altura = 0
let largura= 0
let vidas = 1
let tempo = 10

let = criaMosquitoTempo = 1500
let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel ==='dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'hard') {
    criaMosquitoTempo = 750
}
        
    function ajustaTamanhoPalcoJogo() {

        altura = window.innerHeight
        largura = window.innerWidth
        
        console.log(altura,largura)
    }
//criar cronometro
    let cronometro = setInterval(() => {
        tempo -=1
        if(tempo < 0) {
            clearInterval(cronometro)
            clearInterval(criaMosquito)
            window.location.href = 'vitoria.html'
        } else{
            document.querySelector('#cronometro').innerHTML = tempo  
        }
        
    }, 1000);
       
// chamar a função 
    ajustaTamanhoPalcoJogo()

// função posição do elemento(mosquito)
    function posicaoRandomica(){

//remover o mosquito anterior através do id (caso exista)
     if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()   

        if(vidas > 3) {
           window.location.href = 'fim_de_jogo.html' 

        } else{
            document.querySelector(`#v${vidas}`).src = "imagens/coracao_vazio.png"

        vidas++
        }
        
        }
    
    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


//  Criar o elemento html (mosquito)

    let mosquito = document.createElement('img')

// Mudando o estilo do elemento img (mosquito)
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
 // criar um id para o mosquito para ser usado posteriormente para criar e apagar o elemento   
    mosquito.id = 'mosquito'
// criar função onclick (para matar os mosquitos)
    mosquito.onclick = function() {
        this.remove()
    }

// 3 - Acessar o body e incluir imagem dentro dele

    document.body.appendChild(mosquito)

    }
 
  //  Chamar a função 
    posicaoRandomica()

// Criar a  função tamanhos aleatórios

    function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
 //  Chamar a função 

    tamanhoAleatorio()

// Criar a  função lados aleatórios

    function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0: 
            return 'ladoA'
            case 1:
            return 'ladoB'
       
    }
}
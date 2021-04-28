let mudaImg = (id, img) => {
    let image = document.getElementById(id).children[0]
    image.setAttribute('src', img);
    // console.log(image)
}

let voltaImg = (id, img) => {
    let image = document.getElementById(id).children[0]
    image.setAttribute('src', img)
    // console.log(image)
}


let mostraEsconde = {

    mostra: (modal) => {
        let tela = document.querySelector(modal)
        tela.classList.toggle('active')
    },

    esconde: (modal) => {
        let tela = document.querySelector(modal)
        let tela2 = $(modal)
        tela2.fadeOut();
        setTimeout(() => {
            tela.classList.toggle('active')
            tela.setAttribute('style', 'display:')
        }, 500)

    },


}

let mandarEmail = (teste) => {
    // alert("Prezado(a): " +nomeAluno +" sua duvida foi enviado para o email do seu professor "+ nomeProfessor+ ". Aguarde!")
    console.log(nomeAluno)
}

let esconde = () => {
    let tela = $('.modalNotas')
    tela.fadeOut(1000);
    console.log(tela)
}

let emDesenvolvimento = () => {
    alert("Este botão é apenas demostrativo, não implementei o mesmo para manter o layout demonstrativo da página");
}
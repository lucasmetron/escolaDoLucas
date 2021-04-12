let mudaImg = (id,img) =>{
    let image = document.getElementById(id).children[0]
    image.setAttribute('src',img);
    // console.log(image)
}

let voltaImg = (id,img) =>{
    let image = document.getElementById(id).children[0]
    image.setAttribute('src',img)
    // console.log(image)
}


let mostraEsconde = {

    mostra: (modal)=>{
        let tela = document.querySelector(modal)
        tela.classList.toggle('active')
        console.log(tela)
    },
    
    esconde : (modal)=>{
        let tela = document.querySelector(modal)
        tela.classList.toggle('active')
        console.log(tela)
    },


}





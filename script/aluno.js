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

    mostra: ()=>{
        let tela = document.querySelector('.fundoBranco')
        tela.classList.toggle('active')
        console.log(tela)
    },
    
    esconde : ()=>{
        let tela = $('.fundoBranco')
        tela.hide(500)
        console.log(tela)
    },


}





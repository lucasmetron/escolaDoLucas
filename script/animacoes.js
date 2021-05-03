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

function verificaCamposDuvidas() {


    if (document.querySelector("#mensagem").value == '') {
        alert("Preencha todos os campos! Campo 'Dúvida' vazio.")
        document.querySelector("#mensagem").focus()
    }

    else if (document.querySelector("#professorDuvidas").value == '') {
        alert("Preencha todos os campos! Campo 'Professor' vazio.");
        document.querySelector("#professorDuvidas").focus();

    }

    else if (document.querySelector("#nomeInput").value == '') {
        alert("Preencha todos os campos! Campo 'Nome' vazio.")
        document.querySelector("#nomeInput").focus()
    }

    else if (document.querySelector("#turmaInput").value == '') {
        alert("Preencha todos os campos! Campo 'turma'vazio.")
        document.querySelector("#turmaInput").focus()
    }

    else {
        enviaEmail();
    }



}

let enviaEmail = () => {
    let professor = document.querySelector("#professorDuvidas").value;
    let email = professor.toLowerCase() + "@gmail.com";

    alert(`E-mail enviado para ${email}. Assim que possível seu professor ${professor} entrará em contanto `)

    window.location.reload();
}

let informativo = () => {
    alert(`Turmas pré cadastradas para consulta: 3a e 3b
As informações alteradas no aluno Lucas Marcelino Rosa, seram refletidas das telas de consulta do aluno Lucas Rosa `)
}

informativo();
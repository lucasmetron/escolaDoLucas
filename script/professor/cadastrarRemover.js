// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDXk6wBaQpZ45b2I0w8vUkQpNURPhW_Q6w",
    authDomain: "escoladolucas-81f7c.firebaseapp.com",
    projectId: "escoladolucas-81f7c",
    storageBucket: "escoladolucas-81f7c.appspot.com",
    messagingSenderId: "1087501509532",
    appId: "1:1087501509532:web:38728aa2fd2de513bdde59",
    measurementId: "G-CJ1J9VFDPD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();

let igualdadeMatricula = false;
let igualdadeNomeNovoAluno = false;
let igualdadeCpfNovoAluno = false;
let igualdadeCelularNovoAluno = false;
let igualdadeEmailNovoAluno = false;



function verificaCampos() {


    if (document.querySelector("#anoTurmaNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'Ano/Turma' vazio.")
        document.querySelector("#anoTurmaNovoAluno").focus()
    }

    else if (document.querySelector("#matriculaNovoAluno").value == '') {

        alert("Preencha todos os campos! Campo 'Matrícula' vazio.");
        document.querySelector("#matriculaNovoAluno").focus();

    }

    else if (igualdadeMatricula != false) {
        alert("Matricula já existente! Cadastre outro número de matrícula")
        igualdadeMatricula = false;
    }

    else if (document.querySelector("#nomeNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'Nome aluno' vazio.")
        document.querySelector("#nomeNovoAluno").focus()

        // função verificar se há outro valor igual
    }

    else if (document.querySelector("#idadeNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'Idade'vazio.")
        document.querySelector("#idadeNovoAluno").focus()
    }

    else if (document.querySelector("#cpfNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'CPF' vazio.")
        document.querySelector("#cpfNovoAluno").focus()

        // função verificar se há outro valor igual
    }

    else if (document.querySelector("#celularNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'Celular do aluno' vazio.")
        document.querySelector("#celularNovoAluno").focus()

        // função verificar se há outro valor igual
    }

    else if (document.querySelector("#emailNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'E-mail do aluno' vazio.")
        document.querySelector("#emailNovoAluno").focus()
        // função verificar se há outro valor igual
    }

    else if (document.querySelector("#nomeResponsavelNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'Nome responsável' vazio.")
        document.querySelector("#nomeResponsavelNovoAluno").focus()
    }

    else if (document.querySelector("#emailResponsavelNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'E-mail responsável' vazio.")
        document.querySelector("#emailResponsavelNovoAluno").focus()
    }

    else if (document.querySelector("#celularResponsavelNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'Celular responsável' vazio.")
        document.querySelector("#celularResponsavelNovoAluno").focus()
    }

    else if (document.querySelector("#obsNovoAluno").value == '') {
        alert("Preencha todos os campos! Campo 'Obeservação' vazio.")
        document.querySelector("#obsNovoAluno").focus()

    } else {
        verificarIgualdade()
    }
}

function verificarIgualdade() {

    let anoTurma = document.querySelector("#anoTurmaNovoAluno").value;

    let matricula = document.querySelector("#matriculaNovoAluno").value;
    let nomeAluno = document.querySelector("#nomeNovoAluno").value;
    let cpfAluno = document.querySelector("#cpfNovoAluno").value;
    let celularAluno = document.querySelector("#celularNovoAluno").value;
    let emailAluno = document.querySelector("#emailNovoAluno").value;

    db.collection(anoTurma).get().then((snapshot) => {
        snapshot.forEach(doc => {
            console.log(igualdadeMatricula)
            let alunoMatricula = doc._delegate._key.path.segments[6]

            if (matricula === alunoMatricula) {
                igualdadeMatricula = true;
            }

        })
    })

    setTimeout(() => {
        console.log(igualdadeMatricula)

        if (igualdadeMatricula === true) {
            alert("Matricula já cadastrada")
            igualdadeMatricula = false;

        } else {
            cadastrarUsuario();
            console.log('cheguei no else')
        }
    }, 500)


}


function cadastrarUsuario() {
    let anoTurma = document.querySelector("#anoTurmaNovoAluno").value;
    let matricula = document.querySelector("#matriculaNovoAluno").value;
    let nomeAluno = document.querySelector("#nomeNovoAluno").value;
    let idade = document.querySelector("#idadeNovoAluno").value;
    let cpf = document.querySelector("#cpfNovoAluno").value;
    let celularAluno = document.querySelector("#celularNovoAluno").value;
    let emailAluno = document.querySelector("#emailNovoAluno").value;
    let nomeResp = document.querySelector("#nomeResponsavelNovoAluno").value;
    let emailResp = document.querySelector("#emailResponsavelNovoAluno").value;
    let celularResp = document.querySelector("#celularResponsavelNovoAluno").value;
    let obs = document.querySelector("#obsNovoAluno").value;



    db.collection(anoTurma).doc(matricula).set({
        nomeAluno: nomeAluno,
        idade: idade,
        cpf: cpf,
        celularAluno: celularAluno,
        emailAluno: emailAluno,
        nomeResp: nomeResp,
        emailResp: emailResp,
        celularResp: celularResp,
        obs: obs
    }).then(doc => {
        alert("Aluno cadastrado com sucesso")
    }).catch(erro => {
        alert(erro)
    })

    console.log(anoTurma, matricula, nomeAluno, idade, cpf, celularAluno, emailAluno, nomeResp, emailResp, celularResp,)

    setTimeout(() => {
        window.location.reload();
    }, 2000)

}

function removerAluno() {
    let aluno = document.querySelector("#excluirAlunoInput").value
    console.log(aluno)
}

// function teste() {
//     let turma = '3b'
//     let matricula = '651324'

//     db.collection(turma).get().then((snapshot) => {
//         snapshot.forEach(doc => {
//             let alunoMatricula = doc._delegate._key.path.segments[6]

//             console.log(alunoMatricula)

//         })
//     })
// }

// teste();
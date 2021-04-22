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

    // console.log("igualdade matricula quando entra na função" + igualdadeMatricula)

    let anoTurma = document.querySelector("#anoTurmaNovoAluno").value;

    let matricula = document.querySelector("#matriculaNovoAluno").value;
    let nomeAluno = document.querySelector("#nomeNovoAluno").value;
    let cpfAluno = document.querySelector("#cpfNovoAluno").value;
    let celularAluno = document.querySelector("#celularNovoAluno").value;
    let emailAluno = document.querySelector("#emailNovoAluno").value;

    db.collection(anoTurma).get().then((snapshot) => {
        snapshot.forEach(doc => {
            let dbAlunoMatricula = doc._delegate._key.path.segments[6]
            let dbNomeAluno = doc.data().nomeAluno;
            let dbCPF = doc.data().cpf;
            let dbCelularAluno = doc.data().celularAluno;
            let dbEmailAluno = doc.data().emailAluno;

            // console.log(dbAlunoMatricula, dbNomeAluno, dbCPF, dbCelularAluno, dbEmailAluno)

            // console.log("igualdade matricula dentro do foreach " + igualdadeMatricula);
            // console.log("matricula salva no banco " + alunoMatricula);
            // console.log("matricula digitada pelo usuário " + matricula);

            if (dbAlunoMatricula === matricula) {
                igualdadeMatricula = true;

            } else if (dbNomeAluno === nomeAluno) {
                igualdadeNomeNovoAluno = true;

            } else if (dbCPF === cpfAluno) {
                igualdadeCpfNovoAluno = true;

            } else if (dbCelularAluno === celularAluno) {
                igualdadeCelularNovoAluno = true;

            } else if (dbEmailAluno === emailAluno) {
                igualdadeEmailNovoAluno = true;

            }
        })

        alert("Verificando dados do aluno cadastrado, por favor aguarde :D")

        setTimeout(() => {

            // console.log("igualdade que saiu do foreach " + igualdadeMatricula)

            if (igualdadeMatricula === true) {
                alert("Matricula já cadastrada")
                igualdadeMatricula = false;

            } else if (igualdadeNomeNovoAluno === true) {
                alert("Nome de aluno já cadastrado")
                igualdadeNomeNovoAluno = false;
            }

            else if (igualdadeCpfNovoAluno === true) {
                alert("CPF já cadastrado")
                igualdadeCpfNovoAluno = false;
            }

            else if (igualdadeCelularNovoAluno === true) {
                alert("Celular deste aluno já está cadastrado")
                igualdadeCelularNovoAluno = false;
            }

            else if (igualdadeEmailNovoAluno === true) {
                alert("E-mail deste aluno já foi cadastrado")
                igualdadeEmailNovoAluno = false;
            }

            else {
                cadastrarUsuario();
                console.log('cheguei no else')
            }

        }, 1000)


    })
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

function buscaDados() {




    db.collection('3b').onSnapshot(snapshot => {
        snapshot.forEach((doc) => {
            let nomeAluno = doc.data().nomeAluno;

            let aluno = document.createTextNode(nomeAluno);

            let novaTagOption = document.createElement("option");
            let conteudoOption = aluno;

            let tagSelect = document.querySelector("#NomeExcluirAlunoInput")
            novaTagOption.appendChild(aluno);
            novaTagOption.setAttribute('value', nomeAluno);
            tagSelect.appendChild(novaTagOption);



        })
    })
}

buscaDados();




// function teste() {

//     let tagSelect = document.querySelector("#excluirAlunoInput")
//     let aluno = document.createTextNode("Lucas")
//     let elemento_pai = document.body;
//     let nome = "lucas"

//     // let novaTagOption = document.createElement("option");
//     // let conteudoOption = aluno;

//     // novaTagOption.append(conteudoOption);

//     // document.body.insertBefore(tagSelect, novaTagOption);


//     // console.log(novaTag, novaTagOption);

//     let titulo = document.createElement('option')

//     titulo.appendChild(aluno);
//     tagSelect.appendChild(titulo)

//     titulo.setAttribute('value', nome)



// }

// teste();
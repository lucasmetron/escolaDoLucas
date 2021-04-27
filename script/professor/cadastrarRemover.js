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

let igualdadeMatricula = false;   //TODAS ESSAS VARIAVEIS SÃO PARA VERIFICAR SE HÁ DADOS SENSÍVEIS REPETIDOS NO DB
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

async function listaAluno() {
    let turmaSelecionada = document.querySelector("#turmaExcluirAlunoInput").value

    let tagSelect = document.querySelector("#NomeExcluirAlunoInput");
    tagSelect.innerHTML = '<option value="">Selecione o Aluno</option>';

    await alert(`Atenção! Caso o campo nome não apresente listagem, a turma ${turmaSelecionada} não existe.`)

    await db.collection(turmaSelecionada).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let nomeAluno = doc.data().nomeAluno;
            let matriculaAluno = doc._delegate._key.path.segments[6];
            // let aluno = document.createTextNode(nomeAluno);
            // let matricula = document.createTextNode(matriculaAluno);

            let novaTagOption = document.createElement('option');
            let infoAluno = nomeAluno + "/ Matricula:" + matriculaAluno;
            let info = document.createTextNode(infoAluno)

            let tagSelect = document.querySelector('#NomeExcluirAlunoInput')
            novaTagOption.append(info);
            novaTagOption.setAttribute('value', matriculaAluno)
            tagSelect.appendChild(novaTagOption);

            console.log(info)
        })
    })

}

async function onSnapshotListaAlunos() {  //ESTA FUNÇÃO NAO ESTA EM USO
    let turmaSelecionada = document.querySelector("#turmaExcluirAlunoInput").value
    console.log(turmaSelecionada);


    await db.collection(turmaSelecionada).onSnapshot(snapshot => {
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

function verificaCamposRemover() {


    if (document.querySelector("#turmaExcluirAlunoInput").value == '') {
        alert("Preencha todos os campos! Campo 'Turma' vazio.")
        document.querySelector("#turmaExcluirAlunoInput").focus()
    }

    else if (document.querySelector("#NomeExcluirAlunoInput").value == '') {
        alert("Preencha todos os campos! Campo 'Aluno' vazio.");
        document.querySelector("#NomeExcluirAlunoInput").focus();

    }


    else {
        removerAluno();
    }



}

function listarAluno() {
    let divOculta = document.querySelector("#alunoBD")
    divOculta.style.display = "grid"
}


function fecharListaAluno() {
    let divOculta = document.querySelector("#alunoBD")
    divOculta.style.display = "none"
}


function removerAluno() {
    let turma = document.querySelector("#turmaExcluirAlunoInput").value
    let matricula = document.querySelector("#NomeExcluirAlunoInput").value

    db.collection(turma).doc(matricula).delete().then(
        alert("Aluno excluido com sucesso!")
    ).catch(error => {
        alert("Sitema fora do ar, tente novamente mais tarde :(")
        console.log(error)
    })

    setTimeout(() => {
        window.location.reload();
    }, 1000)

    console.log(turma, aluno)
}

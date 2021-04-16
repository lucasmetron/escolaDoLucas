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


function cadastrarUsuario(){
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
    }).then(doc=>{
        alert("Aluno cadastrado com sucesso")
    }).catch(erro=>{
        alert(erro)
    })

    console.log(anoTurma, matricula, nomeAluno, idade, cpf, celularAluno, emailAluno, nomeResp, emailResp, celularResp,)
}

function removerAluno(){
    let aluno = document.querySelector("#excluirAlunoInput").value

    console.log(aluno)
}
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

let usuarios = [];
let aut = "autenticacao";

function aviso() {
    alert('Mande email para: lucasmetron@gmail.com com suas credênciais.\nO acesso será liberado assim que possível')
};

function use() {
    alert(`Usuario Professor: ricardo.oliveira 
Usuario Aluno: lucas.rosa`)
};

function pass() {
    alert(`Senha: 12121212 para ambos usuários`)
};

function telaCarregamento() {
    let tela = document.querySelector(".carregamento");
    tela.style.display = "flex";
}

function verificaCamposLogin() {
    let login = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;

    if (login === "" || login === undefined || login === null) {
        alert("Preencha todos os campos! Campo 'usuário' vazio")
    }
    else if (senha === "" || senha === undefined || senha === null) {
        alert("Preencha todos os campos! Campo 'senha' vazio")
    } else {

        telaCarregamento();

        setTimeout(() => {

            validaEntrada(login, senha)

        }, 2000)
    }


}
async function capturaUserAndPasswordDB() {

    await db.collection(aut).get().then(snapshot => {
        snapshot.forEach(doc => {
            usuarios.push(doc.data())
        })

    })
}

capturaUserAndPasswordDB();

function validaEntrada(usuario, senha) {
    let autorizado = false;
    let tipo;

    for (i = 0; i < usuarios.length; i++) {
        if (usuarios[i].user == usuario && usuarios[i].password == senha) {
            autorizado = true;
            tipo = usuarios[i].tipo
        }
    }

    if (autorizado === true) {
        localStorage.setItem("acesso", true); //esse dado salvo no localStorage será o que iremos verificar para liberar o acesso
        alert("Usuário autenticado.");
        window.location.href = tipo;
    } else {
        alert("Usuário ou senha inválido!")
        window.location.reload();
    }

}

function mostraAcessos() {
    alert(`Usuário aluno: lucas.rosa | senha: 1212
Usuário professor: ricardo.oliveira | senha: 1212`)
}

mostraAcessos()
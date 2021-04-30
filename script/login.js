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


async function capturaUserAndPasswordDB() {

    await db.collection(aut).get().then(snapshot => {
        snapshot.forEach(doc => {
            usuarios.push(doc.data().user)
            usuarios.push(doc.data().password)
        })

        console.log(usuarios)

    })
}

capturaUserAndPasswordDB();
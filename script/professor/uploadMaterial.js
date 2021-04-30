let arq = "arquivo"
let storage = firebase.storage();

function verificaCamposMaterial() {

    if (document.querySelector("#nomeAtiviProfessor").value == '') {
        alert("Preencha todos os campos! Campo 'Nome da atividade' vazio.")
        document.querySelector("#nomeAtiviProfessor").focus()
    }

    else if (document.querySelector("#disciplinaMAterialProfessor").value == '') {

        alert("Preencha todos os campos! Campo 'Disciplina' vazio.");
        document.querySelector("#disciplinaMAterialProfessor").focus();

    }

    else if (document.querySelector("#materialProfessor").files[0] == '' || undefined || null) {
        alert("Preencha todos os campos! Campo 'Arquivo' vazio.")
        document.querySelector("#materialProfessor").focus()

        // função verificar se há outro valor igual
    }

    else {
        subirMaterial();
    }

}

async function subirMaterial() {
    let nomeAtividade = document.querySelector("#nomeAtiviProfessor").value;
    let disciplina = document.querySelector("#disciplinaMAterialProfessor").value;
    let arquivo = document.querySelector("#materialProfessor").files[0]
    var storageRef = firebase.storage().ref();
    var documentoRef = storageRef.child("material/" + arquivo.name)

    alert("Seu material será salvo!");

    await db.collection(arq).doc(nomeAtividade).set({
        nomeAtividade: nomeAtividade,
        disciplina: disciplina,
        nomeArquivo: arquivo.name,
        nomeProfessor: "Ricardo Oliveira"
    }).then(doc => {
        console.log("Atividade salva na nuvem.")
    }).catch(erro => {
        alert(erro)
    })

    alert("Subindo arquivo para nuvem, por favor aguarde...");

    await documentoRef.put(arquivo).then((snapshot) => {
        alert("Upload feito!")
    }).catch(erro => {
        alert(erro)
    })

    setTimeout(() => {
        window.location.reload();
    }, 500)
}




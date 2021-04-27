let arq = "arquivo"
let storage = firebase.storage();


async function subirMaterial() {
    let nomeAtividade = document.querySelector("#nomeAtiviProfessor").value;
    let disciplina = document.querySelector("#disciplinaMAterialProfessor").value;
    let arquivo = document.querySelector("#materialProfessor").files[0]
    let storageRef = firebase.storage().ref();
    let documentoRef = storageRef.child(arquivo.type + "/" + arquivo.name)

    // db.collection(arq).doc(nomeAtividade).set({
    //     nomeAtividade: nomeAtividade,
    //     disciplina: disciplina,
    //     arquivo: arquivo
    // }).then(doc => {
    //     alert("Atividade salva na nuvem.")
    // }).catch(erro => {
    //     alert(erro)
    // })

    alert("Carregando, por favor aguarde...")

    documentoRef.put(arquivo).then((snapshot) => {
        alert("Upload feito!")
    }).catch(erro => {
        alert(erro)
    })


}


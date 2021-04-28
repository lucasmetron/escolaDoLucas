async function listaAlunoAdv() {
    let turmaSelecionada = document.querySelector("#anoTurmaAdv").value

    let tagSelect = document.querySelector("#nomeAlunoAdv");
    tagSelect.innerHTML = '<option value="">Selecione o Aluno</option>';

    alert(`Atenção! Caso o campo nome não apresente listagem, a turma ${turmaSelecionada} não existe.`)

    await db.collection(turmaSelecionada).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let nomeAluno = doc.data().nomeAluno;
            let matriculaAluno = doc._delegate._key.path.segments[6];
            // let aluno = document.createTextNode(nomeAluno);
            // let matricula = document.createTextNode(matriculaAluno);

            let novaTagOption = document.createElement('option');
            let infoAluno = nomeAluno + "/ Matricula:" + matriculaAluno;
            let info = document.createTextNode(infoAluno)


            novaTagOption.append(info);
            novaTagOption.setAttribute('value', matriculaAluno)
            tagSelect.appendChild(novaTagOption);
        })
    })
}

function verificaCamposAdv() {


    if (document.querySelector("#anoTurmaAdv").value == '') {
        alert("Preencha todos os campos! Campo 'Ano/Turma' vazio.")
        document.querySelector("#anoTurmaAdv").focus()
    }

    else if (document.querySelector("#nomeAlunoAdv").value == '') {
        alert("Preencha todos os campos! Campo 'Aluno' vazio.");
        document.querySelector("#nomeAlunoAdv").focus();

    }

    else if (document.querySelector("#tipoAdvOuSuspe").value == '') {
        alert("Preencha todos os campos! Campo 'Tipo' vazio.")
        document.querySelector("#tipoAdvOuSuspe").focus()
    }

    else if (document.querySelector("#motivo").value == '') {
        alert("Preencha todos os campos! Campo 'Motivo' vazio.")
        document.querySelector("#motivo").focus()
    }

    else if (document.querySelector("#dataAdv").value == '') {
        alert("Preencha todos os campos! Campo 'Data' vazio.")
        document.querySelector("#dataAdv").focus()

    }

    else if (document.querySelector("#consequencia").value == '') {
        alert("Preencha todos os campos! Campo 'Consequência' vazio.")
        document.querySelector("#consequencia").focus()

    }

    else {
        lancaAdv();
    }



}

async function lancaAdv() {

    let anoTurma = document.querySelector("#anoTurmaAdv").value;
    let matricula = document.querySelector("#nomeAlunoAdv").value;
    let tipo = document.querySelector("#tipoAdvOuSuspe").value;
    let motivo = document.querySelector("#motivo").value;
    let data = document.querySelector("#dataAdv").value;
    let consequencia = document.querySelector("#consequencia").value;
    let id = geraID();

    await db.collection(anoTurma).doc(matricula).set(
        {
            ocorrencias: {
                [id]: {
                    tipo: tipo,
                    motivo: motivo,
                    data: data,
                    consequencia: consequencia
                }
            }

        }, { merge: true }

    ).catch(error => {
        alert(error)
    })

    alert(`Ocorrência lançada com sucesso`);

    setTimeout(() => {
        window.location.reload();
    }, 1000)
}

function geraID() {
    let id = "id" + parseInt(Math.random() * 100000);
    return id;
}

console.log(geraID())
async function listaAlunoFaltas() {
    let turmaSelecionada = document.querySelector("#anoTurmaFaltas").value

    let tagSelect = document.querySelector("#nomeAlunoFaltas");
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


            novaTagOption.append(info);
            novaTagOption.setAttribute('value', matriculaAluno)
            tagSelect.appendChild(novaTagOption);
        })
    })
}

function verificaCamposFaltas() {


    if (document.querySelector("#anoTurmaFaltas").value == '') {
        alert("Preencha todos os campos! Campo 'Ano/Turma' vazio.")
        document.querySelector("#anoTurmaFaltas").focus()
    }

    else if (document.querySelector("#nomeAlunoFaltas").value == '') {
        alert("Preencha todos os campos! Campo 'Aluno' vazio.");
        document.querySelector("#nomeAlunoFaltas").focus();

    }

    else if (document.querySelector("#disciplinaFaltas").value == '') {
        alert("Preencha todos os campos! Campo 'Disciplina' vazio.")
        document.querySelector("#disciplinaFaltas").focus()
    }

    else if (document.querySelector("#bimestreFaltas").value == '') {
        alert("Preencha todos os campos! Campo 'Bimestre'vazio.")
        document.querySelector("#bimestreFaltas").focus()
    }

    else if (document.querySelector("#faltaLancada").value == '') {
        alert("Preencha todos os campos! Campo 'Nota' vazio.")
        document.querySelector("#faltaLancada").focus()

    } else {
        console.log('cheguei no else')
        lancaFalta();
    }



}

async function lancaFalta() {
    let anoTurma = document.querySelector("#anoTurmaFaltas").value;
    let matricula = document.querySelector("#nomeAlunoFaltas").value;
    let disciplina = document.querySelector("#disciplinaFaltas").value;
    let bimestre = document.querySelector("#bimestreFaltas").value;
    let falta = document.querySelector("#faltaLancada").value;

    console.log(anoTurma, matricula, disciplina, bimestre, falta)

    await db.collection(anoTurma).doc(matricula).set(
        {
            [disciplina]: {
                [bimestre]: {
                    faltas: falta
                }
            }
        }, { merge: true }

    ).catch(error => {
        alert(error)
    })

    alert(`Faltas lançada com sucesso`);

    setTimeout(() => {
        window.location.reload();
    }, 1000)
}

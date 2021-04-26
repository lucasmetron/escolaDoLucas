async function listaAlunoNotas() {
    let turmaSelecionada = document.querySelector("#anoTurmaNotas").value

    let tagSelect = document.querySelector("#nomeAlunoNota");
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
    }).catch(erro => {
        console.log(erro)
    })

}

async function lancaNota() {
    let anoTurma = document.querySelector("#anoTurmaNotas").value;
    let matricula = document.querySelector("#nomeAlunoNota").value;
    let disciplina = document.querySelector("#disciplinaAluno").value;
    let bimestre = document.querySelector("#bimestre").value;
    let nota = document.querySelector("#notaLancada").value;

    console.log(anoTurma, matricula, disciplina, bimestre, nota)

    await db.collection(anoTurma).doc(matricula).set(
        {
            [disciplina]: {
                [bimestre]: {
                    nota: nota
                }
            }
        }, { merge: true }

    ).catch(error => {
        alert(error)
    })

    alert(`Nota lançada com sucesso`);

    setTimeout(() => {
        window.location.reload();
    }, 1000)
}



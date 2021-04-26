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
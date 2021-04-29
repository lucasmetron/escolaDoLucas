let listaOcorrencias;

let formatDate = (date) => {
    const splitDate = date.split("-")
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
}

db.collection(turma).onSnapshot(snapshot => {
    let tela = document.querySelector("#mostradorAdvertencias");
    tela.innerHTML = `<h4 class="motivo">Motivo</h4>
    <h4 class="data">Data</h4>
    <h4 class="b2">Consequência</h4>
    <h4 class="b3">Assinatura Responsável</h4>`
    async function listaAdvs() {

        await db.collection(turma).doc(matricula).get().then((doc) => {
            listaOcorrencias = doc.data().ocorrencias;

        })


        listaOcorrencias.forEach(item => {
            let data = item.data;



            console.log()
            let advArea = document.querySelector("#mostradorAdvertencias")
            console.log(item.motivo)

            let tagMot = document.createElement("div");
            let tagData = document.createElement("div");
            let tagConse = document.createElement("div");
            let tagLink = document.createElement("a");

            let infoMot = document.createTextNode(item.motivo)
            let infoData = document.createTextNode(formatDate(data))
            let infoConse = document.createTextNode(item.consequencia)
            let infoLink = document.createTextNode("Acesse aqui")


            tagMot.append(infoMot)
            tagConse.setAttribute("id", "campoMotivo")
            tagMot.setAttribute("class", "campo")

            tagData.append(infoData)
            tagConse.setAttribute("id", "campoData")
            tagData.setAttribute("class", "campo")

            tagConse.append(infoConse)
            tagConse.setAttribute("id", "campoConsequencia")
            tagConse.setAttribute("class", "campo")

            tagLink.append(infoLink)
            tagLink.href = "http://www.emuroms.ch/roms/3ds"
            tagLink.setAttribute("class", "campo amarelo link")
            tagLink.target = "_blanck"


            advArea.append(tagMot)
            advArea.append(tagData)
            advArea.append(tagConse)
            advArea.append(tagLink)


        })

    }

    listaAdvs()

})



















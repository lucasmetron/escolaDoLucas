let materialLocal = "arquivo"
let materiais = [];


db.collection(materialLocal).onSnapshot(snapshot => {
    let tela = document.querySelector("#mostradorMaterial");
    tela.innerHTML = `
                        <h4 class="titulos">Atividade</h3>
                        <h4 class="titulos">Matéria</h4>
                        <h4 class="titulos">Professor</h4>
                        <h4 class="titulos">Link</h4>`


    async function listaMaterial() {

        await db.collection(materialLocal).get().then((snapshot) => {
            snapshot.forEach((doc) => {
                let material = doc.data()
                materiais.push(material);
            })

        })


        materiais.forEach(item => {

            let materialArea = document.querySelector("#mostradorMaterial")

            let tagAtividade = document.createElement("div");
            let tagMateria = document.createElement("div");
            let tagProfe = document.createElement("div");
            let tagLink = document.createElement("a");

            let infoAtividade = document.createTextNode(item.nomeAtividade)
            let infoMateria = document.createTextNode(item.disciplina)
            let infoProfe = document.createTextNode(item.nomeProfessor)
            let infoLink = document.createTextNode("Acesse aqui")


            tagAtividade.append(infoAtividade)
            tagAtividade.setAttribute("id", "tituloMaterial")
            tagAtividade.setAttribute("class", "campoMaterial")

            tagMateria.append(infoMateria)
            tagMateria.setAttribute("id", "materiaMaterial")
            tagMateria.setAttribute("class", "campoMaterial")

            tagProfe.append(infoProfe)
            tagProfe.setAttribute("id", "professorMaterial")
            tagProfe.setAttribute("class", "campoMaterial")

            tagLink.append(infoLink)
            tagLink.href = "https://firebasestorage.googleapis.com/v0/b/escoladolucas-81f7c.appspot.com/o/adv%2Ftermo.docx?alt=media&token=b8ad323e-a58b-40ab-a67c-17f00778166d"
            tagLink.setAttribute("class", "campoMaterial amareloMaterial link")
            tagLink.target = "_blanck"


            materialArea.append(tagAtividade)
            materialArea.append(tagMateria)
            materialArea.append(tagProfe)
            materialArea.append(tagLink)


        })

    }

    listaMaterial()

})


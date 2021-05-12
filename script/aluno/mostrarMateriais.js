let materialLocal = "arquivo"
let materiais = [];

const storage = firebase.storage();

db.collection(materialLocal).onSnapshot(snapshot => {
    let tela = document.querySelector("#mostradorMaterial");
    tela.innerHTML = `  <h4 class="titulos">Atividade</h3>
                        <h4 class="titulos">Matéria</h4>
                        <h4 class="titulos">Professor</h4>
                        <h4 class="titulos">Link</h4>`
    console.log(tela)

    async function listaMaterial() {

        await db.collection(materialLocal).get().then((snapshot) => {
            snapshot.forEach((doc) => {
                let material = doc.data()
                materiais.push(material);
            })

        })




        materiais.forEach(item => {


            let ref = storage.ref(`/material/${item.nomeArquivo}`);
            let URL;

            ref.getDownloadURL().then(url => {
                URL = url;
            })

            setTimeout(() => { //essa espera é para esperar o arquivo do download carregar
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
                tagAtividade.setAttribute("class", "campo")

                tagMateria.append(infoMateria)
                tagMateria.setAttribute("id", "materiaMaterial")
                tagMateria.setAttribute("class", "campo")

                tagProfe.append(infoProfe)
                tagProfe.setAttribute("id", "professorMaterial")
                tagProfe.setAttribute("class", "campo")

                tagLink.append(infoLink)
                tagLink.href = URL;
                tagLink.setAttribute("class", "campo amarelo link ")
                tagLink.target = "_blanck"


                materialArea.append(tagAtividade)
                materialArea.append(tagMateria)
                materialArea.append(tagProfe)
                materialArea.append(tagLink)
            }, 2000)


        })

    }

    listaMaterial()

})


async function baixaArquivo(arquivo) {

    let ref = storage.ref(`/material/${arquivo}`);
    let URL;

    await ref.getDownloadURL().then(url => {
        URL = url;
    })

    console.log(URL)
    return URL;
}



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
            tagAtividade.setAttribute("class", "campo")

            tagMateria.append(infoMateria)
            tagMateria.setAttribute("id", "materiaMaterial")
            tagMateria.setAttribute("class", "campo")

            tagProfe.append(infoProfe)
            tagProfe.setAttribute("id", "professorMaterial")
            tagProfe.setAttribute("class", "campo")

            tagLink.append(infoLink)
            tagLink.href = "https://docs.google.com/uc?export=download&id=1zw2gHRk6MnQz3d-n194eqGKmTb1w-Q5J"
            tagLink.setAttribute("class", "campo amarelo link ")
            tagLink.target = "_blanck"


            materialArea.append(tagAtividade)
            materialArea.append(tagMateria)
            materialArea.append(tagProfe)
            materialArea.append(tagLink)


        })

    }

    listaMaterial()

})


function baixaArquivo() {
    // Create a reference with an initial file path and name
    var storage = firebase.storage();
    var pathReference = storage.ref('arquivo.pdf');

    // Create a reference from a Google Cloud Storage URI
    var gsReference = storage.refFromURL('gs://escoladolucas-81f7c.appspot.com/material/19-GUERRA-FRIA-2019-LISTA.pdf.googleapis.com/b/bucket/o/images%20stars.jpg')

    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
    var httpsReference = storage.refFromURL('https://gs://escoladolucas-81f7c.appspot.com/material/19-GUERRA-FRIA-2019-LISTA.pdf.googleapis.com/b/bucket/o/images%20stars.jpg');

    storageRef.child('gs://escoladolucas-81f7c.appspot.com/').getDownloadURL().then(function (url) {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // // Or inserted into an <img> element:
        // var img = document.getElementById('myimg');
        // img.src = url;
    }).catch(function (error) {
        // Handle any errors
    });


}


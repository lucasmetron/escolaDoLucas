let listaOcorrencias;


let formatDate = (date) => {
    const splitDate = date.split("-")
    return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
}

db.collection(turma).onSnapshot(snapshot => {
    let tela = document.querySelector("#mostradorAdvertencias");
    tela.innerHTML = `
                    <h4 class="motivo">Motivo</h4>
                    <h4 class="data">Data</h4>
                    <h4 class="b2">Consequência</h4>
                     <h4 class="b3">Assinatura Responsável</h4>`


    async function listaAdvs() {

        await db.collection(turma).doc(matricula).get().then((doc) => {
            listaOcorrencias = doc.data().ocorrencias;

        })


        listaOcorrencias.forEach(item => {
            let data = item.data;

            let advArea = document.querySelector("#mostradorAdvertencias")

            let tagMot = document.createElement("div");
            let tagData = document.createElement("div");
            let tagConse = document.createElement("div");
            let tagLink = document.createElement("a");

            let infoMot = document.createTextNode(item.motivo)
            let infoData = document.createTextNode(formatDate(data))
            let infoConse = document.createTextNode(item.consequencia)
            let infoLink = document.createTextNode("Acesse aqui")


            tagMot.append(infoMot)
            tagMot.setAttribute("id", "campoMotivo")
            tagMot.setAttribute("class", "campo")

            tagData.append(infoData)
            tagData.setAttribute("id", "campoData")
            tagData.setAttribute("class", "campo")

            tagConse.append(infoConse)
            tagConse.setAttribute("id", "campoConsequencia")
            tagConse.setAttribute("class", "campo")

            tagLink.append(infoLink)
            tagLink.href = "https://firebasestorage.googleapis.com/v0/b/escoladolucas-81f7c.appspot.com/o/adv%2Ftermo.docx?alt=media&token=b8ad323e-a58b-40ab-a67c-17f00778166d"
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

function download() {
    let storageRef = firebase.storage().ref();
    // Create a reference with an initial file path and name
    var storage = firebase.storage();
    var pathReference = storage.ref('adv/termo.docx');

    // Create a reference from a Google Cloud Storage URI
    var gsReference = storage.refFromURL('gs://bucket/adv/termo.docx')

    // Create a reference from an HTTPS URL
    // Note that in the URL, characters are URL escaped!
    var httpsReference = storage.refFromURL('gs://escoladolucas-81f7c.appspot.com/adv');

    storageRef.child('adv/termo.docx').getDownloadURL().then(function (url) {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        // Or inserted into an <img> element:
        var img = document.getElementById('myimg');
        img.src = url;
    }).catch(function (error) {
        // Handle any errors


    });
}




















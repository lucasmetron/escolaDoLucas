var firebaseConfig = {
    apiKey: "AIzaSyDXk6wBaQpZ45b2I0w8vUkQpNURPhW_Q6w",
    authDomain: "escoladolucas-81f7c.firebaseapp.com",
    projectId: "escoladolucas-81f7c",
    storageBucket: "escoladolucas-81f7c.appspot.com",
    messagingSenderId: "1087501509532",
    appId: "1:1087501509532:web:38728aa2fd2de513bdde59",
    measurementId: "G-CJ1J9VFDPD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();
let turma = '3a'
let matricula = '17007739'


async function listaNotas() {
    let inforMat = [];
    let inforPort;
    let inforCien;
    let inforGeo;
    let inforHist;

    await db.collection(turma).doc(matricula).get().then(doc => {

        infoMat = doc.data().Matemática;
        infoPort = doc.data().Português;
        infoCien = doc.data().Ciências;
        infoGeo = doc.data().Geografia;
        infoHist = doc.data().História;
    })

    // media(infoMat.bi1.nota, infoMat.bi2.nota, infoMat.bi3.nota, infoMat.bi4.nota);

    document.querySelector("#b1MatNota").innerHTML = infoMat.bi1.nota
    document.querySelector("#b2MatNota").innerHTML = infoMat.bi2.nota
    document.querySelector("#b3MatNota").innerHTML = infoMat.bi3.nota
    document.querySelector("#b4MatNota").innerHTML = infoMat.bi4.nota
    document.querySelector("#matMedia").innerHTML = media(parseFloat(infoMat.bi1.nota), parseFloat(infoMat.bi2.nota), parseFloat(infoMat.bi3.nota), parseFloat(infoMat.bi4.nota));

    document.querySelector("#b1PortNota").innerHTML = infoPort.bi1.nota
    document.querySelector("#b2PortNota").innerHTML = infoPort.bi2.nota
    document.querySelector("#b3PortNota").innerHTML = infoPort.bi3.nota
    document.querySelector("#b4PortNota").innerHTML = infoPort.bi4.nota
    document.querySelector("#portNota").innerHTML = media(parseFloat(infoPort.bi1.nota), parseFloat(infoPort.bi2.nota), parseFloat(infoPort.bi3.nota), parseFloat(infoPort.bi4.nota));

    document.querySelector("#b1CienNota").innerHTML = infoCien.bi1.nota
    document.querySelector("#b2CienNota").innerHTML = infoCien.bi2.nota
    document.querySelector("#b3CienNota").innerHTML = infoCien.bi3.nota
    document.querySelector("#b4CienNota").innerHTML = infoCien.bi4.nota
    document.querySelector("#cienMedia").innerHTML = media(parseFloat(infoCien.bi1.nota), parseFloat(infoCien.bi2.nota), parseFloat(infoCien.bi3.nota), parseFloat(infoCien.bi4.nota));

    document.querySelector("#b1GeoNota").innerHTML = infoGeo.bi1.nota
    document.querySelector("#b2GeoNota").innerHTML = infoGeo.bi2.nota
    document.querySelector("#b3GeoNota").innerHTML = infoGeo.bi3.nota
    document.querySelector("#b4GeoNota").innerHTML = infoGeo.bi4.nota
    document.querySelector("#geoMedia").innerHTML = media(parseFloat(infoGeo.bi1.nota), parseFloat(infoGeo.bi2.nota), parseFloat(infoGeo.bi3.nota), parseFloat(infoGeo.bi4.nota));

    document.querySelector("#b1HistNota").innerHTML = infoHist.bi1.nota
    document.querySelector("#b2HistNota").innerHTML = infoHist.bi2.nota
    document.querySelector("#b3HistNota").innerHTML = infoHist.bi3.nota
    document.querySelector("#b4HistNota").innerHTML = infoHist.bi4.nota
    document.querySelector("#histMedia").innerHTML = media(parseFloat(infoHist.bi1.nota), parseFloat(infoHist.bi2.nota), parseFloat(infoHist.bi3.nota), parseFloat(infoHist.bi4.nota));
}

function media(n1, n2, n3, n4) {
    let resultado = (n1 + n2 + n3 + n4) / 4;
    return resultado.toFixed(2)
}

// console.log(media(6, 7.75, 8.5, 5.1))

listaNotas();


db.collection(turma).onSnapshot( //essa função observa o banco e se algo mudar ela executa automaticamente

    async function listaFaltas() {
        let infoMat;
        let infoPort;
        let infoCien;
        let infoGeo;
        let infoHist;

        await db.collection(turma).doc(matricula).get().then(doc => {

            infoMat = doc.data().Matemática;
            infoPort = doc.data().Português;
            infoCien = doc.data().Ciências;
            infoGeo = doc.data().Geografia;
            infoHist = doc.data().História;
        })

        // console.log(infoMat.bi1.faltas, infoMat.bi2.faltas, infoMat.bi3.faltas, infoMat.bi4.faltas);

        document.querySelector("#b1MatFalta").innerHTML = infoMat.bi1.faltas
        document.querySelector("#b2MatFalta").innerHTML = infoMat.bi2.faltas
        document.querySelector("#b3MatFalta").innerHTML = infoMat.bi3.faltas
        document.querySelector("#b4MatFalta").innerHTML = infoMat.bi4.faltas
        document.querySelector("#matFaltaTotal").innerHTML = soma(parseInt(infoMat.bi1.faltas), parseInt(infoMat.bi2.faltas), parseInt(infoMat.bi3.faltas), parseInt(infoMat.bi4.faltas));

        document.querySelector("#b1PortFalta").innerHTML = infoPort.bi1.faltas
        document.querySelector("#b2PortFalta").innerHTML = infoPort.bi2.faltas
        document.querySelector("#b3PortFalta").innerHTML = infoPort.bi3.faltas
        document.querySelector("#b4PortFalta").innerHTML = infoPort.bi4.faltas
        document.querySelector("#portFaltaTotal").innerHTML = soma(parseInt(infoPort.bi1.faltas), parseInt(infoPort.bi2.faltas), parseInt(infoPort.bi3.faltas), parseInt(infoPort.bi4.faltas));

        document.querySelector("#b1CienFalta").innerHTML = infoCien.bi1.faltas
        document.querySelector("#b2CienFalta").innerHTML = infoCien.bi2.faltas
        document.querySelector("#b3CienFalta").innerHTML = infoCien.bi3.faltas
        document.querySelector("#b4CienFalta").innerHTML = infoCien.bi4.faltas
        document.querySelector("#cienFaltaTotal").innerHTML = soma(parseInt(infoCien.bi1.faltas), parseInt(infoCien.bi2.faltas), parseInt(infoCien.bi3.faltas), parseInt(infoCien.bi4.faltas));

        document.querySelector("#b1GeoFalta").innerHTML = infoGeo.bi1.faltas
        document.querySelector("#b2GeoFalta").innerHTML = infoGeo.bi2.faltas
        document.querySelector("#b3GeoFalta").innerHTML = infoGeo.bi3.faltas
        document.querySelector("#b4GeoFalta").innerHTML = infoGeo.bi4.faltas
        document.querySelector("#geoFaltaTotal").innerHTML = soma(parseInt(infoGeo.bi1.faltas), parseInt(infoGeo.bi2.faltas), parseInt(infoGeo.bi3.faltas), parseInt(infoGeo.bi4.faltas));

        document.querySelector("#b1HistFalta").innerHTML = infoHist.bi1.faltas
        document.querySelector("#b2HistFalta").innerHTML = infoHist.bi2.faltas
        document.querySelector("#b3HistFalta").innerHTML = infoHist.bi3.faltas
        document.querySelector("#b4HistFalta").innerHTML = infoHist.bi4.faltas
        document.querySelector("#histFaltaTotal").innerHTML = soma(parseInt(infoHist.bi1.faltas), parseInt(infoHist.bi2.faltas), parseInt(infoHist.bi3.faltas), parseInt(infoHist.bi4.faltas));
    }

)



function soma(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4;
}


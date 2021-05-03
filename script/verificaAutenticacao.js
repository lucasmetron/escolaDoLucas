let logado = false
let user;

if (localStorage.getItem("acesso") == "true") {
    logado = true;
}
else if (logado != true) {
    alert("Você não está autenticado!");
    window.location.href = "../index.html";
}

function deslogar() {
    localStorage.setItem("acesso", false)
}

function infoCap() {
    user = document.querySelector("#usuario").value
    console.log(user)
}

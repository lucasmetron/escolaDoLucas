let logado = false

if (localStorage.getItem("acesso") == "true") {
    logado = true;
    console.log("entrou")
} else if (logado != true) {
    alert("Você não está autenticado!");
    window.location.href = "../index.html";
}

function deslogar() {
    localStorage.setItem("acesso", false)
}

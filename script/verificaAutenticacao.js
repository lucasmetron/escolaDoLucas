let logado = false
let user;
let lucas = 'lucas.rosa'
let ricardo = 'ricardo.oliveira'

if (localStorage.getItem("acesso") == "true") {
    logado = true;
}
else if (logado != true) {
    alert("Você não está autenticado!");
    window.location.href = "../index.html";
}

function deslogar() {
    localStorage.setItem(lucas, false)
    localStorage.setItem(ricardo, false)
}

function infoCap() {
    user = document.querySelector("#usuario").value
    console.log(user)
}

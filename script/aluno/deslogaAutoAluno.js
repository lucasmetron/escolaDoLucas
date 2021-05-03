function deslogar() {
    localStorage.setItem("acesso", false)
}

setTimeout(() => {
    deslogar();
}, 1000)

// Isto foi feito para não permitir alterar para o usuario professor após logar como aluno
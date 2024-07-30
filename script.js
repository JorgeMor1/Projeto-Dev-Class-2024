let nomeUsuario = prompt("Olá, porfavor, digite seu nome");
let nomeDigitado = document.getElementsByClassName('primeiro_texto');
if (nomeDigitado.length > 0) {
    nomeDigitado[0].innerHTML = `Olá, ${nomeUsuario} ! <br> Seja bem-vindo ao Dev Class 2024!!!`;

}
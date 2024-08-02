function digitarTexto(elemento, texto, velocidade) {
    let i = 0;
    function escrever() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escrever, velocidade);
        }
    }
    escrever();
}

let nomeUsuario = prompt("Olá, por favor, digite seu nome");
let nomeDigitado = document.getElementsByClassName('primeiro_texto');

// Verificar se tem pelo menos um elemento 
if (nomeDigitado.length > 0) {
    let texto = `Olá, ${nomeUsuario}! Seja bem-vindo ao Dev Class 2024!!!`;
    nomeDigitado[0].style.color = 'black';
    // Efeito de digitação
    digitarTexto(nomeDigitado[0], texto, 100); 
}



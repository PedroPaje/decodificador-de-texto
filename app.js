const textoEntrada = document.getElementById("texto-entrada");
const textoSaida = document.getElementById("texto-saida");
const botaoCopiar = document.getElementById("botao-copiar");

const criptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];

function acaoCriptografar() {
    let mensagemCriptografada = criptografar(textoEntrada.value);
    textoSaida.value = mensagemCriptografada;
    botaoCopiar.disabled = textoSaida.value == "";
}

function acaoDescriptografar() {

}

function acaoCopiar() {

}

function criptografar(entrada) {
    let saida = entrada;
    criptografia.forEach(elemento => {
        saida = saida.replaceAll(elemento[0], elemento[1]);
    });
    return saida;
}
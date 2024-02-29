// Constantes
const mensagemErro = document.getElementById("mensagem-erro");
const textoEntrada = document.getElementById("texto-entrada");
const textoSaida = document.getElementById("texto-saida");
const botaoCopiar = document.getElementById("botao-copiar");
const checkboxTema = document.getElementById("checkbox-tema");

const criptografia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];

// Variaveis
var tema = window.localStorage.getItem("theme");

// Inicializacao
if (tema == "dark") {
    checkboxTema.checked = true;
    document.body.classList.add("dark");
} else {
    checkboxTema.checked = false;
    document.body.classList.remove("dark");
}

// Funcoes
function acaoCriptografar() {
    var regExp = /^[a-z]*$/g;
    if (textoEntrada.value == "") {
        mensagemErro.innerText = "! Insira uma mensagem para ser criptografada";
        return;
    } else if (!regExp.test(textoEntrada.value)) {
        mensagemErro.innerText = "! Insira apenas letras minúsculas e sem acento";
        return;
    }

    let mensagemCriptografada = criptografar(textoEntrada.value);
    textoSaida.value = mensagemCriptografada;
    botaoCopiar.disabled = textoSaida.value == "";
    mensagemErro.innerText = "";
}

function acaoDescriptografar() {
    var regExp = /^[a-z]*$/g;
    if (textoEntrada.value == "") {
        mensagemErro.innerText = "! Insira uma mensagem para ser descriptografada";
        return;
    } else if (!regExp.test(textoEntrada.value)) {
        mensagemErro.innerText = "! Insira apenas letras minúsculas e sem acento";
        return;
    }

    let mensagemDescriptografada = descriptografar(textoEntrada.value);
    textoSaida.value = mensagemDescriptografada;
    botaoCopiar.disabled = textoSaida.value == "";
    mensagemErro.innerText = "";
}

function acaoCopiar() {
    textoSaida.select();
    textoSaida.setSelectionRange(0, 99999);
    let textoCopiar = textoSaida.value;
    navigator.clipboard.writeText(textoCopiar);
}

function criptografar(entrada) {
    let saida = entrada;
    criptografia.forEach(elemento => {
        saida = saida.replaceAll(elemento[0], elemento[1]);
    });
    return saida;
}

function descriptografar(entrada) {
    let saida = entrada;
    criptografia.forEach(elemento => {
        saida = saida.replaceAll(elemento[1], elemento[0]);
    });
    return saida;
}

// Listeners
checkboxTema.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        document.body.classList.add("dark");
        tema = "dark";
        window.localStorage.setItem("theme", tema);
    } else {
        document.body.classList.remove("dark");
        tema = "light";
        window.localStorage.setItem("theme", tema);
    }
})
const textArea = document.querySelector(".areatexto");
const mensaje = document.querySelector(".mensaje");
const btnEncriptar = document.querySelector(".btn_encriptar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");
const btnCopiar = document.querySelector(".copiar");

mensaje.addEventListener("input", function() {
    if (mensaje.value !== "") {
        mensaje.removeAttribute("style");
    } else {
        mensaje.style.backgroundImage = "url('../assets/Muñeco.png')";
    }
});

function tieneMayusculasOAcentos(texto) {
    const regex = /[A-ZÁÉÍÓÚáéíóú]/; // 
    return regex.test(texto);
}

function encriptarTexto(texto) {
    if (!texto) return ""; // Devuelve un string vacío si el texto está vacío
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptarTexto(texto) {
    if (!texto) return ""; // Devuelve un string vacío si el texto está vacío
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}

btnEncriptar.addEventListener("click", function() {
    const texto = textArea.value.trim().toLowerCase(); // Agregué toLowerCase() para convertir a minúsculas
    if (!texto) {
        alert("Error: Debes ingresar un texto para encriptar");
    } else if (tieneMayusculasOAcentos(texto)) {
        alert("Error: No puedes utilizar mayúsculas o palabras con Acento");
    } else {
        const textoEncriptado = encriptarTexto(texto);
        mensaje.value = textoEncriptado;
        mensaje.removeAttribute("style");
    }
});

btnDesencriptar.addEventListener("click", function() {
    const texto = mensaje.value.trim(); // Agregué trim() para eliminar espacios en blanco
    if (!texto) {
        alert("Error: Debes ingresar un texto para desencriptar");
    } else {
        const textoDesencriptado = desencriptarTexto(texto);
        mensaje.value = textoDesencriptado;
        mensaje.removeAttribute("style");
    }
});

btnCopiar.addEventListener("click", function() {
    mensaje.select();
    try {
        document.execCommand("copy");
    } catch (error) {
        alert("Error: No se pudo copiar el texto al portapapeles");
    }
});
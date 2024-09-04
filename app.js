const cripto = new Map([
    ['a', "ai"],
    ['e', "enter"],
    ['i', "imes"],
    ['o', "ober"],
    ['u', "ufat"]
])

const vereficarMaiuscula = /[A-Z]/;
const vereficarAcento = /[\xC0-\xFF]/;

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        document.getElementById("mensagem__inicial").style.display = "flex";
    }
}

function verificarString(text) {
    if (!text.match(vereficarAcento) && !text.match(vereficarMaiuscula)) {
        return 1;
    }
    alert("Texto inválido!\nVerificar se não há acentos e/ou maiúsculas.");
    return -1;
}

function criptografar() {
    const text = document.getElementById("input__texto").value;
    if (verificarString(text) < 0) {
        return null;
    } else {
        let newText = "";
        for (const char of text) {
        if (cripto.has(char)) {
            newText+=cripto.get(char);
        } else{
            newText+=char;
        }
        }
        document.getElementById("resultado__texto").value = newText;
        document.getElementById("mensagem__inicial").style.display = "none";
        document.getElementById("resultado__texto").style.display = "block";
    }
    
}

function descriptografar() {
    let text = document.getElementById("input__texto").value;
    if (verificarString(text) < 0) {
        return null;
    } else {
        cripto.forEach (function(value, key) {
            text = text.replaceAll(value, key);
        })
        document.getElementById("resultado__texto").value = text;
        document.getElementById("mensagem__inicial").style.display = "none";
        document.getElementById("resultado__texto").style.display = "block";
    }
}
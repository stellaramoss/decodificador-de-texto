const textArea = document.querySelector(".campo__textarea");
const mensagem = document.querySelector(".campo__mensagem");


function criptografar(stringCriptografada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    
    return stringCriptografada;
}


function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = '';
    mensagem.style.backgroundImage = 'none';
    mensagem.style.textAlign = 'left'
}


function descriptografar(stringDescriptografada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    
    return stringDescriptografada;
}


function botaoDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = '';
    mensagem.style.backgroundImage = 'none';
    mensagem.style.textAlign = 'left'
}


function botaoCopiar() {
    let copiarTexto = document.querySelector(".campo__mensagem");
    copiarTexto.select();
    document.execCommand("copy");
  }
  
document.querySelector("#copy").addEventListener("click", copy);
  
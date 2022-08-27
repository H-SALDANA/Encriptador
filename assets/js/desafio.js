
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"
var imagen = document.getElementById("#munheco");


btnEncriptar.onclick()= eliminarElemento(munheco);

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage="none"      
    inputTexto.value = ""
    btnCopy.style.display = "block"
    
    function desapareceImagen(imagen){

        document.getElementById("munheco").style.display = "none";
        
        return console.log("elemento removido")
    }
    desapareceImagen(imagen);
    

}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;

        
}

// desencriptar mensaje
 
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado
    mensaje.style.backgroundImage="none"
    inputTexto.value = ""
    btnCopy.style.display = "block"

    function apareceImagen(imagen){

        document.getElementById("munheco").style.display = "block";
        
        return console.log("elemento aparece")
    }
    apareceImagen(imagen);

}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober","o"], ["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringDesencriptada;

    
}

// boton copiar

function btncopiar(){
mensaje.select();
navigator.clipboard.writeText(mensaje.value) 

mensaje.value = ""
// alert("texto copiado")


}















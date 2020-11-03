import cipher from './cipher.js';

function Criptografarmsg(event) { 
    event.preventDefault()
    const textcrypto = document.getElementById("textcrypto").value;
    const cryptoffset = parseInt(document.getElementById ("cryptoffset")).value;
    const resultcrypto = document.getElementById("resultcrypto");
 for (let i=0; i<=textcrypto.length;1++) {
     
 }

}

function Decriptografar(event) { 
    event.preventDefault()
    const textdecrypto = document.getElementById("textdecrypto").value;
    const cryptoffset = parseInt(document.getElementById ("decryptoffset")).value;
    const resultdecrypto = document.getElementById("resultdecrypto");
}


//botão para Criptografar. 
let btn = document.getElementById("submit1")
btn.addEventListener('click', textcrypto);


//botão para Descriptografar 
let btn = document.getElementById("submit2")
btn2.addEventListener('click', textdecrypto);

document.getElementById()


console.log(cipher);

import cipher from './cipher.js';

//botão para Criptografar. 
let button1 = document.getElementById("btncrypto")
button1.addEventListener("click", function(evt) {
   evt.preventDefault()
   let textcrypto = document.getElementById("cxmensagem").value;
   let cryptoffset = Number(document.getElementById("number-offset").value);
   let textcryptostr =textcrypto.toString().toUpperCase();
   document.getElementById("cxmensagem").value = cipher.encode(cryptoffset,textcryptostr)
  

} );



//botão para Descriptografar 
let button2 = document.getElementById("btndecrypto")
button2.addEventListener("click", function(evt) {
    evt.preventDefault()
    let textdecrypto = document.getElementById("cxmensagem").value;
    let decryptoffset = Number(document.getElementById ("number-offset").value);
    let textdecryptostr = textdecrypto.toString().toUpperCase();
    document.getElementById("cxmensagem").value = cipher.decode(decryptoffset,textdecryptostr)
 

} );


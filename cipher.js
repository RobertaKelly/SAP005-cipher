const cipher = {
 
//variavel para percorer cada carcteries do texto 
// Manipular letra Maiuscula 
  encode(offset,textcrypto) {
    let resultado = '' 
    for (let i=0; i < textcrypto.length; i++) {    
    let codigo = textcrypto.charCodeAt(i);
    if ( (codigo >= 65 && codigo <= 90)) {
    var novocodigo =((codigo - 65 + offset)% 26 + 65)
    resultado += String.fromCharCode(novocodigo); 
    } 
     else {
      resultado += String.fromCharCode(codigo);
    }
  
   
    }
    return resultado;
  },
 
  decode(offset,textdecrypto) {
    let resultado = ''
    for (let i=0; i < textdecrypto.length; i++) {    
    let codigo = textdecrypto.charCodeAt(i);
    if ( (codigo >= 65 && codigo <= 90)) {
    var novocodigo = ((codigo - 90 - offset)% 26 +90)
    resultado += String.fromCharCode(novocodigo); 
    } 
     else {
      resultado += String.fromCharCode(codigo);
    }
  
   
    }
    return resultado; 
  }
 };

    
    
  
export default cipher;


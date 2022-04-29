

function regla(x) {
    switch(x) {
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'a': return 'ai';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default : return x;
    }
  }
  
  function codificar(s) {
    var txtCod = '';
    for (const c of s) {
        txtCod += regla(c);
    }
    document.getElementById("neneLupa").style.display = "none";
    document.getElementById("textoDerecha").innerHTML = txtCod;
    document.getElementById("textoAbajo").style.display = "none";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    
  }

  function decodificar(s) {
    var txtDec = '';
    for (var j = 0; j < s.length;j++) {
      switch(s[j]) {
      case 'e': 
        if (s[j + 4] === 'r') { txtDec += 'e'; j += 4; }
        else { return false; }
        break;
      case 'i': 
        if (s[j + 3] === 's') { txtDec += 'i'; j += 3; }
        else { return false; }
        break;
      case 'a': 
        if (s[j + 1] === 'i') { txtDec += 'a'; j += 1; }
        else { return false; }
        break;
      case 'o': 
        if (s[j + 3] === 'r') { txtDec += 'o'; j += 3; }
        else { return false; }
        break;
      case 'u': 
        if (s[j + 3] === 't') { txtDec += 'u'; j += 3; }
        else { return false; }
        break;
      default:
        txtDec += s[j];
      }
    }
    
    document.getElementById("neneLupa").style.display = "none";
    document.getElementById("textoDerecha").innerHTML = txtDec;
    document.getElementById("textoAbajo").style.display = "none";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
  }

  function copiarAlPortapapeles(textoDerecha) {
  var aux = document.createElement("input");  //crear elemento nuevo vacio
  aux.setAttribute("value", document.getElementById('textoDerecha').innerHTML); //se le asigna el valor del texto a copiar
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  document.getElementById("botonCopiar").textContent = "Copiado!";

  }
  

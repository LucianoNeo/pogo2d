function random(min,max) {
    const floatRandom = Math.random()
    const difference = max - min
    const rand = Math.floor(difference * floatRandom)
    const randomAboveMin = rand + min
    return randomAboveMin
    
}

function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  };

function createText() {
    const tela = document.getElementById('tela')
    var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
//   var divAtual = document.getElementById("tela");
//   document.body.insertBefore(divNova, divAtual);
    
}

function Utils() {
    return{
        random,
        leftPad,
        createText
    }
    
}




export default Utils
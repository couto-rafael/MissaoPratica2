function add() {
  //Capturar o campo de entrada
  var inputValue = document.getElementById("valor");

  //Capturar a lista
  var valueList = document.getElementById("valores");

  //Criar variável node com li
  var node = document.createElement("li");

  //Definir um nó de texto
  var textNode = document.createTextNode(inputValue.value);
  node.appendChild(textNode);

  //Adicionar elemento a lista
  valueList.appendChild(node);

  //Limpando o campo de entrada
  inputValue.value = "";
}

function ordenar() {}

function misturar() {}

const swap = (vetor, position1, position2) => {
  [vetor[position1], vetor[position2]] = [vetor[position2], vetor[position1]];
};

const shuffle = (vetor, numberOfSwaps) => {
  for (let i = 0; i < numberOfSwaps; i++) {
    const indexRandom1 = Math.floor(Math.random() * vetor.length);
    const indexRandom2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, indexRandom1, indexRandom2);
  }
};

const bubble_sort = (vetor) => {
  const leng = vetor.length;
  for (let i = 0; i < leng - 1; i++) {
    for (let x = 0; x < leng - i - 1; x++) {
      if (vetor[x] > vetor[x + 1]) {
        swap(vetor, x, x + 1);
      }
    }
  }
};

const selection_sort = (vetor) => {
  const leng = vetor.length;
  for (let i = 0; i < leng - 1; i++) {
    let minimumIndex = i;
    for (let x = i + 1; x < leng; x++) {
      if (vetor[x] < vetor[minimumIndex]) {
        minimumIndex = x;
      }
    }
    if (minimumIndex !== i) {
      swap(vetor, i, minimumIndex);
    }
  }
  return vetor;
};

const quick_sort = (vetor, start, end) => {
  if (start < end) {
    const indexPivot = particionamento(vetor, start, end);
    quick_sort(vetor, start, indexPivot - 1);
    quick_sort(vetor, indexPivot + 1, end);
  }
};

const particionamento = (vetor, start, end) => {
  const pivot = vetor[end];
  let i = start - 1;

  for (let x = start; x < end; x++) {
    if (vetor[x] < pivot) {
      i++;
      swap(vetor, i, x);
    }
  }

  swap(vetor, i + 1, end);
  return i + 1;
};

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

function ordenar() {
  //Capturar a lista
  var valueList = document.getElementById("valores");
  var selectionList = document.getElementById("algoritmo");

  //cada nó da lista de valores e adicionar
  var valoresVetor = Array.from(valueList.children).map((item) =>
    parseInt(item.innerHTML)
  );

  //Escolher o algoritmo
  var algoritmoSelecionado =
    selectionList.options[selectionList.selectedIndex].value;

  if (algoritmoSelecionado === "bubble-sort") {
    bubble_sort(valoresVetor);
  } else if (algoritmoSelecionado === "selection-sort") {
    selection_sort(valoresVetor);
  } else if (algoritmoSelecionado === "quick-sort") {
    quick_sort(valoresVetor, 0, valoresVetor.length - 1);
  }

  //Map e Reduce para novos itens
  const newItens = valoresVetor
    .map((valor) => `<li>${valor}</li>`)
    .reduce((acc, item) => acc + item, "");

  //Substituir o conteúdo da lista - innerHTML
  valueList.innerHTML = newItens;
}

function misturar() {
  //Capturar a lista
  var valueList = document.getElementById("valores");

  //cada nó da lista de valores e adicionar
  var valoresVetor = Array.from(valueList.children).map((item) =>
    parseInt(item.innerHTML)
  );

  //Aplicar shuffle
  shuffle(valoresVetor, 9);

  //Map e Reduce
  const newItens = valoresVetor
    .map((valor) => `<li>${valor}</li>`)
    .reduce((acc, item) => acc + item, "");

  //Substituir o conteúdo
  valueList.innerHTML = newItens;
}

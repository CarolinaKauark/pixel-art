const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');
const boardGenerator = document.getElementById('generate-board');

// criando cor
function createColor() {
  const num1 = Math.ceil(Math.random() * 255);
  const num2 = Math.ceil(Math.random() * 255);
  const num3 = Math.ceil(Math.random() * 255);
  return 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')';
}

// criando paleta de cor
function createPalette(cor) {
  const elementPalette = document.createElement('div');
  elementPalette.className = 'color';
  elementPalette.style.backgroundColor = cor;

  palette.appendChild(elementPalette);
}

createPalette('black');
createPalette(createColor());
createPalette(createColor());
createPalette(createColor());

// criando o board
function createPixels() {
  // const sizeString = document.getElementById('board-size');
  // const size = sizeString.value;
  for (let index = 0; index < 5; index += 1) {
    const pixelSection = document.createElement('section');
    pixelSection.className = 'pixel-section';
    board.appendChild(pixelSection);
    const arrPixel = document.getElementsByClassName('pixel-section');

    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      arrPixel[index].appendChild(pixel);
    }
  }
}

createPixels();

// colocando o primeiro elemento como selected
function firstOneSelected() {
  const firstColor = document.getElementsByClassName('color')[0];
  firstColor.classList.add('selected');
}

firstOneSelected();

// criando o seletor de cor
function selectedColor(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

palette.addEventListener('click', selectedColor);

// função que pinta os pixels
function paint(event) {
  const colorToPaint = document.querySelector('.selected');
  event.target.style.backgroundColor = colorToPaint.style.backgroundColor;
}

board.addEventListener('click', paint);

// função que limpar o quadro
function clearBoard() {
  const arrClassPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < arrClassPixel.length; index += 1) {
    arrClassPixel[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clearBoard);

function removePixelBoard() {
  const arr = document.querySelectorAll('.pixel-section');
  for (let index = 0; index < arr.length; index += 1) {
    const sectionASerDeletado = document.querySelector('.pixel-section');
    sectionASerDeletado.remove();
  }
}

function createNewPixelBoard() {
  const sizeString = document.getElementById('board-size');
  let size = sizeString.value;
  if (size < 5) { size = 5; } else if (size > 50) { size = 50; }

  for (let index = 0; index < size; index += 1) {
    const pixelSection = document.createElement('section');
    pixelSection.className = 'pixel-section';
    board.appendChild(pixelSection);
    const arrPixel = document.getElementsByClassName('pixel-section');

    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      arrPixel[index].appendChild(pixel);
    }
  }
}

function changePixelBoard() {
  if (!document.getElementById('board-size').value) {
    alert('Board inválido!');
  }
  removePixelBoard();
  createNewPixelBoard();
}

boardGenerator.addEventListener('click', changePixelBoard);

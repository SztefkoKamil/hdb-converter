import { hexToDec, decToHex, binToDec, decToBin, binToHex, hexToBin } from './converter.js';

window.addEventListener('load', () => {
  const input = document.querySelector('#hdb-input');
  const output = document.querySelector('#hdb-output');
  const inputBtn = document.querySelector('.input-btn');
  const inputItems = [...document.querySelectorAll('.input-item')];
  const outputBtn = document.querySelector('.output-btn');
  const outputItems = [...document.querySelectorAll('.output-item')];
  const outputHex = document.querySelector('#output-hex');
  const outputDec = document.querySelector('#output-dec');
  const outputBin = document.querySelector('#output-bin');
  const form = document.querySelector('#form');

  let inputType = 'HEX';
  let outputType = 'DEC';
  input.value = '';
  output.value = '';

  inputItems.map(item => {
    item.addEventListener('click', inputItemClickHandler);
  });

  outputItems.map(item => {
    item.addEventListener('click', outputItemClickHandler);
  });

  form.addEventListener('submit', formSubmitHandler);

  function inputItemClickHandler(e) {
    const type = e.target.textContent;
    inputBtn.textContent = type;
    inputType = type;
    if (inputType === outputType) changeOutputType(inputType);
    input.value = '';
    output.value = '';
  }

  function outputItemClickHandler(e) {
    const type = e.target.textContent;
    if (inputType !== type) {
      outputBtn.textContent = type;
      outputType = type;
      output.value = '';
    }
  }

  function changeOutputType(inputType) {
    outputItems.map(i => {
      i.classList.remove('disabled');
    });
    if (inputType === 'HEX') {
      outputType = 'DEC';
      outputBtn.textContent = 'DEC';
      outputHex.classList.add('disabled');
    } else if (inputType === 'DEC') {
      outputType = 'BIN';
      outputBtn.textContent = 'BIN';
      outputDec.classList.add('disabled');
    } else if (inputType === 'BIN') {
      outputType = 'HEX';
      outputBtn.textContent = 'HEX';
      outputBin.classList.add('disabled');
    }
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    if (inputType === 'HEX' && outputType === 'DEC') output.value = hexToDec(input.value);
    else if (inputType === 'DEC' && outputType === 'HEX') output.value = decToHex(input.value);
    else if (inputType === 'BIN' && outputType === 'DEC') output.value = binToDec(input.value);
    else if (inputType === 'DEC' && outputType === 'BIN') output.value = decToBin(input.value);
    else if (inputType === 'BIN' && outputType === 'HEX') output.value = binToHex(input.value);
    else if (inputType === 'HEX' && outputType === 'BIN') output.value = hexToBin(input.value);
  }
});

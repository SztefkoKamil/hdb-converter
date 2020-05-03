import { hexToDec, decToHex, binToDec, decToBin, binToHex, hexToBin } from './converter.js';

window.addEventListener('load', () => {
  const input = document.querySelector('#hdb-input');
  const output = document.querySelector('#hdb-output');

  const inputBtn = document.querySelector('.input-btn');
  const inputItems = [...document.querySelectorAll('.input-item')];

  const outputBtn = document.querySelector('.output-btn');
  const outputItems = [...document.querySelectorAll('.output-item')];
  const outputHex = document.getElementById('output-hex');
  const outputDec = document.getElementById('output-dec');
  const outputBin = document.getElementById('output-bin');

  const form = document.querySelector('#form');

  let inputType = 'HEX';
  let outputType = 'DEC';
  input.value = '';
  output.value = '';

  inputItems.map(item => {
    item.addEventListener('click', e => {
      const type = e.target.textContent;
      inputBtn.textContent = type;
      inputType = type;
      if (inputType === outputType) changeOutputType(inputType);
    });
  });

  outputItems.map(item => {
    item.addEventListener('click', e => {
      const type = e.target.textContent;
      if (inputType !== type) {
        outputBtn.textContent = type;
        outputType = type;
      }
    });
  });

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

  form.addEventListener('submit', e => {
    e.preventDefault();

    let result = null;

    if (inputType === 'HEX' && outputType === 'DEC') {
      result = hexToDec(input.value);
    } else if (inputType === 'DEC' && outputType === 'HEX') {
      result = decToHex(input.value);
    } else if (inputType === 'BIN' && outputType === 'DEC') {
      result = binToDec(input.value);
    } else if (inputType === 'DEC' && outputType === 'BIN') {
      result = decToBin(input.value);
    } else if (inputType === 'BIN' && outputType === 'HEX') {
      result = binToHex(input.value);
    } else if (inputType === 'HEX' && outputType === 'BIN') {
      result = hexToBin(input.value);
    }

    output.value = result;
  });
});

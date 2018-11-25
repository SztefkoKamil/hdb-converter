window.onload = () => {
  const input = document.getElementById('hdb-input');
  const output = document.getElementById('hdb-output');
  const inputSelect = document.getElementById('hdb-input-select');
  const outputSelect = document.getElementById('hdb-output-select');
  const optionHex = document.getElementById('option-hex');
  const optionDec = document.getElementById('option-dec');
  const optionBin = document.getElementById('option-bin');
  const options = [optionHex, optionDec, optionBin];
  const convertButton = document.getElementById('convertButton');

  input.value = '';
  output.value = '';
  inputSelect.value = 'hex';
  outputSelect.value = 'dec';
  optionHex.setAttribute('disabled', 'disabled');

  inputSelect.onchange = () => {
    for(let i of options){
      i.removeAttribute('disabled');
    }
    
    if(inputSelect.value === 'hex'){ optionHex.setAttribute('disabled', 'disabled') }
    else if(inputSelect.value === 'dec'){ optionDec.setAttribute('disabled', 'disabled') }
    else if(inputSelect.value === 'bin'){ optionBin.setAttribute('disabled', 'disabled') }
  }

  convertButton.onclick = () => {
    const inputType = inputSelect.value;
    const outputType = outputSelect.value;

    let result = null;

    if(inputType === 'hex' && outputType === 'dec'){ result = hexToDec(input.value); }
    else if(inputType === 'dec' && outputType === 'hex'){ result = decToHex(input.value); }
    else if(inputType === 'bin' && outputType === 'dec'){ result = binToDec(input.value); }
    else if(inputType === 'dec' && outputType === 'bin'){ result = decToBin(input.value); }
    else if(inputType === 'bin' && outputType === 'hex'){ result = binToHex(input.value); }
    else if(inputType === 'hex' && outputType === 'bin'){ result = hexToBin(input.value); }

    output.value = result;
  }

}

function hexToDec(input){
  if(/^[0-9abcdef]+$/.test(input)){
    const toBin = hexToBin(input);
    const result = binToDec(toBin);

    return result;
  }
  else {
    return 'WRONG INPUT';
  }
}

function decToHex(input){
  if(/^[0-9]+$/.test(input)){
    const toBin = decToBin(input);
    const result = binToHex(toBin);

    return result;
  }
  else {
    return 'WRONG INPUT';
  }
}

function binToDec(input){
  if(/^[01]+$/.test(input)){
    let bin = input;

    const lenght = bin.length;
    let weight = [];
    let w = 1;
    let result = 0;
      
    if(lenght==1 && bin==1){ return 1; }
    else if(lenght==1 && bin==0){ return 0; }
      
    weight.unshift(w);
      
    for(let i=1; i<lenght; i++){
      w *= 2;
      weight.unshift(w);
    }
    
    for(let i=0; i<lenght; i++){
      if(bin[i]==1){
      result += weight[i];
      }
    }  
    
    return result;
  }
  else {
    return 'WRONG INPUT';
  }
}

function decToBin(input){
  if(/^[0-9]+$/.test(input)){
    let dec = input;

    let weight = 1;
    let turn = 0;

    while(true){
      turn++;
      weight *= 2;
      if(weight > dec){
        weight /= 2;
        break;
      }
    }

    let result = [];

    while(turn > 0){
      turn--;
      if(weight > dec){
        result.push('0');
        weight /= 2;
      }
      else {
        result.push('1');
        dec -= weight;
        weight /= 2;
      }

    }

    while(!(result.length % 4 == 0)){
      result.unshift('0');
    }

    result = result.join('');
    return result;
  }
  else {
    return 'WRONG INPUT';
  }
}

function binToHex(input){
  if(/^[01]+$/.test(input)){
    const dividedBin = input.toString().split('');

    while(!(dividedBin.length % 4 == 0)){
      dividedBin.unshift('0');
    }
    let group = [];
    const groupedBin = [];
    
    for(let i = dividedBin.length-1; i>=0; i--){
      group.unshift(dividedBin[i]);
      if(group.length === 4){
        groupedBin.unshift(group.join(''));
        group = [];
      }
    }

    return groupedBin.reduce((a, x) => {
      if(x === '1111'){ return a += 'f'; }
      else if(x === '1110'){ return a += 'e'; }
      else if(x === '1101'){ return a += 'd'; }
      else if(x === '1100'){ return a += 'c'; }
      else if(x === '1011'){ return a += 'b'; }
      else if(x === '1010'){ return a += 'a'; }
      else if(x === '1001'){ return a += '9'; }
      else if(x === '1000'){ return a += '8'; }
      else if(x === '0111'){ return a += '7'; }
      else if(x === '0110'){ return a += '6'; }
      else if(x === '0101'){ return a += '5'; }
      else if(x === '0100'){ return a += '4'; }
      else if(x === '0011'){ return a += '3'; }
      else if(x === '0010'){ return a += '2'; }
      else if(x === '0001'){ return a += '1'; }
      else if(x === '0000'){ return a += '0'; }
    },'');
  }
  else {
    return 'WRONG INPUT';
  }
}

function hexToBin(input){
  input = input.toString().toLowerCase();
  if(/^[0-9abcdef]+$/.test(input)){
    const dividedHex = input.split('');

    return dividedHex.reduce((a, x) => {
      if(x === 'f'){ return a += '1111'; }
      else if(x === 'e' ){ return a += '1110'}
      else if(x === 'd' ){ return a += '1101'}
      else if(x === 'c' ){ return a += '1100'}
      else if(x === 'b' ){ return a += '1011'}
      else if(x === 'a' ){ return a += '1010'}
      else if(x === '9' ){ return a += '1001'}
      else if(x === '8' ){ return a += '1000'}
      else if(x === '7' ){ return a += '0111'}
      else if(x === '6' ){ return a += '0110'}
      else if(x === '5' ){ return a += '0101'}
      else if(x === '4' ){ return a += '0100'}
      else if(x === '3' ){ return a += '0011'}
      else if(x === '2' ){ return a += '0010'}
      else if(x === '1' ){ return a += '0001'}
      else { return a += '0000'}
    },'');
  }
  else {
    return 'WRONG INPUT';
  }
}

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
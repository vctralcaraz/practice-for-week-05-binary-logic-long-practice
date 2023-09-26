// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const binaryToAscii = str => {
  // Your code here
  const letters = binaryStringToArray(str);
  let ascii = '';

  for(let i = 0; i < letters.length; i++) {
    let sum = 0;
    let char = letters[i].split('').reverse().join('');

    for(let j = 0; j < char.length; j++) {
      let el = char[j];

      if(el === '1') {
        sum += (2 ** j);
      }
    }

    ascii += String.fromCharCode(sum);

  }
  
  return ascii;

};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
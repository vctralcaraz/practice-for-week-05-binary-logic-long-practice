// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  const base = str[1];  // get the base indicator
  const reversed = str.split('').reverse().join('');  // split the str into an array, reverse it
  let sum = 0;

  // get base
  if(base === 'b') {  // if binary
    
    for(let i = 0; i < reversed.length - 1; i++) {
      let el = reversed[i];

      if(el === '1') {
        sum += (2 ** i);
      }
    }

  } else if(base === 'x') {  // if hexadecimal

    for(let i = 0; i < reversed.length - 1; i++) {
      let el = reversed[i];

      if(el >= '0' && el <= '9') {  // if the element is a number

        sum += (16 ** i) * Number(el);
      } else if(el >= 'a' && el <= 'f') {  // if the element is a letter
        
        sum += (16 ** i) * (el.charCodeAt(0) - 87);
      }
    }

  }

  return sum;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
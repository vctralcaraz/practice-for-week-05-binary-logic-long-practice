// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  // Your code here
  if(typeof element === 'number') {  // if decimal

    let remainder;
    let str = '';
    let base;

    while (element > 0) {  // O(n)
      base = 2;  // set base number
      remainder = element % base;  // get remainder
      str += `${remainder}`;  // set string remainder to str

      element = Math.floor(element / base);  // get new element by dividing by base without remainder
    }

    return '0b' + str.split('').reverse().join('');  // return binary number

  } else if(element[1] === 'x') {  // if hexadecimal
    
    const reversed = element.split('').reverse().join('');  // split the element into an array, reversed
    let str = '';

    for(let i = 0; i < reversed.length - 2; i++) {  // O(n)
      let el = reversed[i];

      str += parseInt(el, 16).toString(2);  // convert each el to base 2 string
    }

    return '0b' + str;
  }
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
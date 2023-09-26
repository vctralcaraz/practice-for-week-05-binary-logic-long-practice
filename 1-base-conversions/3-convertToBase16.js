// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here

  if(typeof element === 'number') {  // if element is decimal

    return '0x' + parseInt(element, 10).toString(16);  // return hexadecimal via parseInt function

  } else if(element[1] === 'b') {  // if element is binary

    let bin = element.slice(2);
    // console.log(bin)
    let str = '';

    for(let i = 0; i < bin.length; i += 4) {  // O(n)
      let b = bin.slice(i, i + 4);
      
      str += parseInt(b, 2).toString(16);
    }

    console.log(str)
    return '0x' + str  // return hexadecimal

  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// *********** Solution: 1
function reverseInt(num) {
  const reversed = num.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(num);
}

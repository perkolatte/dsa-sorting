function getDigit(number, place) {}

// Optimized:
// Uses built-in math functions to compute in constant time O(1)
function digitCount(number) {
  // Edge case: Math.log10(0) returns negative Infinity, so just return digit count of 1
  if (number === 0) return 1;

  // Edge case: Math.log10() returns NaN for negative numbers, so convert to positive/absolute
  // Calculate log of number to base 10 (10^x = number)
  // Add 1 to get digit count and return
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// First working attempt O(log10 n)
// function digitCount(number) {
//   let temp = number;
//   let digits = 1;
//   while (temp >= 10) {
//     temp = Math.floor(temp / 10);
//     console.log("🚀 ~ digitCount ~ temp:", temp);
//     ++digits;
//   }

//   console.log("🚀 ~ digitCount ~ digits:", digits);
//   return digits;
// }

digitCount(0);

function mostDigits(arr) {}

function radixSort(arr) {
  console.log("arr:", arr);
  let place = 10;

  for (const number of arr) {
    for (let digit = 0; digit === 0; ) {
      digit = number % place;
      console.log("digit:", digit);

      place *= 10;
    }
    digit * 10;
    console.log("digit:", digit);
  }
}

module.exports = {
  getDigit: getDigit,
  digitCount: digitCount,
  mostDigits: mostDigits,
  radixSort: radixSort,
};

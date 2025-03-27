function getDigit(number, place) {}

// First working attempt
function digitCount(number) {
  let temp = number;
  let digits = 1;
  while (temp >= 10) {
    temp = Math.floor(temp / 10);
    console.log("🚀 ~ digitCount ~ temp:", temp);
    ++digits;
  }

  console.log("🚀 ~ digitCount ~ digits:", digits);
  return digits;
}

digitCount(-1);

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

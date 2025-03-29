// Optimized: Uses built-in Math functions to avoid converting to string
// Runs in constant time O(1)
function getDigit(number, place) {
  // Place is 0-indexed from right
  // Convert number to positive/absolute to ensure a positive digit is returned
  // Divide number by 10^place to isolate the unwanted digits to the right of the decimal
  // (Shifts requested digit into the unit's place (ones column/place))
  // Remove unwanted digits to the right of the decimal with Math.floor()
  // Extract requested digit by removing preceding unwanted numbers with modulo 10
  // Example: getDigit(12345, 2), 12345 / 100 = 123, 123 % 10 = 3
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

// First attempt
// Place is 0-indexed from right
// function getDigit(number, place) {
//   // Convert number to string for ease of accessing digit at given index
//   const string = number.toString();

//   // Find number of digits, minus one to account for string 0 indexing
//   // Minus place to get correct digit index, then
//   const digitIndex = digitCount(number) - 1 - place;

//   // Edge case: Place requested does not exist. Just return 0.
//   if (digitIndex < 0) return 0;
//   // Access index in string, convert to number
//   return Number(string[digitIndex]);
// }

// Optimized:
// Uses built-in Math functions to compute in constant time O(1)
function digitCount(number) {
  // Edge case: Math.log10(0) returns negative Infinity, so just return digit count of 1
  if (number === 0) return 1;

  // Math.log10() returns NaN for negative numbers, so convert to positive/absolute
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

// First working attempt
// No further optimization needed, O(n)
function mostDigits(arr) {
  // Save array length to minimize property access
  const arrayLength = arr.length;

  //Edge case: Empty array
  if (arrayLength === 0) return 0;

  // Set starting value for tracking most digits in a number
  let mostDigits = 0;

  for (const number of arr) {
    // Find digit count for current number and save to minimize function calls
    const numDigits = digitCount(number);

    // If number has more digits than previous high value, update
    if (numDigits > mostDigits) {
      mostDigits = numDigits;
    }
  }

  return mostDigits;
}

// First working attempt
//
function radixSort(arr) {
  const arrayLength = arr.length;
  const mostDigitsValue = mostDigits(arr);
  let currentDigit = 0;

  while (currentDigit < mostDigitsValue) {
    let nextArrayPosition = 0;
    const buckets = new Map();

    for (const number of arr) {
      const digitToBeSorted = getDigit(number, currentDigit);
      if (!buckets.has(digitToBeSorted)) {
        buckets.set(digitToBeSorted, [number]);
      } else {
        const numbersArray = buckets.get(digitToBeSorted);
        numbersArray.push(number);
      }
    }
    for (let i = 0; i <= 9; ++i) {
      if (buckets.has(i)) {
        const numbersArray = buckets.get(i);
        for (const numberValue of numbersArray) {
          arr[nextArrayPosition] = numberValue;
          ++nextArrayPosition;
        }
      }
    }
    ++currentDigit;
  }
  return arr;
}

module.exports = {
  getDigit: getDigit,
  digitCount: digitCount,
  mostDigits: mostDigits,
  radixSort: radixSort,
};

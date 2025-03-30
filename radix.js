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
  // Edge case: Math.log10(0) returns negative Infini cty, so just return digit count of 1
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

// First working attempt for positive numbers only, O(n * k) (k is number of digits in largest number)
function radixSort(arr) {
  // Save input array length to reduce property access
  const arrayLength = arr.length;
  // Get highest number of digits present in any one number in input array
  const mostDigitsValue = mostDigits(arr);
  // Set starting digit place to be sorted (0-indexed from right)
  let currentPlace = 0;

  // Iterate through places, stopping when highest number of digits present reached
  while (currentPlace < mostDigitsValue) {
    // Reset array write index and number sorting buckets map
    let nextArrayPosition = 0;
    const buckets = new Map();
    const negativeBuckets = new Map();

    // Iterate through array
    for (const number of arr) {
      // const numberDigitCount = digitCount(number);
      // if (
      //   numberDigitCount <=
      //   currentPlace - numberDigitCount + mostDigitsValue
      // ) {
      if (number >= 0) {
        // Get digit in the place currently being sorted from the current number
        const digitToBeSorted = getDigit(number, currentPlace);

        // Check if digit bucket exists
        // Create if not, add to if already exists
        if (!buckets.has(digitToBeSorted)) {
          buckets.set(digitToBeSorted, [number]);
        } else {
          buckets.get(digitToBeSorted).push(number);
        }
      } else {
        // Get digit in the place currently being sorted from the current number
        const digitToBeSorted = getDigit(number, currentPlace);

        // Check if digit bucket exists
        // Create if not, add to if already exists
        if (!negativeBuckets.has(digitToBeSorted)) {
          negativeBuckets.set(digitToBeSorted, [number]);
        } else {
          negativeBuckets.get(digitToBeSorted).push(number);
        }
        // }
      }
    }
    for (let i = 9; i >= 0; --i) {
      // Check if digit bucket exists
      // Get bucket of numbers if exists
      if (negativeBuckets.has(i)) {
        const numbersArray = negativeBuckets.get(i);

        // Write numbers in bucket to array
        for (const numberValue of numbersArray) {
          arr[nextArrayPosition] = numberValue;
          ++nextArrayPosition;
        }
      }
    }
    // Iterate through all digits
    for (let i = 0; i <= 9; ++i) {
      // Check if digit bucket exists
      // Get bucket of numbers if exists
      if (buckets.has(i)) {
        const numbersArray = buckets.get(i);

        // Write numbers in bucket to array
        for (const numberValue of numbersArray) {
          arr[nextArrayPosition] = numberValue;
          ++nextArrayPosition;
        }
      }
    }
    // Increment place
    ++currentPlace;
  }
  // Return sorted array
  return arr;
}

// console.log(
//   radixSort([23098, 213123, 54, 23, 552, 43, -24, -2, -2540395, -6, 0])
// );

// First working attempt for positive numbers only, O(n * k) (k is number of digits in largest number)
// function radixSort(arr) {
//   // Save input array length to reduce property access
//   const arrayLength = arr.length;
//   // Get highest number of digits present in any one number in input array
//   const mostDigitsValue = mostDigits(arr);
//   // Set starting digit place to be sorted (0-indexed)
//   let currentPlace = 0;

//   // Iterate through places, stopping when highest number of digits present reached
//   while (currentPlace < mostDigitsValue) {
//     // Reset array write index and number sorting buckets map
//     let nextArrayPosition = 0;
//     const buckets = new Map();

//     // Iterate through array
//     for (const number of arr) {
//       // Get digit in the place currently being sorted from the current number
//       const digitToBeSorted = getDigit(number, currentPlace);
//       // Check if digit bucket exists
//       // Create if not, add to if already exists
//       if (!buckets.has(digitToBeSorted)) {
//         buckets.set(digitToBeSorted, [number]);
//       } else {
//         const numbersArray = buckets.get(digitToBeSorted);
//         numbersArray.push(number);
//       }
//     }
//     // Iterate through all digits
//     for (let i = 0; i <= 9; ++i) {
//       // Check if digit bucket exists
//       // Get bucket of numbers if exists
//       if (buckets.has(i)) {
//         const numbersArray = buckets.get(i);

//         // Write numbers in bucket to array
//         for (const numberValue of numbersArray) {
//           arr[nextArrayPosition] = numberValue;
//           ++nextArrayPosition;
//         }
//       }
//     }
//     // Increment place
//     ++currentPlace;
//   }
//   // Return sorted array
//   return arr;
// }

module.exports = {
  getDigit: getDigit,
  digitCount: digitCount,
  mostDigits: mostDigits,
  radixSort: radixSort,
};

// bubble sort + accounting for already sorted arrays with length of 0 or 1
// function bubbleSort(arr) {
//   // console.log("🚀 ~ bubbleSort ~ starting arr:", arr);

//   const length = arr.length;

//   let comparisons = 0;

//   if (length <= 1) {
//     return arr;
//   }

//   for (let i = 0; i < length; i++) {
//     for (let j = 1; j < length - i; j++) {
//       comparisons++;

//       if (arr[j - 1] > arr[j]) {
//         [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//       }
//     }
//     // console.log("🚀 ~ bubbleSort ~ arr:", arr);
//   }
//   console.log("🚀 ~ bubbleSort ~ comparisons:", comparisons);
//   return arr;
// }

// // also checking for swaps in last pass
// function bubbleSort(arr) {
//   // console.log("🚀 ~ bubbleSort ~ starting arr:", arr);

//   const length = arr.length;

//   if (length <= 1) {
//     return arr;
//   }

//   let comparisons = 0;

//   for (let i = 0; i < length; i++) {
//     let swapped = false;

//     for (let j = 1; j < length - i; j++) {
//       if (arr[j - 1] > arr[j]) {
//         comparisons++;

//         [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//         swapped = true;
//       }
//     }
//     // console.log("🚀 ~ bubbleSort ~ arr:", arr);

//     if (!swapped) break;
//   }
//   console.log("🚀 ~ bubbleSort ~ comparisons:", comparisons);
//   return arr;
// }

// // also reducing redundant comparisons by tracking last swap position
function bubbleSort(arr) {
  // console.log("🚀 ~ bubbleSort ~ starting arr:", arr);

  const length = arr.length;

  // Edge case: empty or single element array
  if (length <= 1) {
    return arr;
  }

  let comparisons = 0; // Track comparisons for performance visibility
  let lastSwapIndex; // Track position of last swap
  let end = length - 1; // Last position to check

  do {
    lastSwapIndex = 0; // Reset last swap posistion when beginning next pass

    for (let i = 1; i <= end; i++) {
      if (arr[i - 1] > arr[i]) {
        comparisons++;

        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];

        lastSwapIndex = i;
      }
    }

    end = lastSwapIndex - 1; // Use last swap position to reduce range for next pass
    // console.log("🚀 ~ bubbleSort ~ arr:", arr);
  } while (lastSwapIndex > 0); // Sorting complete if no swaps in last pass

  console.log("🚀 ~ bubbleSort ~ comparisons:", comparisons);
  return arr;
}

module.exports = bubbleSort;

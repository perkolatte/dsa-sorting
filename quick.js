/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

// Optimized/rewritten:
// Pivot stays in place, partition index moves as needed, thus minimizing swaps
// Clarified variable names for increased readability
// Allowed optional inputs startingIndex and endingIndex to, with default values. Can now pivot only a portio of the array.
// Added error
function pivot(arr, startingIndex = 0, endingIndex = arr.length - 1) {
  // Save array length to reduce property access overhead
  const arrayLength = arr.length;

  // Throw error if optional indices are out of bounds or incompatible
  if (startingIndex < 0 || startingIndex >= arrayLength) {
    throw new Error("Invalid startingIndex: " + startingIndex);
  }
  if (endingIndex < 0 || endingIndex >= arrayLength) {
    throw new Error("Invalid endingIndex: " + endingIndex);
  }
  if (endingIndex < startingIndex) {
    throw new Error(
      "Ending index (" +
        endingIndex +
        ") is less than starting index (" +
        startingIndex +
        ")"
    );
  }

  // Determine array size to be organized, based on optional index inputs
  const workinglength = endingIndex - startingIndex + 1;

  // If array is empty or contains only 1 element, it is already sorted. Just return.
  if (workinglength <= 1) return startingIndex;

  // Store pivot value and index for clarity
  const pivotValue = arr[startingIndex];
  let pivotIndex = startingIndex;

  // Set starting value for partition index at first non-pivot position
  let partitionIndex = startingIndex + 1;

  // Move through array to examine each value and determine its relation to pivot value
  for (let i = startingIndex + 1; i <= endingIndex; ++i) {
    // Store current element and index for clarity and to reduce array access
    const currentValue = arr[i];
    const currentIndex = i;

    // Check if current value is lower than pivot value
    if (currentValue < pivotValue) {
      // If lower, swap current with partition index
      arr[currentIndex] = arr[partitionIndex];
      arr[partitionIndex] = currentValue;

      // Then move partition index up by one accordingly
      ++partitionIndex;
    }
  }

  // Put pivot in its place by swapping with the last value before the partition index
  arr[startingIndex] = arr[partitionIndex - 1];
  arr[partitionIndex - 1] = pivotValue;

  // Set pivot index just below/before partition index
  pivotIndex = partitionIndex - 1;

  // Return pivot index
  return pivotIndex;
}

// First working pivot attempValuet:
// function pivot(arr) {
//   console.log("START:\n", arr);
//   const length = arr.length;

//   if (length <= 1) return 0;

//   let pivotIndex = 0;
//   const pivot = arr[pivotIndex];

//   for (let i = 1; i < length; i++) {
//     const current = arr[i];
//     if (current < pivot) {
//       //     "Less than pivot:\ncurrent:",
//       //     current,
//       //     "\n",
//       //     arr,
//       //     "\n(more)pivot:",
//       //     pivot,
//       //     "\n(more)pivotIndex:",
//       //     pivotIndex
//       //   );

//       const tempValue = arr[i];
//       arr[i] = arr[pivotIndex + 1];
//       arr[pivotIndex + 1] = pivot;
//       pivotIndex++;
//       arr[pivotIndex - 1] = tempValue;
//       //   console.log("Moved:\ncurrent:", current, "\n", arr);
//     } else {
//       if (i !== pivotIndex + 1) {
//         const tempValue = arr[i];
//         arr[i] = arr[pivotIndex + 1];
//         arr[pivotIndex + 1] = tempValue;
//       }
//     }
//   }
//   return pivotIndex;
// }

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
  pivot(arr);
}

module.exports = {
  pivot: pivot,
  quickSort: quickSort,
};

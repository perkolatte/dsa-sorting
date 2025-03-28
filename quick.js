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
  const workingLength = endingIndex - startingIndex + 1;

  // If array is empty or contains only 1 element, it is already sorted. Just return.
  if (workingLength <= 1) return startingIndex;

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

    // If current value is lower than pivot value, swap with partition index
    if (currentValue < pivotValue) {
      arr[currentIndex] = arr[partitionIndex];
      arr[partitionIndex] = currentValue;

      // Advance partition index
      ++partitionIndex;
    }
  }

  // Put pivot in its place by swapping with the last value before the partition index
  arr[startingIndex] = arr[partitionIndex - 1];
  arr[partitionIndex - 1] = pivotValue;

  // Set pivot index just below/before partition index
  pivotIndex = partitionIndex - 1;

  return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

// Implementation of in-place QuickSort with customizable pivot and index bounds
// Optimized:
// Implemented logic to sort smaller subarray recusively first
// and then larger subarray iteratively with while loop
// This keeps the call stack for the larger subarray minimized
function quickSort(arr, leftIndex = 0, rightIndex = arr.length - 1) {
  // Base case: subarray has zero or one element; already sorted
  while (leftIndex < rightIndex) {
    // Call pivot to sort array or array segment in place and save returned pivot index
    const partitionIndex = pivot(arr, leftIndex, rightIndex);

    // Determined smaller array segment to be sorted recursively
    if (partitionIndex - leftIndex < rightIndex - partitionIndex) {
      // Recursively sort left partition (elements before pivot)
      quickSort(arr, leftIndex, partitionIndex - 1);
      // Set left boundary for larger, right subarray to be sorted iterativelty within while loop
      leftIndex = partitionIndex + 1;
    } else {
      // Recursively sort right partition (elements after pivot)
      quickSort(arr, partitionIndex + 1, rightIndex);
      // Set right boundary for larger, left subarray to be sorted iterativelty within while loop
      rightIndex = partitionIndex - 1;
    }
  }
  // Return sorted array
  return arr;
}

// First working pivot attempt:
// function pivot(arr) {
//   console.log("START:\n", arr);
//   const length = arr.length;

//   if (length <= 1) return 0;

//   let pivotIndex = 0;
//   const pivot = arr[pivotIndex];

//   for (let i = 1; i < length; i++) {
//     const current = arr[i];
//     if (current < pivot) {

//       const tempValue = arr[i];
//       arr[i] = arr[pivotIndex + 1];
//       arr[pivotIndex + 1] = pivot;
//       pivotIndex++;
//       arr[pivotIndex - 1] = tempValue;

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

// First working quickSort()
// Implementation of in-place QuickSort with customizable pivot and index bounds
// function quickSort(arr, leftIndex = 0, rightIndex = arr.length - 1) {
//   // Base case: subarray has zero or one element; already sorted
//   if (rightIndex - leftIndex <= 0) {
//     return arr;
//   } else {
//     // Call pivot to sort array or array segment in place and save returned pivot index
//     let partitionIndex = pivot(arr, leftIndex, rightIndex);

//     // Recursively sort left partition (elements before pivot)
//     quickSort(arr, leftIndex, partitionIndex - 1);

//     // Recursively sort right partition (elements after pivot)
//     quickSort(arr, partitionIndex + 1, rightIndex);

//     // Return sorted array
//     return arr;
//   }
// }

module.exports = {
  pivot: pivot,
  quickSort: quickSort,
};

// Traditional Insertion Sort Implementation
function insertionSort(arr) {
    // Loop through the array starting from index 1,
    // since the element at index 0 is considered sorted by default.
    for (let sortedBoundary = 1; sortedBoundary < arr.length; sortedBoundary++) {
      // 'current' holds the element to be inserted into the sorted portion.
      let current = arr[sortedBoundary];
      // 'i' starts at the last index of the sorted portion.
      let i = sortedBoundary - 1;
  
      // Shift elements in the sorted portion to the right as long as they are greater than 'current'.
      // This loop stops when we find the correct position for 'current' or when 'i' is less than 0.
      while (i >= 0 && arr[i] > current) {
        arr[i + 1] = arr[i]; // Shift element to the right.
        i--; // Move to the previous element in the sorted portion.
      }
  
      // Insert 'current' into the correct position.
      arr[i + 1] = current;
    }
    
    // Return the sorted array.
    return arr;
  }
  
  /*
  Below is an is my first attempt which uses splice.
  This method removes the element from its current position and then reinserts it
  in the correct location. However, using splice can apparently cause reindexing overhead
  and is generally less efficient than the above method.
  
// function insertionSort(arr) {
//   let sortedPortionEnd = 1;
//   // Marks the boundary between the sorted and unsorted portions of the array

//   // Continue until the entire array is processed
//   while (sortedPortionEnd < arr.length) {
//     // Iterate over the elements of the array starting from the second element
//     for (let i = 1; i < arr.length; i++) {
//       // For each element, compare it with elements in the sorted portion (from index 0 to end of sorted portion)
//       for (let j = 0; j < sortedPortionEnd; j++) {
//         // If the current element is less than an element in the sorted portion,
//         // it should be inserted before that element
//         if (arr[i] < arr[j]) {
//           // Remove the element at index 'i' and insert it at index 'j'
//           // 'arr.splice(i, 1)' removes the element at index i and returns an array with that element.
//           // '[0]' extracts the element from the returned array.
//           // Then, 'arr.splice(j, 0, ...)' inserts that element at index j
//           arr.splice(j, 0, arr.splice(i, 1)[0]);
//         }
//       }
//     }
//     // Increase the boundary of the sorted portion after each complete pass
//     sortedPortionEnd++;
//   }

//   // Return the sorted array
//   return arr;
// }

module.exports = insertionSort;

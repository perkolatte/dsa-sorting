// First working attempt, swaps with splice only when needed,
// but apparently splice causes reindexing, which is less efficient than swapping
function insertionSort(arr) {
  let sortedPortionEnd = 1;
  // Marks the boundary between the sorted and unsorted portions of the array

  // Continue until the entire array is processed
  while (sortedPortionEnd < arr.length) {
    // Iterate over the elements of the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // For each element, compare it with elements in the sorted portion (from index 0 to end of sorted portion)
      for (let j = 0; j < sortedPortionEnd; j++) {
        // If the current element is less than an element in the sorted portion,
        // it should be inserted before that element
        if (arr[i] < arr[j]) {
          // Remove the element at index 'i' and insert it at index 'j'
          // 'arr.splice(i, 1)' removes the element at index i and returns an array with that element.
          // '[0]' extracts the element from the returned array.
          // Then, 'arr.splice(j, 0, ...)' inserts that element at index j
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
    // Increase the boundary of the sorted portion after each complete pass
    sortedPortionEnd++;
  }

  // Return the sorted array
  return arr;
}

module.exports = insertionSort;

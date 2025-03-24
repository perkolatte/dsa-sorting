// First attempt
function selectionSort(arr) {
  // Outer loop to track the sorted portion
  for (let i = 0; i < arr.length; i++) {
    // Reset smallest value and its location
    let smallest = arr[i];
    let indexOfSmallest = i;

    // Inner loop to find the smallest value in the unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        indexOfSmallest = j;
      }
    }

    // Conditional swap if a new smallest value was found
    if (indexOfSmallest !== i) {
      [arr[i], arr[indexOfSmallest]] = [arr[indexOfSmallest], arr[i]];
    }
  }
  // Return the sorted array.
  return arr;
}

module.exports = selectionSort;

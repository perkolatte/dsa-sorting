function insertionSort(arr) {
  // - Start by picking the second element in the array (we will assume the first element is the start of the “sorted” portion)
  let sortedPortionEnd = 1;
  //   if (arr[i] < arr[i - 1]) {
  //     arr[i], (arr[i - 1] = arr[i - 1]), arr[i];

  while (sortedPortionEnd < arr.length) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < sortedPortionEnd; j++) {
        if (arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
    console.log("🚀 ~ arr:", arr);
    sortedPortionEnd++;
  }

  return arr;

  // - Now compare the second element with the one before it and swap if necessary.

  // - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
  // - Repeat until the array is sorted.
}

module.exports = insertionSort;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let indexOfSmallest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        indexOfSmallest = j;
      }
    }

    if (indexOfSmallest !== i) {
      [arr[i], arr[indexOfSmallest]] = [arr[indexOfSmallest], arr[i]];
    }
  }
  return arr;
}

module.exports = selectionSort;

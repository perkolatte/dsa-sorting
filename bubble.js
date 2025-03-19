function bubbleSort(arr) {
  console.log("🚀 ~ bubbleSort ~ starting arr:", arr);

  const length = arr.length;

  if (length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
    console.log("🚀 ~ bubbleSort ~ arr:", arr);
  }
  return arr;
}

module.exports = bubbleSort;

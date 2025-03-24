/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr) {
  console.log("START:\n", arr);
  const length = arr.length;

  if (length <= 1) return arr;

  let pivotIndex = 0;
  const pivot = arr[pivotIndex];

  for (let i = 1; i < length; i++) {
    const current = arr[i];
    if (current < pivot) {
      //     "Less than pivot:\ncurrent:",
      //     current,
      //     "\n",
      //     arr,
      //     "\n(more)pivot:",
      //     pivot,
      //     "\n(more)pivotIndex:",
      //     pivotIndex
      //   );

      const temp = arr[i];
      arr[i] = arr[pivotIndex + 1];
      arr[pivotIndex + 1] = pivot;
      pivotIndex++;
      arr[pivotIndex - 1] = temp;
      //   console.log("Moved:\ncurrent:", current, "\n", arr);
    } else {
      if (i !== pivotIndex + 1) {
        const temp = arr[i];
        arr[i] = arr[pivotIndex + 1];
        arr[pivotIndex + 1] = temp;
      }
    }
  }
  return pivotIndex;
}

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

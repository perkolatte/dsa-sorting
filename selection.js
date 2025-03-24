// Optimized:
// Uses traditional, manual swap instead of destructuring swap to avoid temporary array creation overhead
// Reduced array access with variable 'current'
// Saved array length as variable to avoid accessing property multiple times
// Edge case to account for arrays with 1 or 0 elements (already sorted)
// Hard-coded logic for arrays 2-5 elements in length to avoid loop overhead

function selectionSort(arr) {
  // Store length to avoid accessing property multiple times
  const length = arr.length;

  function selectionSort(arr) {
    // Store length to avoid accessing property multiple times
    const length = arr.length;

    if (length <= 1) return arr;

    if (length === 2) {
      if (arr[0] > arr[1]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
      }
      return arr;
    }

    if (length === 3) {
      if (arr[0] > arr[1]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
      }
      if (arr[1] > arr[2]) {
        const temp = arr[1];
        arr[1] = arr[2];
        arr[2] = temp;
      }
      if (arr[0] > arr[1]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
      }
      return arr;
    }

    if (length === 4) {
      if (arr[0] > arr[1]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
      }
      if (arr[2] > arr[3]) {
        const temp = arr[2];
        arr[2] = arr[3];
        arr[3] = temp;
      }
      if (arr[0] > arr[2]) {
        const temp = arr[0];
        arr[0] = arr[2];
        arr[2] = temp;
      }
      if (arr[1] > arr[3]) {
        const temp = arr[1];
        arr[1] = arr[3];
        arr[3] = temp;
      }
      if (arr[1] > arr[2]) {
        const temp = arr[1];
        arr[1] = arr[2];
        arr[2] = temp;
      }
      return arr;
    }

    if (length === 5) {
      if (arr[0] > arr[1]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
      }
      if (arr[2] > arr[3]) {
        const temp = arr[2];
        arr[2] = arr[3];
        arr[3] = temp;
      }
      if (arr[0] > arr[2]) {
        const temp = arr[0];
        arr[0] = arr[2];
        arr[2] = temp;
      }
      if (arr[1] > arr[4]) {
        const temp = arr[1];
        arr[1] = arr[4];
        arr[4] = temp;
      }
      if (arr[3] > arr[4]) {
        const temp = arr[3];
        arr[3] = arr[4];
        arr[4] = temp;
      }
      if (arr[1] > arr[2]) {
        const temp = arr[1];
        arr[1] = arr[2];
        arr[2] = temp;
      }
      if (arr[2] > arr[3]) {
        const temp = arr[2];
        arr[2] = arr[3];
        arr[3] = temp;
      }
      return arr;
    }

    // Outer loop to track the sorted portion
    for (let i = 0; i < length; i++) {
      // Reset smallest value and its location
      const current = arr[i];
      let smallest = current;
      let indexOfSmallest = i;

      // Inner loop to find the smallest value in the unsorted portion
      for (let j = i + 1; j < length; j++) {
        if (arr[j] < smallest) {
          smallest = arr[j];
          indexOfSmallest = j;
        }
      }

      // Conditional swap if a new smallest value was found
      if (indexOfSmallest !== i) {
        // const temp = current;
        arr[i] = arr[indexOfSmallest];
        arr[indexOfSmallest] = current;
      }
    }
    // Return the sorted array.
    return arr;
  }

  // First attempt
  // function selectionSort(arr) {
  //   // Outer loop to track the sorted portion
  //   for (let i = 0; i < arr.length; i++) {
  //     // Reset smallest value and its location
  //     let smallest = arr[i];
  //     let indexOfSmallest = i;

  //     // Inner loop to find the smallest value in the unsorted portion
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[j] < smallest) {
  //         smallest = arr[j];
  //         indexOfSmallest = j;
  //       }
  //     }

  //     // Conditional swap if a new smallest value was found
  //     if (indexOfSmallest !== i) {
  //       [arr[i], arr[indexOfSmallest]] = [arr[indexOfSmallest], arr[i]];
  //     }
  //   }
  //   // Return the sorted array.
  //   return arr;
  // }

  module.exports = selectionSort;

  // Outer loop to track the sorted portion
  for (let i = 0; i < length; i++) {
    // Reset smallest value and its location
    const current = arr[i];
    let smallest = current;
    let indexOfSmallest = i;

    // Inner loop to find the smallest value in the unsorted portion
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        indexOfSmallest = j;
      }
    }

    // Conditional swap if a new smallest value was found
    if (indexOfSmallest !== i) {
      // const temp = current;
      arr[i] = arr[indexOfSmallest];
      arr[indexOfSmallest] = current;
    }
  }
  // Return the sorted array.
  return arr;
}

// First attempt
// function selectionSort(arr) {
//   // Outer loop to track the sorted portion
//   for (let i = 0; i < arr.length; i++) {
//     // Reset smallest value and its location
//     let smallest = arr[i];
//     let indexOfSmallest = i;

//     // Inner loop to find the smallest value in the unsorted portion
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < smallest) {
//         smallest = arr[j];
//         indexOfSmallest = j;
//       }
//     }

//     // Conditional swap if a new smallest value was found
//     if (indexOfSmallest !== i) {
//       [arr[i], arr[indexOfSmallest]] = [arr[indexOfSmallest], arr[i]];
//     }
//   }
//   // Return the sorted array.
//   return arr;
// }

module.exports = selectionSort;

// Optimized with prealloated space + manually tracks sorted array index
function merge(arr1, arr2) {
  const length1 = arr1.length;
  const length2 = arr2.length;
  let sortedArr = Array.from({ length: length1 + length2 }); // Preallocates size of sorted array with combined size of input arrays

  let i = 0; // Index for array 1
  let j = 0; // Index for array 2
  let k = 0; // Index for sorted array to avoid using push

  while (i < length1 && j < length2) {
    sortedArr[k++] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++];
    // Adds the smaller number to the sorted array at index [k],
    // increments the index for the array it came from appropriately,
    // and then increments the index for the sorted array with [k++]
  }

  // Add remaining elements to end of sorted array after one input array is exhausted
  while (i < length1) sortedArr[k++] = arr1[i++];
  while (j < length2) sortedArr[k++] = arr2[j++];

  return sortedArr;
}

// Also copies rest of remaining array after one is exhausted in one chunk instead of iterating
// No longer using, as while loops are apparently faster
// function merge(arr1, arr2) {
//   const length1 = arr1.length;
//   const length2 = arr2.length;
//   let sortedArr = Array.from({ length: length1 + length2 }); // Preallocates size of sorted array with combined size of input arrays

//   let i = 0; // Index for array 1
//   let j = 0; // Index for array 2
//   let k = 0; // Index for sorted array to avoid using push

//   while (i < length1 && j < length2) {
//     sortedArr[k++] = arr1[i] < arr2[j] ? arr1[i++] : arr2[j++];
//     // Adds the smaller number to the sorted array at index [k],
//     // increments the index for the array it came from appropriately,
//     // and then increments the index for the sorted array with [k++].
//   }

//   if (i < length1) sortedArr.splice(k, length1 - i, ...arr1.slice(i));

//   if (j < length2) sortedArr.splice(k, length2 - j, ...arr2.slice(j));

//   // console.log("🚀 ~ added remaining ~ sortedArr:", sortedArr);

//   return sortedArr;
// }

function mergeSort(arr) {
  // 1. Break up the array into halves until arrays are 0 or 1 elements in length (inherently sorted) (recursive)
  // 2. Merge with other sorted arrays (recursive) ( use merge() )
  // 3. Return the merged (and sorted!) array

  // Store length for easier access and readability
  const length = arr.length;

  // Arrays with 1 or 0 elements need not be split and are already sorted and ready for merging
  if (length <= 1) return arr;

  // Find half length of array, accounting for odd lengths
  const midPoint = Math.floor(length / 2);

  // Split array, recursively pass to self
  const split1 = mergeSort(arr.slice(0, midPoint));
  const split2 = mergeSort(arr.slice(midPoint));

  // Compare, sort, return
  return merge(split1, split2);
}

// function mergeSort(arr) {}

// first (actual) merge() attempt
// function merge(arr1, arr2) {
//     console.log("🚀 ~ merge ~ arr1:", arr1);
//   console.log("🚀 ~ merge ~ arr2:", arr2);
//   const length1 = arr1.length;
//   const length2 = arr2.length;
//   let sortedArr = [];

//   let i = 0;
//   let j = 0;

//   while (i < length1 && j < length2) {
//     if (arr1[i] < arr2[j]) {
//       sortedArr.push(arr1[i]);
//       i++;
//     } else {
//       sortedArr.push(arr2[j]);
//       j++;
//     }
//     console.log("🚀 ~ merge ~ sortedArr:", sortedArr);
//   }

//   while (i < length1) {
//     sortedArr.push(arr1[i]);
//     i++;
//   }

//   while (j < length2) {
//     sortedArr.push(arr2[j]);
//     j++;
//   }
//   console.log("🚀 ~ added remaining ~ sortedArr:", sortedArr);

//   return sortedArr;
// }

// function mergeSort(arr) {}

module.exports = { merge, mergeSort };

// // barked up the wrong tree
// function merge(arr1, arr2) {
//   const origLength1 = arr1.length;
//   const origLength2 = arr2.length;

//   if (arr.length <= 1) {
//     // Arrays with 1 or 0 elements are already sorted
//     return arr;
//   }

//   let splitLength = origLength;
//   half = Math.floor(origLength / 2);
//   let arr1 = [];
//   let arr2 = [];

//   while (splitLength > 1) {
//     half = Math.floor(splitLength / 2);

//     arr1 = arr.slice(0, half);
//     arr2 = arr.slice(half);

//     splitLength = half;

//     merge(arr1);
//     merge(arr2);
//   }
//   mergeSort(arr1, arr2);
// }

// function mergeSort(arr) {
//   const end1 = arr1.length - 1;
//   const end2 = arr2.length - 1;
//   let sortedArr = [];

//   let i = 0;
//   let j = 0;

//   while (i < end1 || j < end2) {
//     if (arr1[i] < arr2[j]) {
//       sortedArr.push(arr1[i]);
//       i++;
//     } else {
//       sortedArr.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i < end1) {
//     while (i < end1) {
//       sortedArr.push(arr2[i]);
//       i++;
//     }
//   }
//   if (j < end2) {
//     while (j < end2) {
//       sortedArr.push(arr2[j]);
//       j++;
//     }
//   }

//   return sortedArr;
// }

// module.exports = { merge, mergeSort };

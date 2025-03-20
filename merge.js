// first attempt
function merge(arr1, arr2) {
  console.log("🚀 ~ merge ~ arr1:", arr1);
  console.log("🚀 ~ merge ~ arr2:", arr2);
  const length1 = arr1.length;
  const length2 = arr2.length;
  let sortedArr = [];

  let i = 0;
  let j = 0;

  while (i < length1 && j < length2) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
    console.log("🚀 ~ merge ~ sortedArr:", sortedArr);
  }

  while (i < length1) {
    sortedArr.push(arr1[i]);
    i++;
  }

  while (j < length2) {
    sortedArr.push(arr2[j]);
    j++;
  }
  console.log("🚀 ~ added remaining ~ sortedArr:", sortedArr);

  return sortedArr;
}

function mergeSort(arr) {}

module.exports = { merge, mergeSort };

// // first attempt
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

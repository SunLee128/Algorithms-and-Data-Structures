// Bubble Sort O(n^2)
// visualgo.net/en/sorting
// a sorting algorithm where the largest values bubble up to the top.

// ES5 swap items in a array
// function swap (arr, idx1, idx2) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// ES2015 swap items in a array
// const swap = (arr, idx1, idx2) => {
//   [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
// };

//Naive solution
// function bubbleSort (arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

//Optimized for almost sorted arrays. O(n)
function bubbleSort (arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([ 32, 56, 3, 12, 6 ]));

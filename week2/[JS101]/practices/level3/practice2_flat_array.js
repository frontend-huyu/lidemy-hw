let newArr = []

function flatArr(arr) {
  // if it's an array, callback & return
  // if arr is not an array, push into newArr
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      flatArr(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// flatArr([1, 2, 3])
// flatArr([1, 2, [1, 2], [1, 3], 6])
flatArr([1, [2, [3, [4]], 5], 6])



// solution takes a cue from other people

// function flatten(arr) {
//   let result = [];
//   recursive(result, arr);
//   return result;
// }

// function recursive(result, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "object") {
//       result.push(arr[i]);
//     } else {
//       recursive(result, arr[i]);
//     }
//   }
// }
// console.log(flatten([1, 2, 3]));
// console.log(flatten([1, 2, [1, 2], [1, 3], 6]));
// console.log(flatten([1, [2, [3, [4]], 5], 6]))
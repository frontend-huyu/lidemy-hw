// 1~100 odd numbers
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i)
//   }
// }


// fizz buzz
// function fizzBuzz(n) {
//   for (let i = 1; i < n; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//       console.log('FizzBuzz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     } else if (i % 3 === 0) {
//       console.log('Fizz')
//     } else {
//       console.log(i)
//     }
//   }
// }
// fizzBuzz(100)

// fizz buzz, solution by others
// const n = 50;
// for (let i = 1; i <= n; i++) {
//   let result = '';
//   if (i % 3 === 0) {
//     result += 'Fizz'
//   }
//   if (i % 5 === 0) {
//     result += 'Buzz'
//   }
//   if (i % 7 === 0) {
//     result += '777'
//   }
//   if (i % 10 === 0) {
//     result += '101010'
//   }
//   if (result.length > 0) {
//     console.log(result.length)
//   }
//   else {
//     console.log(i);
//   }
// }


// find minimum
function findMin(arr) {
  let temp = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < temp) {
      temp = arr[i]
    }
  }
  console.log(temp)
}
findMin([1, 2, 3]) // 1

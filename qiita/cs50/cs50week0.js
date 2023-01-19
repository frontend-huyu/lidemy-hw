// // charCode
// const start = 'A'.codePointAt(0);
// const end = 'Z'.codePointAt(0);

// function findTarget(str) {
//   const target = str.codePointAt(0);
//   if (target < start || target > end) return;

//   let middle = (end - start + 1) / 2;
//   let tempInterval = start + middle;
//   let complete = false;
//   let counter = 0;

//   while (!complete) {
//     if (target > tempInterval) {
//       tempInterval = tempInterval + Math.ceil(middle / 2);
//       counter++;
//     } else if (target < tempInterval) {
//       tempInterval = tempInterval - Math.ceil(middle / 2);
//       counter++;
//     } else {
//       complete = true;
//       counter++;
//       return `We found ${str} at ${counter} times`;
//     }
//     middle = Math.ceil(middle / 2);
//   }
// }

// let name = 'Mike Smith';
// // console.log(name.codePointAt(0)); // 77
// console.log(findTarget(name));
// // We found Mike Smith at 4 times

// let randomAlphabet = Math.floor(Math.random() * (end - start + 1) + start);
// console.log(findTarget(String.fromCharCode(randomAlphabet)));
// // We found J at 5 times

// array
const alphabetArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const start = 0;
const end = alphabetArr.length - 1;

function findTarget(str) {
  const target = str[0];
  if (target < alphabetArr[start] || target > alphabetArr[end]) return;

  let middle = (end - start + 1) / 2;
  let tempInterval = start + middle;
  let complete = false;
  let counter = 0;

  while (!complete) {
    if (target > alphabetArr[tempInterval]) {
      tempInterval = tempInterval + Math.ceil(middle / 2);
      counter++;
    } else if (target < alphabetArr[tempInterval]) {
      tempInterval = tempInterval - Math.ceil(middle / 2);
      counter++;
    } else {
      complete = true;
      counter++;
      return `We found ${str} at ${counter} times`;
    }
    middle = Math.ceil(middle / 2);
  }
}

let randomAlphabet = Math.floor(Math.random() * (end - start + 1));
console.log(findTarget(alphabetArr[randomAlphabet]));
// We found X at 5 times


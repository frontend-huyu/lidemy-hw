// write your solution in here, and remember lines is an array
function solve(lines) {
  let str = lines[0].split('')
  let strFront = str.splice(0, (str.length / 2))
  let strBehind = str.reverse()
  // console.log(strFront)

  for (let i = 0; i < strFront.length; i++) {
    if (strFront[i] === strBehind[i]) {
      continue
    } else {
      console.log('False')
      return
    }
  }
  console.log('True')
}

// solve(['abbbba'])
// True
// solve(['ac'])
// False
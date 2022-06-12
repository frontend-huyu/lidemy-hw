// https://htmldom.dev/
// Add a class to an element
let firstTitle = document.querySelector('h1')
firstTitle.classList.add('foo')

// Add multiple classes (Not supported in IE 11)
// ele.classList.add('another', 'class', 'name')

firstTitle.classList.remove('foo')

// Remove multiple classes (Not supported in IE 11)
// ele.classList.remove('another', 'class', 'name')

// Toggle a class
let p = document.querySelector('p')
firstTitle.addEventListener('click', () => {
  const result = p.classList.toggle('foo')

  if (result) {
    p.textContent = `'foo' added; <p> classes is "${p.classList}"`
  } else {
    p.textContent = `'foo' removed; <p> classes is "${p.classList}"`
  }
})


// Append to an element
// Append the ele element to the end of the target element:
let btn = document.querySelector('.btn')
let container = document.querySelector('.container')
btn.addEventListener('click', () => {
  let div = document.createElement('div')
  container.appendChild(div)
})

// Attach or detach an event handler
// Use the on attribute (not recommended)
// btn.onclick = function () {
//   alert('Hi!')
// }

// Remove the event handler
// but it doesn't work
// delete btn.onclick

// Use the addEventListener method
const handler = function () {
  alert('addEventListener methods')
}
// btn.addEventListener('click', handler)
// btn.removeEventListener('click', handler)


// Create one time event handler
// 1. Use the once option
// btn.addEventListener('click', handler, { once: true })
// Note that this option isn't supported in IE.

// 2. Self - remove the handler
const onceHandler = function (e) {
  alert('self-remove')
  e.target.removeEventListener('click', onceHandler)
}
btn.addEventListener('click', onceHandler)

// Calculate the mouse position relative to an element
btn.addEventListener('mousedown', (e) => {
  // Get the target
  const target = e.target
  // Get the bounding rectangle of target
  const rect = target.getBoundingClientRect()

  // Mouse position
  // rect => element's position
  // e.clientX, e.clientY => event happening position
  // x, y => where the mouse event happened in element
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  // console.log(rect)
  // console.log(e.clientX, e.clientY)
})


// Check an element against a selector
// // Return true if `ele` matches the CSS selector `selector`
const matches = function (element, selector) {
  return (
    element.matches ||
    element.matchesSelector ||
    element.msMatchesSelector ||
    element.mozMatchesSelector ||
    element.webkitMatchesSelector ||
    element.oMatchesSelector
  ).call(element, selector)
  // For the benefit of those visiting this page after lo these many years, this functionality is now implemented in all modern browsers as element.matches without vendor prefix (except for ms for MS browsers other than Edge 15, and webkit for Android/KitKat)
  // note: is it test if a selector matches a given element? still don't realize...
}


// Check if an element has given class
// console.log(div.classList.contains('container')) // true
let div = document.querySelector('div')
if (div.classList.contains('container')) {
  console.log('div contains container')
} else {
  console.log('error!')
}
// note: element.classList.contains()


// Check if an element is a descendant of another
// 1. Use the contains method
// it's different from 
console.log(div.contains(p)) // true
// note: Node.contains() => parent.contains(child)
// console.log(div.contains('.btn')) // Uncaught TypeError
// note: child should be a node

// 2. Go up from the child until see the parent
const isDescendant = function (parent, child) {
  let node = child.parentNode
  while (node) {
    if (node === parent) {
      return true
    }
    // Traverse up to the parent
    node = node.parentNode
  }
  // Go up until the root but couldn't find the `parent`
  return false
}
console.log(isDescendant(div, p)) // true
console.log(isDescendant(div, btn)) // true


// Check if an element is in the viewport
const isInViewport = function (ele) {
  const rect = ele.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
// note: maybe I can check it with devTools?


// Check if the code is running in the browser
// We can detect if the current code is running in the browser by checking the existence of window and document objects:
const isBrowser = typeof window === 'object' && typeof document === 'object'
// note: The Window interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.


// Check if the native date input is supported
const isDateInputSupported = function () {
  const ele = document.createElement('input')

  ele.setAttribute('type', 'date')

  const invalidValue = 'not-a-valid-date'

  ele.setAttribute('value', invalidValue)

  return ele.value !== invalidValue
}

console.log(isDateInputSupported()) // true


// Check if the touch events are supported
const touchSupported = 'ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)


// Clone an element
btn.addEventListener('click', () => {
  container.append(btn.cloneNode(true))
  // Passing false produces a cloned node that keeps only the attributes and the original node
  container.append(btn.cloneNode(false))
})





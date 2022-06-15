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


// Count the number of characters of a textarea
const story = document.getElementById('story')
const counter = document.getElementById('counter')
// const counter = document.querySelector('#counter')

story.addEventListener('input', (e) => {
  target = e.target

  const maxLength = target.getAttribute('maxLength')

  const currentLength = target.value.length;

  counter.textContent = `${currentLength}/${maxLength}`
})


// Create an element
// Create new text node
function addTextNode(text) {
  const createText = document.createTextNode(text)
  div.appendChild(createText)
}
btn.addEventListener('click', () => {
  addTextNode('new text node')
})


// Detect clicks outside of an element
document.addEventListener('click', (e) => {
  const isClickedOutside = !btn.contains(e.target)
  if (isClickedOutside) {
    console.log('outside')
  } else {
    console.log('inside')
  }
})


// Detect if an element is focused
const hasFocus = document.activeElement
if (div === hasFocus) {
  console.log('focused')
} else {
  console.log('Not focused')
}
// Not focused


// Detect internet explorer browser
const isIe = function () {
  const ua = window.navigator.userAgent
  return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1
  // note: IE 8 = Trident/4.0; IE 11 = Trident/7.0
}
// The documentMode property is deprecated. Do NOT use it.
// The documentMode only works in Internet Explorer.
// All other browsers return undefined.
const isIE = !!document.documentMode
// note: ! => cast to a boolean, so !! => truthy boolean
// note: all browsers return undefined, so it will be false expected IE

// const isIE = Boolean(document.documentMode)
console.log(isIE) // false


// Detect mac OS browser
// console.log(navigator.platform)
const isMacBrowser = /Mac|iPad|iPhone|iPad/.test(navigator.platform)

console.log(isMacBrowser) // false
//
// function iOS() {
//   return [
//     'iPad Simulator',
//     'iPhone Simulator',
//     'iPod Simulator',
//     'iPad',
//     'iPhone',
//     'iPod'
//   ].includes(navigator.platform)
//     // iPad on iOS 13 detection
//     || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
// }
// console.log(iOS()) // false


// Detect mobile browsers
// 1. Check userAgent(not recomended)
// console.log(navigator.userAgent)
// const isMobile = /Android|BlackBerry|iPad|iPod|iPhone|webOS/i.test(navigator.userAgent);
// I don't recommend this approach because the server can send a fake user agent.
// 2. Use feature detection
const isMobile = function () {
  const match = window.matchMedia('(pointer:coarse)')
  return match && match.matches
}
// console.log(window.matchMedia('(min-width: 1440px)'))
// note: matches is property
// note: We can't rely on the screen size because the mobile devices are getting bigger.

// another agenda: about hover
console.log(window.matchMedia('(any-pointer: coarse)').matches) // false


// Detect the dark mode
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode) // false

// Determine the height and width of an element
function determineSize(ele) {
  const styles = window.getComputedStyle(ele)
  // The size without padding and border
  const height = ele.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom)
  const width = ele.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight)
  // return `${height}, ${width}`

  // The size include padding
  const clientHeight = ele.clientHeight
  const clientWidth = ele.clientWidth

  // The size include paading and border
  const offsetHeight = ele.offsetHeight
  const offsetWidth = ele.offsetWidth

  // The size include padding, border and margin
  const heightWithMargin = ele.offsetHeight + parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
  const widthWithMargin = ele.offsetWidth + parseFloat(styles.marginLeft) + parseFloat(styles.marginRight)

}
console.log(determineSize(div))
console.log(determineSize(btn))


// Distinguish between left and right mouse clicks
p.addEventListener('mousedown', (e) => {
  console.log(e.button)
  // e.button === 0: the left button is clicked
  // e.button === 1: the middle button is clicked
  // e.button === 2: the right button is clicked
  // e.button === 3: the `Browser Back` button is clicked
  // e.button === 4: the `Browser Forward` button is clicked
})


// Execute code when the document is ready
const ready = function (cb) {
  // check if the 'document' is loaded completely
  // note: loading/interactive/complete
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', (e) => {
      cb()
    })
    : cd()
}
// usage
ready(function () {
  // Do something when the document is ready
  console.log('It is ready!')
})


// Get CSS styles of an element
const styles = window.getComputedStyle(div, null)
let bgColor = styles.backgroundColor
// For the style that has a vendor prefix which starts with a hyphen (-), we can get the style value by passing the style:
const textSizeAdjust = styles['-webkit-text-size-adjust']
// The getPropertyValue method produces the same result:
// bgColor = styles.getPropertyValue('background-color')

console.log(bgColor + ', ' + textSizeAdjust) // rgba(0, 0, 0, 0), auto


// Get or set the document title
const title = document.title
console.log(title)


// Get or set the HTML of an element
const contentOfDiv = div.innerHTML
// console.log(contentOfDiv)
// div.innerHTML = '<h1>A replacement</h1>'


// Get, set and remove attributes
const anchor = document.querySelector('a')
const linkTitle = anchor.getAttribute('title')
console.log(linkTitle)
anchor.removeAttribute('title')
console.log(anchor.removeAttribute('title')) // undefined
// Set the attribute's value
story.setAttribute('style', 'width: 300px; height: 150px')


// Get, set and remove data attributes
// Set the data attribute's value
p.setAttribute('data-agenda', '1')
// or
p.dataset.agenda = '1'

// Get the data attribute's value
const agendaId = p.getAttribute('data-agenda')
console.log(agendaId) // 1
// or
const agenda = p.dataset.agenda
console.log(agenda) // 1

p.removeAttribute('data-agenda')
// or
delete p.dataset.agenda
// Note that calling delete ele.dataset doesn't remove all data attributes.


// Get siblings of an element
const preSibling = p.previousSibling
console.log(preSibling)
const nextSibling = p.nextSibling
console.log(nextSibling)
// Get all siblings
const parent = p.parentNode
const siblings = [].slice.call(parent.children).filter((child) => {
  return child !== p
})
console.log(parent)
console.log(siblings)
//
// const siblings = Array.from(parent.children)
// console.log(siblings.filter((child) => child !== p))


// small test for this
btn.addEventListener('click', eventHandler)
function eventHandler() {
  this.disabled = true

  setTimeout(() => {
    this.disabled = false
    console.log(this)
  }, 3000)
}


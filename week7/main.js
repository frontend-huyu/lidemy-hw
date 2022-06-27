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
    : cb()
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


// Get size of the selected file
// const fileElement = document.getElementById('upload')
// const sizeElement = document.getElementById('size')

// fileElement.addEventListener('change', function (e) {
//   const files = e.target.files
//   console.log(files)
//   if (files.length === 0) {
//     sizeElement.innerHTML = ''
//     sizeElement.style.display = 'none'
//   } else {
//     // sizeElement.innerHTML = `${files[0].size}`

//     // Display a readable size
//     const formatFileSize = function (bytes) {
//       const suffixes = ['B', 'kB', 'MB', 'GB', 'TB']
//       const i = Math.floor(Math.log(bytes) / Math.log(1024))
//       // console.log(i)
//       // console.log(bytes / Math.pow(1024, i).toFixed(2))
//       // bytes = 0, i => -Infinity
//       if (bytes === 0) return '0 B'
//       return `${bytes / Math.pow(1024, i).toFixed(2)} ${suffixes[i]}`
//     }
//     sizeElement.innerHTML = formatFileSize(files[0].size)
//     sizeElement.style.display = 'block'
//   }
// })

// Demo
document.addEventListener('DOMContentLoaded', function () {
  const fileElement = document.getElementById('upload')
  const sizeElement = document.getElementById('size')

  // covert the file size
  const formatFileSize = function (bytes) {
    const suffixes = ['B', 'kB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    if (bytes === 0) {
      fileElement.value = ''
      return '0 B'
    }
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${suffixes[i]}`
  }

  // clear input
  const clear = function () {
    fileElement.value = ''
    sizeElement.innerHTML = ''
    sizeElement.style.display = 'none'
  }

  fileElement.addEventListener('change', function (e) {
    const files = e.target.files
    // if if user doesn't choose any file, size & type will error, and files.length can't be printed
    // const size = files[0].size
    // const type = files[0].type
    // console.log(files.length)
    /*
    Uncaught TypeError: Cannot read properties of undefined (reading 'size') at HTMLInputElement.<anonymous>
    */


    // Hide the size element if user doesn't choose any file
    if (files.length === 0) {
      clear()
      return false
    } else {
      // if user choose file
      const size = files[0].size
      const type = files[0].type

      // check file size, type
      if (Math.floor(size / Math.pow(1024, 2)) >= 1) {
        alert('Please make sure your file is less than 1 MB.')
        clear()
        return false
      } else if (!type.includes('image')) {
        alert('Please make sure your file is in png or jpg format.')
        clear()
        return false
      } else {
        sizeElement.innerHTML = formatFileSize(size)
        sizeElement.style.display = 'block'
      }
    }
  })
})


// Get the closest element by given selector
// 1. Use the native closest() method
// const result = btn.closest('.container') // div.container
// const result = btn.closest('.content') // null
// const result = btn.closest('.fisrt-agenda') // null
// console.log(result)
// note: element.closest() returns the closest ancestor
// Note that the closest method isn't supported in IE.

// 2. Traverse up until find the matching element
const match = function (ele, selector) {
  return (
    ele.matches ||
    ele.matchesSelector ||
    ele.msMatchesSelector ||
    ele.mozMatchesSelector ||
    ele.webkitMatchesSelector ||
    ele.oMatchesSelector
  ).call(ele, selector)
}

// Find the closest element to 'ele' and matches the 'selector'
const closest = function (ele, selector) {
  let e = ele
  while (e) {
    if (matches(e, selector)) {
      break
    }
    e = e.parentNode
  }
  return e
}


// Get the document height and width
// Full height, including the scroll part
const fullHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
)

// Full width, including the scroll part
const fullWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.body.clientWidth,
  document.documentElement.clientWidth
)
// console.log(fullHeight, fullWidth)


// Get the parent node of an element
// const parent = ele.parentNode


// Get the position of an element relative to another
// const eleRect = ele.getBoundingClientRect()
// const targetRect = ele.getBoundingClientRect()

// const top = eleRect.top - targetRect.top
// const left = eleRect.left - targetRect.left


// Get the top, left coordinates of the element
// const rect = ele.getBoundingClientRect()
// const top = rect.top + document.body.scrollTop
// const left = rect.left + document.body.scrollLeft


// Get the selected text
// btn.addEventListener('click', function (e) {
//   const selectedText = window.getSelection().toString()
//   alert(selectedText)
// })


// Get the size of an image
// Image is already loaded
// const image = document.querySelector('...')
// // Get the original size
// const naturalWidth = image.naturalWidth
// const naturalHeight = image.naturalHeight
// // Get the scaled size
// const width = image.width
// const height = image.height

// Image is not loaded yet
const image = document.createElement('img')
image.addEventListener('load', function (e) {
  // Get the size
  const width = e.target.width
  const height = e.target.height
})
// Set the source
image.src = '/path/to/image.png'

// We can use a Promise to turn the snippet to a reusable function:
const CalculateSize = function (url) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img')
    image.addEventListener('load', function (e) {
      resolve({
        width: e.target.width,
        height: e.target.height
      })
    })
    image.addEventListener('error', function () {
      reject()
    })
    image.src = url
  })
}

CalculateSize('/path/to/image.png').then(function (data) {
  const width = data.width
  const height = data.height
})

// Use case
// First, we need to get the selected file, and then load it via FileReader:
const avatarEle = document.getElementById('avatar')
const sizeEle = document.getElementById('img-size')

avatarEle.addEventListener('change', function (e) {
  // get the selected file
  const file = e.target.files[0]
  // console.log(file)
  // console.log(e.target)
  const reader = new FileReader()
  reader.readAsDataURL(file)

  // progress events: loadstart, progress, error, abort, load, loadend
  // load: fires only when all data has been successfully read.
  // loadend: fires when the object has finished transferring data. Always fires and will always fire after error, abort, or load.
  reader.addEventListener('loadend', function (e) {
    const src = e.target.result
    // console.log(e.target)

    CalculateSize(src).then(function (data) {
      const width = data.width
      const height = data.height
      sizeEle.innerHTML = `${width} x ${height}`
    })
  })
})


// Get the text content of an element
// Returns the raw text content of the ele element and its children. All the HTML tags are excluded.
const text = container.textContent
// console.log(text)


// Go back to the previous page
// history.back()
// or
// history.go(-1)
// note: It has the same effect as calling history.go(-1). If there is no previous page, this method call does nothing.


// Insert an element after or before other element
// Insert after
// refEle.parentNode.insertBefore(ele, refEle.nextSibling)
// or
// refEle.insertAdjacentElement('afterend', ele)

// Insert before
// refEle.parentNode.insertBefore(ele, refEle)
// or
// refEle.insertAdjacentElement('beforebegin', ele)


// Insert given HTML after or before an element
// Insert after
// ele.insertAdjacentHTML('afterend', html)

// Insert before
// ele.insertAdjacentHTML('beforebegin', html)


// Loop over a nodelist
// 1. Use the ES6 spread operator
// const elements = document.querySelectorAll('...')
// [...elements].forEach(function (ele) {
//   // ...
// })

// 2. Use the Array methods
// 'Array.from' is not supported on IE
// Array.from(elements).forEach(function (ele) {

// })
// or
// [].forEach.call(elements, function (ele) {

// })
// or
// [].slice.call(elements, 0).forEach(function (ele) {

// })

// 3. Use the forEach method
// If you don't have to support Internet Explorer, then use the forEach method:
// elements.forEach(function (ele) {

// })


// Prepend to an element
// target.insertBefore(ele, target.firstChild)


// Press Shift and Enter for a new line
const message = document.getElementById('message')

// To prevent the default behavior of pressing the Enter key, we can handle the keydown event:
message.addEventListener('keydown', function (e) {
  // Get the code of pressed key
  // const keyCode = e.which || e.keyCode
  // note: 'which' and 'keyCode' both are deprecated

  // Code values on Windows =>
  // ShiftLeft: 0x002A; ShiftRight: 0x0036
  // Code values on Mac =>
  // ShiftLeft: kVK_Shift; ShiftRight: kVK_RightShift
  // Code values on Linux (X11) =>
  // ShiftLeft: 0x0032; ShiftRight: 0x003E
  // Code values on Firefox for Android  =>
  // ShiftLeft: 0x002A; ShiftRight: 0x0036

  // or KeyboardEvent.key
  const keyDown = e.key
  console.log(keyDown)

  // user can not use 'Enter' to generate a new line
  // press 'Enter' + not 'Shift' key will stop
  // KeyboardEvent.shiftKey => true/false
  if (keyDown === 'Enter' && !e.shiftKey) {
    // Don't generate a new line
    e.preventDefault()

    // Do something else such as send the message to back-end
  }
})
// note: event keys are the same on windows and mac, but not sure on other OS or browser


// Prevent body from scrolling when opening a modal
// Disable scrolling on the 'body' element when opening a modal
// document.body.style.overflow = 'hidden'

// Allow to scroll when closing the modal
// document.body.style.removeProperty('overflow')


// Prevent the default action of an event
// 1. Return false for the on<event>
// ele.onclick = function (e) {
//   // Do something
//   return false
// }

// 2. Use the preventDefault() method
// event handlers:
// ele.onclick = function (e) {
//   e.preventDefault()
//   // Do something
// }
// ele.addEventListener('click', function (e) {
//   e.preventDefault()
//   // Do something
// })
// note: use cases are practical


// Prevent the page from scrolling to an element when it is focused
// element.focus({
//   preventScroll: true,
// })
// However, the option is not fully supported in all browsers. 
// IE, Safari, Safari on iOS are not supported 2022/6

// Scroll to the previous point
// This approach works in all browsers. We store the mouse location before calling the focus() method, and then scroll to that location later:
const x = window.scrollX
const y = window.scrollY
// ele.focus()
// Scroll to the previous location
window.scrollTo(x, y)
// note: need more research


// Put cursor at the end of an input
const fullNameEle = document.getElementById('fullName')
editEle = document.getElementById('edit')

editEle.addEventListener('click', function (e) {
  // focus on the full name element
  fullNameEle.focus()

  // Move the cursor to the end
  const length = fullNameEle.value.length
  fullNameEle.setSelectionRange(length, length)
})


// Redirect to another page
// location.href = '/the/new/url'


// Reload the current page
// Reload and keep the POST data
// location.reload()

// Reload and ignore the POST data
// location.href = location.href


// Remove all children of a node
// 1. Empty the inner HTML (not recommended)
// ele.innerHTML = ''

// 2. Remove child nodes
// while (node.firstChild) {
//   node.removeChild(node.firstChild)
// }
// note: there are other way to empty inner HTML, like 'textContent'


// Remove an element
// 1. Use the remove method
// ele.remove();
// Note that the remove method isn't supported in Internet Explorer.

// 2. Use the removeChild method
// if (ele.parentNode) {
//   ele.parentNode.removeChild(ele)
// }


// Replace an element
// The ele will be removed from the DOM tree, and is replaced with newEle:
// ele.parentNode.replaceChild(newEle, ele)


// Replace broken images
// Replace the broken images with an image telling visitors that they are not found:
// // Assume that I want to replace all images on the page
const images = document.querySelectorAll('img')
Array.prototype.forEach.call(images, function (ele) {
  ele.addEventListener('error', function (e) {
    e.target.src = '/path/to/404/image.png'
  })
})


// Resize an iframe to fit its content
// Assume that frame represents the iframe element.
// frame.addEventListener('load', function () {
//   // Get the height of the content
//   const height = frame.contentDocument.body.scrollHeight

//   // Set the height of iframe
//   frame.setAttribute('height', `${height}px`)
// })


// Scroll to an element
// Scroll to the ele element
// ele.scrollIntoView()

// Smoothly scroll
// The behavior option isn't supported in IE and Safari.
// ele.scrollIntoView({ behavior: 'smooth' })

// Good to know
// The similar CSS property which provides the same functionality is
// scroll-behavior: smooth;
// It [is not supported](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior#Browser_compatibility) in IE and Safari.


// Scroll to top of the page
// window.scrollTo(pageX, pageY)

// So, the following code scrolls to top of the page:
// window.scrollTo(0, 0)


// Select an element or list of elements
// Select an element by given ID
const hello = document.getElementById('hello')
console.log(hello) // 
// note: returns an Element object matching the specified ID

// Select elements by class name
let worldList = hello.getElementsByClassName('world')
// note: The Element method getElementsByClassName() returns a live HTMLCollection which contains every descendant element which has the specified class name or names.
// note: The method getElementsByClassName() on the Document interface works essentially the same way, except it acts on the entire document, starting at the document root.
console.log(worldList) // HTMLCollection(3) [div.world, div.world, div.world]

// Select elements by tag name
const span = hello.getElementsByTagName('span')
console.log(span) // HTMLCollection(3) [span, span, span]

// Select elements by CSS selector
worldList = hello.querySelectorAll('div.world')
console.log(worldList) // NodeList(3) [div.world, div.world, div.world]

const oneWorld = hello.querySelector('div.world')
console.log(oneWorld) // returns the first Element within the document that matches the specified selector


// Select the children of an element
const childNodes = hello.childNodes
console.log(childNodes) // NodeList(7) [text, div.world, text, div.world, text, div.world, text]

const first = childNodes[0]
// console.log(first) // #text
const last = childNodes[childNodes.length - 1]

// There are properties to access the first and last child directly:
const firstChild = hello.firstChild
const lastChild = hello.lastChild
console.log(firstChild) // #text


// Select the text content of an element
// The following function selects the text content of the ele element:
const selectText = function (ele) {
  const selection = window.getSelection()
  // returns a Selection object representing the range of text selected by the user or the current position of the caret
  console.log(selection) // Selection {anchorNode: null, anchorOffset: 0, focusNode: null, focusOffset: 0, isCollapsed: true, …}

  const range = document.createRange()
  // returns a new Range object
  // range.setStart(startNode, startOffset);
  // range.setEnd(endNode, endOffset);
  console.log(range) // Range {commonAncestorContainer: document, startContainer: document, startOffset: 0, endContainer: document, endOffset: 0, …}

  range.selectNodeContents(ele)
  // The Range.selectNodeContents() method sets the Range to contain the contents of a Node

  selection.removeAllRanges()
  selection.addRange(range)
}

// selectText(hello)
// selectText(container)
// note: still not realize how to use


// Select the text of a textarea automatically
message.addEventListener('focus', function (e) {
  // select the text
  e.target.select()
})


// Serialize form data into a query string
// The following function serializes the form data which consists of names and values of its fields:
const serialize = function (formEle) {
  // Get all fields
  const fields = Array.prototype.slice.call(formEle.elements, 0)
  return fields
    .map(function (ele) {
      const name = ele.name
      const type = ele.type

      // ignore
      // - field that does not have a name
      // - disable field
      // - `file` input
      // - unselected checkbox/radio
      if (!name || ele.disabled || type === 'file' || (/(checkbox|radio)/.test(type) && !ele.checked)) {
        return ''
      }

      // Multiple select
      if (type === 'select-multiple') {
        return ele.options
          .map(function (opt) {
            return opt.selected ? `${encodeURIComponent(name)}=${encodeURIComponent(opt.value)}` : ''
          })
          .filter(function (item) {
            return item
          })
          .join('&')
      }
      return `${encodeURIComponent(name)}=${encodeURIComponent(ele.value)}`
    })
    .filter(function (item) {
      return item
    })
    .join('&')
}
// note: need an example to display
// note: new FormData(), new URLSearchParams(data).toString(), for...of


// Set CSS style for an element
// ele.style.backgroundColor = 'red'
// ele.style['backgroundColor'] = 'red'
// ele.style['background-color'] = 'red'

// Add new style
// ele.style.cssText += 'background-color: red; color: white'

// Ignore previous style
// ele.style.cssText = 'background-color: red; color: white'

// Remove a CSS style
// ele.style.removeProperty('background-color')
// Dose Not work
// ele.style.removeProperty('backgroundColor')


// Show or hide an element
// Show an element
// ele.style.display = ''
// note: does it means inline(initial value)?

// Hide and element
// ele.style.display = 'none'


// Strip HTML from a given text
// 1. Get text content from a fake element (not recommended)
// const stripHtml = function (html) {
//   // Create new element
//   const ele = document.createElement('div')

//   // Set its HTML
//   ele.innerHTML = html

//   // Return the text only
//   return ele.textContent || ''
// }
// This approach isn't recommended because it can cause a security issue if the input html consists of special tags, such as <script>. However, we can prevent the html from being executed by replacing the div tag with textarea:
// const stripHtml = function (html) {
//   const ele = document.createElement('textarea')
//   ele.innerHTML = html
//   return ele.textContent || ''
// }

// 2. Use DOMParser
// const stripHtml = function (html) {
//   const doc = new DOMParser().parseFromString(html, 'text/html')
//   return doc.body.textContent || ''
// }

// 3. Use template
// The <template> tag holds a HTML content that is not to be rendered immediately. However, this is not supported on older browser such as IE 11.
const stripHtml = function (html) {
  const ele = document.createElement('template')
  ele.innerHTML = html
  return ele.content.textContent || ''
}
// note: be careful of tags like <script>


// Submit a form with Ajax
// The following function submits the data of formEle to the back-end using an Ajax request:
const submit = function (formEle) {
  return new Promise(function (resolve, reject) {
    // Serialize form data
    // See https://htmldom.dev/serialize-form-data-into-a-query-string
    const params = serialize(formEle)

    // Create new Ajax request
    const req = new XMLHttpRequest()
    req.open('POST', formEle.action, true)
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')

    // Handle the events
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        resolve(req.responseText)
      }
    }
    req.onerror = function () {
      reject()
    }

    // Send it
    req.send(params)
  })
}

// Usage
const formEle = document.getElementById('...')
submit(formEle).then(function (response) {
  // `response` is what we got from the back-end
  // We can parse it if the server returns a JSON
  const data = JSON.parse(response)
})

// note: do more research and practices, it is a necessary and helpful solution


// Swap two nodes
const swap = function (nodeA, nodeB) {
  const parentA = nodeA.parentNode
  const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling

  // Move 'nodeA' to before the 'nodeB'
  nodeB.parentNode.insertBefore(nodeA, nodeB)

  // Move 'nodeB' to before the sibling of 'nodeA'
  parentA.insertBefore(nodeB, siblingA)
}


// Toggle an element
const toggle = function (ele) {
  const display = ele.style.display
  ele.style.display = display === 'none' ? 'block' : 'none'
}


// Toggle password visibility
// In order to show the password, we turn the password element to an usual textbox whose type attribute is text:
const passwordEle = document.getElementById('password')
const toggleEle = document.getElementById('toggle')

toggleEle.addEventListener('click', function () {
  const type = passwordEle.getAttribute('type')

  passwordEle.setAttribute(
    'type',
    // Switch it to a text field if it's a password field
    // current, and vice versa
    type === 'password' ? 'text' : 'password'
  )
})


// Trigger an event
// Trigger event for inputs
// There are some special events that are available as the method's element. You can call them directly such as following:
// For text box and textarea
// ele.focus()
// ele.blur()
// note: The HTMLElement.blur() method removes keyboard focus from the current element.

// For form element
// formEle.reset()
// formEle.submit()
// note: The HTMLFormElement.reset() method restores a form element's default values. This method does the same thing as clicking the form's <input type="reset"> control.

// For any element
// ele.click()


// Trigger a native event
// const trigger = function (ele, eventName) {
//   const e = document.createEvent('HTMLEvents')
//   e.initEvent(eventName, true, false)
//   // Deprecated, it does not be supported in Node.js
//   ele.dispatchEvent(e)
// }

// You can trigger the change, keyup, mousedown and more by calling
// trigger(ele, 'mousedown')

// Trigger a custom event
// The sample code below triggers a custom event named hello with a data of { message: 'Hello World' }:
// const e = document.createEvent('CustomEvent')
// e.initCustomEvent('hello', true, true, { message: 'Hello World' })
// Deprecated, it does not be supported in Node.js
// Trigger the event
// ele.dispatchEvent(e)


// Unwrap an element
// const parent = ele.parentNode

// Move all children node to the parent
// while (ele.firstChild) {
//   parent.insertBefore(ele.firstChild, ele)
// }

// 'ele' becomes an empty element
// Remove it from the parent
// parent.removeChild(ele)


// Upload files with Ajax
// The function below sends selected files from a fileEle element to a back-end:
const upload = function (fileEle, backendUrl) {
  return new Promise(function (resolve, reject) {
    // Get the list of selected files
    const files = fileEle.files

    // Create a new FormData
    const formData = new FormData()

    // Loop over the files
    Array.prototype.forEach.call(files, function (file) {
      formData.append(fileEle.name, file, file.name)
    })

    // Create new Ajax request
    const req = new XMLHttpRequest()
    req.open('POST', backendUrl, true)

    // Handle the events
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        resolve(req.responseText)
      }
    }
    req.onerror = function () {
      reject()
    }

    // Send it
    req.send(formData)
  })
}

// Usage
// We can use the following code inside a click event handler of a button which performs the uploading:
const fileEle = document.getElementById('ajaxUpload')
upload(fileEle, 'paht/to/back-end').then(function (response) {
  // 'response' is what we got from the back-end
  // we can parse it if the server return a JSON
  const data = JSON.parse(response)
})

// Wrap an element around a given element
// First, insert `wrapper` before `ele` in its parent node
ele.parentNode.insertBefore(wrapper, ele)

// And then, turn `ele` into a children of `wrapper`
wrapper.appendChild(ele)
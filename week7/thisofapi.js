// freeze btn 3s
// btn.addEventListener('click', eventHandler)

// function eventHandler() {
//   this.disabled = true
//   console.log(this) // btn

//   setTimeout(function () {
//     this.disabled = false
//     console.log(this) // window
//     // this refers to window
//     // btn won't retrieve
//   }, 3000)
//   console.log(this)  // btn
// }
// // use bind()
// function eventHandler() {
//   this.disabled = true
//   console.log(this) // btn

//   setTimeout(function () {

//     this.disabled = false
//     console.log(this) // btn
//     // this refers to btn
//   }.bind(this), 3000)
//   console.log(this) // btn
// }


// don't know the difference
// btn.addEventListener('click', function eventHandler() {
//   this.disabled = true
//   console.log(this) // btn

//   setTimeout(function () {

//     this.disabled = false
//     console.log(this) // window
//     // this refers to window
//     // but btn will be functional
//   }, 3000)
//   console.log(this)  // btn
// })


// those examples all make btn functional
// example1
// btn.addEventListener('click', () => {
//   this.disabled = true
//   console.log(this) // window

//   setTimeout(function () {
//     this.disabled = false
//     console.log(this) // window
//   }, 3000)
//   console.log(this) // window
// })
// note: it's functional but I don't know why it works

// example2
// const myObject = {
//   a: 1,
//   myMethod: function () {
//     const a = 5
//     console.log(this) // {a: 1, myMethod: ƒ}
//     console.log(this.a) // 1
//     btn.addEventListener('click', () => {
//       this.disabled = true
//       const a = 10
//       console.log(this) // {a: 1, disabled: true, myMethod: ƒ}
//       console.log(this.a) // 1

//       setTimeout(function () {
//         this.disabled = false
//         console.log(this) // window
//       }, 3000)
//       console.log(this) // {a: 1, disabled: true, myMethod: ƒ}
//     })
//   },
// }

// myObject.myMethod()
// {a: 1, myMethod: ƒ}
// {a: 1, disabled: true, myMethod: ƒ}
// {a: 1, disabled: true, myMethod: ƒ}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// example3
// const myObject = {
//   a: 1,
//   myMethod: function () {
//     console.log(this) // {a: 1, myMethod: ƒ}
//     btn.addEventListener('click', () => {
//       this.disabled = true
//       console.log(this) // {a: 1, disabled: true, myMethod: ƒ}

//       setTimeout(() => {
//         this.disabled = false
//         console.log(this) // {a: 1, disabled: false, myMethod: ƒ}
//       }, 3000)
//       console.log(this) // {a: 1, disabled: true, myMethod: ƒ}
//     })
//   }
// }

// myObject.myMethod()
// // {a: 1, myMethod: ƒ}
// // {a: 1, disabled: true, myMethod: ƒ}
// // {a: 1, disabled: true, myMethod: ƒ}
// // {a: 1, disabled: false, myMethod: ƒ}

// example4
// const myObject = {
//   a: 1,
//   myMethod: function () {
//     console.log(this) // {a: 1, myMethod: ƒ}
//     btn.addEventListener('click', () => {
//       this.disabled = true
//       console.log(this) // {a: 1, disabled: true, myMethod: ƒ}

//       setTimeout(function () {
//         this.disabled = false
//         console.log(this) // {a: 1, disabled: false, myMethod: ƒ}
//       }.bind(this), 3000) // this === myObject
//       console.log(this) // {a: 1, disabled: true, myMethod: ƒ}
//     })
//   }
// }

// myObject.myMethod()

// example5
// const myObject = {
//   a: 1,
//   myMethod: function () {
//     console.log(this) // {a: 1, myMethod: ƒ}
//     btn.addEventListener('click', function () {
//       this.disabled = true
//       console.log(this) // <button class="btn" disabled>Add New Column</button>

//       setTimeout(function () {
//         this.disabled = false
//         console.log(this) // <button class="btn">Add New Column</button>
//       }.bind(this), 3000) // this === btn
//       console.log(this) // <button class="btn" disabled>Add New Column</button>
//     })
//   }
// }

// myObject.myMethod()

// example6
const myObject = {
  a: 1,
  myMethod: function () {
    console.log(this) // {a: 1, myMethod: ƒ}
    btn.addEventListener('click', function () {
      this.disabled = true
      console.log(this) // <button class="btn" disabled>Add New Column</button>

      setTimeout(function () {
        this.disabled = false
        console.log(this) // <button class="btn">Add New Column</button>
      }, 3000)
      console.log(this) // <button class="btn" disabled>Add New Column</button>
    })
  },
}

myObject.myMethod()

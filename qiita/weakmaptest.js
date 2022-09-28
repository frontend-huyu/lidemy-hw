// const wm = new WeakMap();
// wm.set(
//   document.getElementById('logo'),
//   { clickedTimes: 0 }
// );

// document.getElementById('logo').addEventListener(
//   'click',
//   function counter() {
//     let logoData = wm.get(document.getElementById('logo'));
//     logoData.clickedTimes++;

//     if (logoData.clickedTimes < 3) {
//       console.log(logoData.clickedTimes);
//     } else {
//       document.getElementById('logo').remove();
//     }

//     if (!document.getElementById('logo')) {
//       console.log(`Logo has been removed, we had clicked ${logoData.clickedTimes} times`);
//       console.log(wm.has(document.getElementById('logo')));
//     }
//   }, false
// );
// 1
// 2
// Logo removed, we had clicked 3 times
// false



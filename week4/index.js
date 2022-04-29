// request GET
// const request = require('request')
// const process = require('process')
// console.log(process.argv)

// request(
//   `https://reqres.in/api/users/${process.argv[2]}`,
//   function (error, response, body) {
//     console.log('body:', body); // Print the HTML for the Google homepage.
//   }
// )

// request POST
// request.post(
//   {
//     url: 'https://reqres.in/api/users/',
//     form: {
//       name: 'huyu',
//       job: 'student'
//     }
//   },
//   function (err, httpResponse, body) {
//     console.log('body:', body)
//   }
// )
// body: {"name":"huyu","job":"student","id":"887","createdAt":"2022-04-28"}
// fake response

// request(
//   `https://reqres.in/api/users/887`,
//   function (error, response, body) {
//     console.log(body);
//   }
// )
// {}
// fake user


// axios GET
const axios = require('axios').default;

// Make a request for a user with a given ID
// axios
//   .get('https://reqres.in/api/users/2')
//   .then(function (response) {
//     // handle success
//     // console.log(response);
//     console.log(response.data.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
/*
{
  id: 2,
  email: 'janet.weaver@reqres.in',
  first_name: 'Janet',
  last_name: 'Weaver',
  avatar: 'https://reqres.in/img/faces/2-image.jpg'
}
*/


// axios POST
// axios
//   .post('https://reqres.in/api/users', {
//     name: 'huyu',
//     job: 'student'
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
/*
{
  name: 'huyu',
  job: 'student',
  id: '383',
  createdAt: '2022-04-28'
}
*/

// function getUsers() {
//   for (let i = 1; i < 13; i++) {
//     axios
//       .get(`https://reqres.in/api/users/${i}`)
//       .then((res) => {
//         // console.log('i:', i)
//         console.log(res.data.data.id)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
// }
// getUsers()

// axios PUT
axios
  .put('https://reqres.in/api/users/2', {
    name: 'huyu',
    job: 'student'
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
/*
{ name: 'huyu', job: 'student', updatedAt: '2022-04-28T23:43:54.570Z' }
*/

import axios from "axios";
import process from "process";
import request from "request";

// const base = 'https://lidemy-http-challenge.herokuapp.com/api/books/'
// const id = Number(process.argv[2])

// axios (can not use)
// axios.post(base, {
//   data: {
//     id: Number(process.argv[2]),
//     name: process.argv[3],
//     ISBN: process.argv[4]
//   }
// }, {
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded'
//   }
// }).then((res) => {
//   console.log(res.config.headers)
// }).catch((err) => {
//   // handle error
//   console.log(err)
// })


// axios({
//   method: 'post',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded'
//   },
//   url: base,
//   data: {
//     id: Number(process.argv[2]),
//     name: process.argv[3],
//     ISBN: process.argv[4]
//   }
// }).get(base)
//   .then((res) => {
//     console.log(res.data)
//   }).catch((err) => {
//     // handle error
//     console.log(err)
//   })


// request
// lv4
// request.post(base,
//   {
//     form: {
//       id: Number(process.argv[2]),
//       name: process.argv[3],
//       ISBN: process.argv[4]
//     }
//   },
//   function (err, res, body) {
//     console.log(res)
//     console.log(body)
//   }
// )

// lv5
// request.delete(base + process.argv[2],
//   function (err, res, body) {
//     console.log(body)
//   }
// )

// lv6 YWRtaW46YWRtaW4xMjM=
const baseUrl = 'https://lidemy-http-challenge.herokuapp.com/api/v2'
const personalInfo = '/me'

// const options = {
//   url: baseUrl + personalInfo,
//   headers: {
//     'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='
//   }
// }

// function callback(err, res, body) {
//   if (!err && res.statusCode == 200) {
//     // console.log(res)
//     const info = JSON.parse(body)
//     console.log(info.email)
//   }
// }

// request(options, callback)

// lv7
// const rmBook = '/books/'
// const options = {
//   url: baseUrl + rmBook + process.argv[2],
//   method: 'Delete',
//   headers: {
//     'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='
//   }
// }

// function callback(err, res, body) {
//   if (!err && res.statusCode == 200) {
//     // console.log(res)
//     const info = JSON.parse(body)
//     console.log(info)
//   }
// }

// request(options, callback)

// lv8
// console.log(encodeURI(process.argv[2]))
const searchBooks = '/books?q='
const books = '/books/'

// const getBooksInfo = {
//   url: encodeURI(baseUrl + searchBooks + process.argv[2]),
//   method: 'GET',
//   headers: {
//     'Authorization': 'Basic YWRtaW46YWRtaW4xMjM='
//   }
// }

// function callback(err, res, body) {
//   // console.log(err)
//   // console.log(res)
//   if (!err && res.statusCode == 200) {
//     // console.log(res)
//     const info = JSON.parse(body)
//     console.log(info)
//   }
// }

// request(getBooksInfo, callback)

// console.log(baseUrl + books + process.argv[2])
// const patchBookInfo = {
//   url: baseUrl + books + process.argv[2],
//   method: 'PATCH',
//   headers: {
//     'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=',
//     // 'content-type': 'application/x-www-form-urlencoded'
//   },
//   form: {
//     ISBN: '9981835423'
//   }
// }

// request(patchBookInfo, callback)

// lv9
// const systemInfo = '/sys_info'
// const getSystemInfo = {
//   url: baseUrl + systemInfo,
//   method: 'GET',
//   headers: {
//     'Authorization': 'Basic YWRtaW46YWRtaW4xMjM=',
//     // 'content-type': 'application/x-www-form-urlencoded'
//     'X-Library-Number': '20',
//     'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)'
//   }
// }

// request(getSystemInfo, callback)

// lv10 1A2B

// lv11
const baseApi3 = 'https://lidemy-http-challenge.herokuapp.com/api/v3'
// const hello = '/hello'
// const sayHello = {
//   url: baseApi3 + hello,
//   method: 'GET',
//   headers: {
//     'origin': 'lidemy.com'
//   }
// }

// function callback(err, res, body) {
//   // console.log(err)
//   // console.log(res)
//   if (!err && res.statusCode == 200) {
//     // console.log(res)
//     // const info = JSON.parse(body)
//     console.log(body)
//   }
// }

// request(sayHello, callback)

// lv12
const deliverToken = '/deliver_token?token='
const getDeliverToken = {
  url: baseApi3 + deliverToken,
  method: 'GET',
  headers: {
    'origin': 'lidemy.com'
  }
}

function callback(err, res, body) {
  // console.log(err)
  // console.log(res)
  if (!err && res.statusCode == 200) {
    // console.log(res)
    console.log(body)
  }
}

// res.request.href (the same result)
// const getToken = {
//   url: 'https://lidemy-http-challenge.herokuapp.com/api/v3/deliver_token_result',
//   method: 'GET',
// }


// request(getDeliverToken, callback)
// request(getToken, callback)
// note: can not find redirect info, so I clear lv12 with Chrome devTool

// lv13
// counterfeit 'X-Forwarded-For'
// note: Express app.set('trust proxy', true)
const logs = '/logs'
const getLogs = {
  url: baseApi3 + logs,
  method: 'GET',
  headers: {
    'origin': 'lidemy.com',
    'X-Forwarded-For': '116.50.163.67'
  }
}

// request(getLogs, callback)

// lv14
const index = '/index'
const getGoogleSeo = {
  url: baseApi3 + index,
  method: 'GET',
  headers: {
    'origin': 'lidemy.com',
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
  }
}

request(getGoogleSeo, callback)
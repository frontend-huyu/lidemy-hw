// twitch developers -> console -> application -> clientID & clientSecret


/* use powershell
-> [environment]::setEnvironmentVariable('SCOOP','D:\Applications\Scoop','User')
-> $env:SCOOP='D:\Applications\Scoop'
-> iex (new-object net.webclient).downloadstring('https://get.scoop.sh')

-> scoop bucket add twitch https://github.com/twitchdev/scoop-bucket.git
-> scoop install twitch-cli
*/

// Get top games
/*
$ curl -X GET "https://api.twitch.tv/helix/games/top" -H "Authorization: Bearer App Access Token" -H "Client-Id: "
*/
// -X: specify HTTP Method
// -H: add or HTTP Header

// import request from "request";

// const options = {
//   url: 'https://api.twitch.tv/helix/games/top',
//   headers: {
//     'User-Agent': 'request',
//     'Client-Id': '',
//     'Authorization': 'Bearer ',
//     'Accept': 'application/vnd.twitchtv.v5+json'
//   }
// }

// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     // console.log(response.request.headers)
//     const info = JSON.parse(body)
//     info.data.forEach(element => {
//       console.log(element.id + ' ' + element.name)
//     })
//   }
// }

// request(options, callback)

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.twitch.tv/helix/games',
  timeout: 1000,
  headers: {
    // 'User-Agent': 'axios/0.27.2'
    'Client-Id': '',
    'Authorization': 'Bearer ',
    // 'Accept': 'application/json, text/plain, */*',
  }
})


instance
  .get('/top')
  .then((res) => {
    // console.log(res.config.headers)
    // console.log(res.data)
    res.data.data.forEach(element => {
      console.log(element.id + ' ' + element.name)
    })
  })
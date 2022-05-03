import request from "request";
import process from "process";

// League of Legends
const gameName = process.argv[2]
const headers = {
  'User-Agent': 'request',
  'Client-Id': '',
  'Authorization': 'Bearer ',
  'Accept': 'application/vnd.twitchtv.v5+json'
}

const options = {
  url: 'https://api.twitch.tv/helix/games?name=' + gameName,
  headers: headers,
}

function callback(err, res, body) {
  if (!err && res.statusCode == 200) {
    const info = JSON.parse(body)
    // console.log(info.data[0].id)
    getStreams(info.data[0].id)
  }
}

function getStreams(gameID) {
  request({
    url: 'https://api.twitch.tv/helix/streams?first=100&game_id=' + gameID,
    headers: headers,
  }, (err, res, body) => {
    if (!err && res.statusCode == 200) {
      const info = JSON.parse(body)
      info.data.forEach(element => {
        console.log(
          `User Name: ${element.user_name}
User ID: ${element.user_id}`)
      });
    }
  })
}

request(options, callback)


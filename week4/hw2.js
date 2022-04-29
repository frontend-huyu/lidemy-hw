const axios = require('axios').default;
const process = require('process')
// note: require/import's performance

const baseUrl = 'https://lidemy-book-store.herokuapp.com/books'



if (process.argv[2] === 'list') {
  axios.get(baseUrl + '?_limit=20')
    .then((res) => {
      // handle success
      for (let i = 0; i < 20; i++) {
        console.log(res.data[i].id, res.data[i].name)
      }
    })
    .catch((err) => {
      // handle error
      console.log(err)
    })
}

if (process.argv[2] === 'read') {
  axios.get(baseUrl + '/' + process.argv[3])
    .then((res) => {
      // handle success
      console.log(res.data.id, res.data.name)
    })
    .catch((err) => {
      // handle error
      console.log(err)
    })
}

if (process.argv[2] === 'delete') {
  axios.delete(baseUrl + '/' + process.argv[3])
    .then((res) => {
      // handle success
      console.log(res.data)
    })
    .catch((err) => {
      // handle error
      console.log(err)
    })
}

if (process.argv[2] === 'create') {
  axios({
    method: 'post',
    url: baseUrl,
    data: {
      id: Number(process.argv[3]),
      name: process.argv[4]
    }
  });
}

if (process.argv[2] === 'update') {
  axios({
    method: 'patch',
    url: baseUrl + '/' + process.argv[3],
    data: {
      name: process.argv[4]
    }
  });
}


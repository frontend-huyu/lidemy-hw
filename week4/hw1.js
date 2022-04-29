const axios = require('axios').default;
const baseUrl = 'https://lidemy-book-store.herokuapp.com'
const books = '/books'


axios.get(baseUrl + books + '?_limit=10')
  .then((res) => {
    // handle success
    for (let i = 0; i < 10; i++) {
      console.log(res.data[i].id, res.data[i].name)
    }
  })
  .catch((err) => {
    // handle error
    console.log(err)
  })

/*
1 克雷的橋
2 當我想你時，全世界都救不了我
3 我殺的人與殺我的人
4 念念時光真味
5 蜂蜜花火【致年少時光‧限量插畫設計書衣典藏版】
6 苦雨之地
7 你已走遠，我還在練習道別
8 想把餘生的溫柔都給你
9 你是我最熟悉的陌生人
10 偷書賊（25萬本紀念版本）
*/
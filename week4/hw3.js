const axios = require('axios').default;
const process = require('process')

const base = 'https://restcountries.com/v3.1/'
const name = 'name/'
// const capital = 'capital/'
// const currency = 'currency/'
// const code = 'alpha?codes='
// console.log(base + name + process.argv[2])

axios
  .get(base + name + process.argv[2])
  .then(res => {
    // console.log(res)
    res.data.forEach(element => {
      console.log(
        `Country Name: ${element.name.official}
Capital City: ${element.capital}
Currencies: ${Object.keys(element.currencies)}
Country Code: ${element.idd.root}${element.idd.suffixes}
============`)
    });
  })
  .catch((err) => {
    // handle error
    console.log('Can not find this country')
  })

/*
Country Name: Lao People's Democratic Republic
Capital City: Vientiane
Currencies: LAK
Country Code: +856
============
Country Name: Republic of China (Taiwan)
Capital City: Taipei
Currencies: TWD
Country Code: +886
============
Country Name: United Kingdom of Great Britain and Northern Ireland
Capital City: London
Currencies: GBP
Country Code: +44
============
*/

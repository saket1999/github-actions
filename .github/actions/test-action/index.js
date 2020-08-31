const fetch = require('node-fetch');
console.log('Hello World!')

fetch('https://clist.by:443/api/v1/contest/?limit=1000&end__gt=2020-08-08T03%3A07%3A43', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    authorization: 'ApiKey Saket1999:2d2cb1a6ac690f1056748e7a71ddb7c045135d0a'
  },
  body: {
    name: 'Roger',
    age: 8
  }
})
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })
const fetch = require('node-fetch');
var fs = require('fs');

// fetch('https://clist.by:443/api/v1/contest/?limit=1000&end__gt=2020-08-08T03%3A07%3A43', {
//   method: 'GET',
//   headers: {
//     authorization: 'ApiKey Saket1999:2d2cb1a6ac690f1056748e7a71ddb7c045135d0a'
//   }
// })
//   .then(response => {
//     console.log(response.body)
//   })
//   .catch(err => {
//     console.log(err)
//   })

async function getJSON() {
	const response = await fetch('https://clist.by:443/api/v1/contest/?limit=1000&end__gt=2020-08-08T03%3A07%3A43', 
		{
			method: 'GET', 
			headers: 
			{
				authorization: 'ApiKey Saket1999:2d2cb1a6ac690f1056748e7a71ddb7c045135d0a'
			}
		}
		);
	const json = await response.json();
	console.log(json);
	fs.writeFile("data.json", JSON.stringify(json), function(err) {
	    if (err) {
	        console.log(err);
	    }
	});
}

getJSON();
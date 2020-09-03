const fetch = require('node-fetch');
var fs = require('fs');

var d = new Date();
d.setDate(d.getDate()-5);
var n = d.toISOString();
console.log(n);

async function getJSON() {
	const response = await fetch('https://clist.by:443/api/v1/contest/?limit=1000&end__gt=' + n, 
		{
			method: 'GET', 
			headers: 
			{
				authorization: 'ApiKey Saket1999:2d2cb1a6ac690f1056748e7a71ddb7c045135d0a'
			}
		}
		);
	const json = await response.json();
	fs.writeFile("data.json", JSON.stringify(json), function(err) {
	    if (err) {
	        console.log(err);
	    }
	});
}

getJSON();
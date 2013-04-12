var feedType = process.argv[2];
var util = require('util');

console.log("feedType : " + feedType);
var feedObj = require('./lib/' + feedType + 'Feed.js');

var feed = new feedObj(feedType);

setInterval(function() { 
	feed.getData(); 
} , 1000);

var request = require('request'), util = require('util');

function sender(cid) {
	this.cid = cid;
	this.msg = null;
	this.targetUrl = "http://localhost:3000/publish";
	this.senderRequest = request;
}

sender.prototype = {
	initialize : function() { 
		console.log("DEBUG : in sender.initialize method");
	},	
	send : function(msg) {
		console.log("DEBUG : in sender.send method");

		var url = this.getUrl(msg);
		
		this.senderRequest(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body); 
			  }
		});
	},
	getUrl : function(msg) {
		return util.format(this.targetUrl + '?cid=%s&message=%s', this.cid, msg);
	}
}

module.exports = sender;

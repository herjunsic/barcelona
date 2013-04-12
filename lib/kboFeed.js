var util = require('util'), feedBase = require('./feedBase.js'), jquery = require('jquery');

var kboFeed = function(league) {
	this.initialize(league);	
}

util.inherits(kboFeed, feedBase);

var __kbo_proto = kboFeed.prototype;

__kbo_proto.getData = function() { 
	this.db.query("select * from kbo_score", 
                  jquery.proxy(this.sendResult, this)
    );
}

module.exports = kboFeed;

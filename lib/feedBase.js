var config = require('../db-config.js'), dbWrapper = require('./mysqlWrapper.js'), sender = require('./sender.js');
var mysql = require('mysql');

function feedBase() {
	this.league = null;
	this.db = null;
	this.sender = null;
	this.result = null;
}

feedBase.prototype = {
	initialize : function(league) { 
		this.league = league;
		this.db = new dbWrapper.mysqlWrapper(config[this.league]);
		this.sender = new sender(league);
		this.result = {};
	},
    sendResult : function(result) {
        var encodeResult = encodeURIComponent(this.getJson(result));

        if(encodeResult != this.result) {
            this.result = encodeResult;               
            this.sender.send(encodeResult);           
        } else {
            console.log("same result. skip publish");
        }
        
    },
	getJson : function(result) {
		return JSON.stringify(result);	
	}
}

module.exports = feedBase;

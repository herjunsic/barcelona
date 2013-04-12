var util = require('util'), feedBase = require('./feedBase.js'), jquery = require('jquery');                                  
            
var npbFeed = function(league) {
    npbFeed.super_.call(this);
    this.initialize(league);
}       
    
util.inherits(npbFeed, feedBase);
        
var __npb_proto = npbFeed.prototype;
        
__npb_proto.getData = function() { 
    this.db.query("select * from npb_score", 
                  jquery.proxy(this.sendResult, this)
    );

}       

module.exports = npbFeed;

var mysql = require('mysql');
var jquery = require('jquery');

function mysqlWrapper(dbConfig) {
    this.host = dbConfig.host;
    this.port = dbConfig.port;
    this.user = dbConfig.user;
    this.password = dbConfig.password;
    this.database = dbConfig.database;
	this.client = null;

	this.connect();

}

mysqlWrapper.prototype = {
    connect: function() {
		if(this.client == null) {
			this.client = mysql.createClient({
				host: this.host,
				port: this.port,
				user: this.user,
				password: this.password
			});

			// server connection check.
			this.client.ping(function(err, result) {
				if (err) {
					console.log("DB server fail connection : " + err);
				} 
			});
			
			if(this.database != null && this.database != "") {
				this.client.useDatabase(this.database);	
			}	

		} else {
                	console.log('exist connection.');
		}

                console.log('connection success.');
    }
    , disconnect: function() {
		    this.client.end();

               console.log('disconnection success.');
    }
    , query: function(q, callback) {
		    this.client.query(q, function(error, result, fields) {                     
    	        if(error) {                                                                          
    				console.log("query error : " + error);                                                          
                } else {                                                                             
    				console.log("query success : " + q);                                                         
    				callback(result);	
                                    			}                                                                                    
    		});
    }
	, print_result: function(result) {
		console.log(result);                                                         
	}
};

exports.mysqlWrapper = mysqlWrapper;

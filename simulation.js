var config = require('./db-config.js'), mysql = require('mysql'), util = require('util');

var dbConfig = config['test'];
var db = mysql.createClient({               
	host: dbConfig.host,                         
	port: dbConfig.port,                         
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
});                                              

var kbo_score = {};
var npb_score = {};
var rand_value = {};
kbo_score[0] = ["0,0", "1,1", "0O 0S 0B", "kbo_1"];
kbo_score[1] = ["0,0", "1,1", "0O 0S 0B", "kbo_2"];
kbo_score[2] = ["0,0", "1,1", "0O 0S 0B", "kbo_3"];
kbo_score[3] = ["0,0", "1,1", "0O 0S 0B", "kbo_4"];
npb_score[0] = ["0,0", "1,1", "0O 0S 0B", "npb_1"];
npb_score[1] = ["0,0", "1,1", "0O 0S 0B", "npb_2"];
npb_score[2] = ["0,0", "1,1", "0O 0S 0B", "npb_3"];
npb_score[3] = ["0,0", "1,1", "0O 0S 0B", "npb_4"];


rand_value[0] = ["1,0", "1,1", "1O 1S 3B", "kbo_1"];
rand_value[1] = ["0,0", "1,2", "0O 0S 1B", "kbo_2"];
rand_value[2] = ["0,2", "1,1", "0O 1S 2B", "kbo_3"];
rand_value[3] = ["0,0", "1,1", "2O 0S 0B", "kbo_4"];
rand_value[4] = ["2,2", "1,2", "0O 2S 2B", "npb_1"];
rand_value[5] = ["0,1", "1,1", "0O 0S 1B", "npb_2"];
rand_value[6] = ["0,0", "2,2", "1O 1S 0B", "npb_3"];
rand_value[7] = ["3,0", "2,1", "0O 0S 1B", "npb_4"];
rand_value[8] = ["0,1", "2,1", "1O 0S 0B", "kbo_3"];
rand_value[9] = ["4,0", "2,2", "0O 2S 1B", "kbo_1"];
rand_value[10] = ["0,1", "2,1", "2O 2S 2B", "npb_1"];
rand_value[11] = ["2,0", "3,2", "1O 0S 0B", "kbo_2"];
rand_value[12] = ["0,3", "3,1", "2O 2S 3B", "npb_4"];
rand_value[13] = ["0,0", "3,2", "0O 1S 0B", "npb_3"];
rand_value[14] = ["3,2", "3,1", "0O 0S 2B", "npb_3"];
rand_value[15] = ["0,0", "4,1", "2O 0S 0B", "kbo_2"];
rand_value[16] = ["0,0", "4,1", "1O 1S 2B", "npb_4"];
rand_value[17] = ["4,2", "4,2", "0O 0S 3B", "kbo_3"];
rand_value[18] = ["0,0", "4,1", "2O 0S 0B", "kbo_4"];
rand_value[19] = ["5,6", "5,1", "0O 2S 1B", "npb_1"];



var q = function(tbl) {
	return util.format("update %s set  score=?, inning=?,ballcount=? where id=?", tbl); 
}

for(i=0; i < 4 ; i++) {
    db.query(q('kbo_score'),
    kbo_score[i]
    );
    db.query(q('npb_score'),
    npb_score[i]
    );
}

var i = 0;
setInterval(function() { 
    db.query(q('kbo_score'),
        rand_value[i]
    );
    db.query(q('npb_score'),
        rand_value[i]
    );

    i++;
    if(i == 20) {
    i=0;

    }

}, 1000);
/*
var j = 0;
setInterval(function() { 

}, 3000);
*/


var randomNum = function(num,range){
            var k=0, randomNum = [];
            while(k!=num){
                var ramdomNum = Math.floor(Math.random() * range);
                for(var j=0;j<randomNum.length;j++){
                    if(randomNum[j]==ramdomNum) break; 
                }
                if(j==randomNum.length){ randomNum.push(ramdomNum); k++; }
            }
            return randomNum;
        }




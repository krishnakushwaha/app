var express=require('express');
var app=express();
/*app.get('/',function(req,res){


	res.send("welcome krish");
});*/

//var mysql = require('mysql');
var bodyParser=require('body-parser');

/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});
con.connect(function(err) {
    if (err) throw err

});*/
/*app.get('*', function(req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });*/

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());
require('./nodecontrollers/list.js')(app);

/*app.get('/list',function(req,res){
	console.log("/list api run");

		//con.connect(function(err) {
		 // if (err) throw err;
		  con.query("SELECT * FROM customers", function (err, result, fields) {
		  	
		    if (err) throw err;
		    console.log(result);
		    res.json(result);
		  });
		//});
	//var result=[{"name":false,"email":"$343","phone":30},
	          //{"name":true,"email":"$56","phone":76}];
   
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});*/

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255) , phone VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/



var things = require('./nodecontrollers/things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000);
console.log("server is running");
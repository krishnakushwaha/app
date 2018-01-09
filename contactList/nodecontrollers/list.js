/*var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});
con.connect(function(err) {
    if (err) throw err

});*/
var con=require('./database');


module.exports = function(app) {

	app.get('/list',function(req,res){
		console.log("/list api run");

			//con.connect(function(err) {
			 // if (err) throw err;
			// database.getConnection(function(err, mclient) {
				  con.query("SELECT * FROM customers", function (err, result, fields) {
				  	
				    if (err) throw err;
				    console.log(result);
				    res.json(result);
				  });
			// });	  
			//});
		//var result=[{"name":false,"email":"$343","phone":30},
		          //{"name":true,"email":"$56","phone":76}];
	   
	});
	app.post('/contactlist',function(req, res){

	  //console.log(req.body.name);
	   // var jsondata = req.body;
	    //var values = [];

	    /*for(var i=0; i< jsondata.length; i++)
	    values.push([jsondata[i].name,jsondata[i].email,jsondata[i].phone]);
	  console.log(values);*/
	 
			var sql = "INSERT INTO customers (name, email,phone) VALUES ('"+req.body.name+"', '"+req.body.email+"','"+req.body.phone+"')";
			  con.query(sql, function (err, result) {
			    if (err) throw err;
			     res.json(result);
			    console.log("1 record inserted");
			  });
			  

	});

	app.delete('/contactlist/:id',function(req, res){
		 var id=req.params.id;
		 console.log(id);
        
         

			  var sql = "DELETE FROM customers WHERE id = '"+id+"'";
			  con.query(sql, function (err, result) {
			    if (err) throw err;
			    console.log("Number of records deleted: " + result.affectedRows);
			    res.json(result);
			  });
		 	  
	});
	app.get('/contactlist/:id',function(req,res){

	  var id=req.params.id;
	  console.log(id);
      
		  con.query("SELECT * FROM customers WHERE id = '"+id+"'", function (err, result) {
		    if (err) throw err;

		     /*for (var i in result) {
		        console.log('Post Titles: ', result[i]);
		     }*/
		     res.end(JSON.stringify(result));
		    //res.json(result);
		    console.log(JSON.stringify(result));
		  });
		 
	})

	app.put('/contactlist/:id',function(req,res){

	  var id=req.params.id;
	  console.log(req.body.name);
	   console.log(req.body.email);
	    console.log(req.body.phone);
	  
			  var sql = "UPDATE customers SET name = '"+req.body.name+"',email = '"+req.body.email+"',phone = '"+req.body.phone+"' WHERE id = '"+id+"'";
			  con.query(sql, function (err, result) {
			    if (err) throw err;
			    console.log(result.affectedRows + " record(s) updated");
			    res.json(result);
			  });
			  

	})
}
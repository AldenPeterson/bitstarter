var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {

	//  response.send('Hello World2!');
	var buf = new Buffer(1000);
	//var myRawData = fs.createReadStream('index.html');
	var myRawData = fs.read('index.html',buf,0);
	response.send(myRawData.toString());
	

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

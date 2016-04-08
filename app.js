express = require('express');
var app = express();
var fs = require("fs");
var fileName = "foo.txt";

app.get('/', function (req, res) {
	fs.exists(fileName, function(exists) {
	  if (exists) {
		fs.stat(fileName, function(error, stats) {
		  fs.open(fileName, "r", function(error, fd) {
			var buffer = new Buffer(stats.size);

			fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
			  var data = buffer.toString("utf8", 0, buffer.length);

			  console.log(data);
			  fs.close(fd);
			});
		  });
		});
	  }
	});
	res.send("Hello World!")
});

app.get('/tips', function (req, res) {
    var tips = fs.readFile("tips.json", function ( err, tips ) {
        res.setHeader( 'Content-Type', 'application/json' );
        res.send( tips );
    } );
});

app.get('/tipx', function (req, res) {
    var tips = fs.readFile( "tips.json", "utf8", function ( err, tips ) {
        res.send( tips );
    } );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


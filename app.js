express = require('express');
var app = express();
var fs = require("fs");
var FILE_NAME = "tips.json";
var parser = require( "body-parser" );
var urlencodedParser = parser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.send("Hello World!")
});

app.get('/tips', function (req, res) {
    var tips = fs.readFile( FILE_NAME, function ( err, tips ) {
        res.setHeader( 'Content-Type', 'application/json' );
        res.send( tips );
    } );
});

app.post('/tips', urlencodedParser, function (req, res) {
    var tips = fs.readFile( "tips.json", "utf8", function ( err, data ) {
        if ( !req.body )
            return res.sendStatus( 400 );
        data = JSON.parse( data );
        data.tips.push( {
            "name": req.body.name,
            "location": req.body.location,
            "message": req.body.message
        } );
        fs.writeFile( FILE_NAME, JSON.stringify( data ), { encoding: "utf8" }, function () {
            res.send( JSON.stringify( { success: true } ) );
        } );
    } );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


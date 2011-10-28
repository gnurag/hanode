/**
* hanode.js
* High Availability reverse http proxy in Node.
*/

var util = require('util');
var http = require('http');
var fs   = require('fs');

var HANode = new function() {
    var port = 8080;
    
    var requestHandler = function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('success');
	response.end();
    };

    var run = function() {
	server = http.createServer();
	server.addListener('request', requestHandler);
	server.listen(port);
	util.puts('Started server on port ' + port);
    };

    run();
};


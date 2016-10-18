const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/car/bmw') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Info about BMW\n');
    } else if(req.url === '/car/audi') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Info about AUDI");
    }
	else if(req.url === '/car/mercedes-benz') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Info about Mercedes-Benz");
	}
	else if(req.url === '/car/range_rover') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Info about Range Rover");
    }
	else if(req.url === '/car/mazda') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Info about mazda");
    }
	else
	{
		res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Err");
	}
});

httpServer.listen(3032);
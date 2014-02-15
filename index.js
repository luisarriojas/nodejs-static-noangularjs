/*
 =================================================
 nodejs-static-noangularjs
 Copyright (c) 2014 Luis Enrique Arriojas Catalini
 http://opensource.org/licenses/MIT
 =================================================
 */

var http = require("http");
var url = require("url");
var fs = require("fs");
var server;


server = http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    switch (path) {
        case "/":
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("jojoy hola !!");
            res.end();
            break;
        default:
            send404(res);
            break;
    }
});

send404 = function (res) {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write("Error 404 - Pagina no encontrada");
    res.end();
};

server.listen(1337);
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
            fs.readFile(__dirname + "/static/home.html", function (error, data) {
                if (error) return send404Html(res);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data, "utf8");
                res.end();
            });
            break;
        case "/home":
            fs.readFile(__dirname + "/static/home.html", function (error, data) {
                if (error) return send404Html(res);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data, "utf8");
                res.end();
            });
            break;
        case "/about":
            fs.readFile(__dirname + "/static/about.html", function (error, data) {
                if (error) return send404Html(res);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data, "utf8");
                res.end();
            });
            break;
        case "/contact":
            fs.readFile(__dirname + "/static/contact.html", function (error, data) {
                if (error) return send404Html(res);

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data, "utf8");
                res.end();
            });
            break;
        default:
            send404Html(res);
            break;
    }
});

server.listen(1337);

send404Html = function (res) {
    fs.readFile(__dirname + "/static/404.html", function (error, data) {
        if (error) return send404Text(res);

        res.writeHead(404, {"Content-Type": "text/html"});
        res.write(data, "utf8");
        res.end();
    });
};

send404Text = function (res) {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 error - The requested page wasn't found. Sorry.");
    res.end();
};

console.log("Ready!!");
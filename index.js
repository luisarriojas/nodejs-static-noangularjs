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
var error404Url = "/static/404.html";

server = http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    switch (path) {
        /* Router section*/
        case "/":
            callAsset("/static/home.html", res);
        case "/home":
            callAsset("/static/home.html", res);
        case "/about":
            callAsset("/static/about.html", res);
        case "/contact":
            callAsset("/static/contact.html", res);
        /*End of Router section */
        default:
            callAsset(path, res);
    }
});

server.listen(1337);

send404Text = function (res) {
    res.writeHead(404);
    res.write("404 error - The requested page wasn't found. Sorry.");
    res.end();
};

send404Html = function (res) {
    fs.readFile(__dirname + error404Url, function (error, data) {
        if (error) return send404Text(res);

        res.writeHead(404);
        res.write(data);
        res.end();
    });
};

callAsset = function (asset, res) {
    fs.readFile(__dirname + asset, function (error, data) {
        if (error) return send404Html(res);

        res.writeHead(200);
        res.write(data);
        res.end();
    });
};

console.log("Deployed!!");
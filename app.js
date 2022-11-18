// Requirements
var express = require("express");
var http = require("http");
var ejsLayouts = require("express-ejs-layouts");
var hello = require("./routes/hello.js");

// Set up the application
var app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine","ejs");
app.use(ejsLayouts);
app.set("views","./views");
app.use(express.static(__dirname+"/public"));

app.use(hello.routes);

// Run up the server
http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening on port " + app.get("port"));
});
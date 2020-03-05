var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//handlebars
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burger_controller")

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})

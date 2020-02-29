var express = require("express")
var burger = require("../models/burger")
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    })
})

module.exports = router;
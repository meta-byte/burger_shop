var connection = require("../config/connection")

var orm = {
    all: function (table, cb) {
        connection.query("SELECT * FROM " + table + ";", function (err, result) {
            if (err) throw err
            cb(result)
        })
    },
    update: function (bool, id, cb) {
        connection.query("UPDATE burgers SET devoured = " + bool + " WHERE id = " + id + ";", function (err, result) {
            if (err) throw err
            cb(result)
        })

    }


};

module.exports = orm;
var orm = require("../config/orm")

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {

        })
    }

};

module.exports = burger;
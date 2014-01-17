var BaseController = require("./Base"),
    View = require("../views/Base");

module.exports = BaseController.extend({ 
    name: "Beer",
    run: function(req, res, next) {
        var v = new View(res, 'beer');
        v.render({
            title: 'Beer',
            content: 'This is the intro beer page'
        });
    }
});
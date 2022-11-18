var express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.render("helloworld", { name: "Colin" });
});

router.get('/blog', function (req, res) {
    res.render("blog", { name: "Blog for IZI" });
});

router.get('/about', function (req, res) {
    res.render("about", { name: "New story" });
});

module.exports = {
    routes: router
}
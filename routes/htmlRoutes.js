var db = require("../models");
var path = require("path");
const request = require("request");

module.exports = function (app) {
  // Load index page
<<<<<<< HEAD
  app.get("/", function(req, res) {
        res.render("index", {
        msg: "Welcome!"
=======
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
>>>>>>> master
      });
    });


  app.get("/survey", function (req, res) {
    res.render("survey");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.get("/privacypolicy", function (req, res) {
    res.render("privacypolicy");
  });

  app.get("/glass/:search?", function (req, res) {
    var beerSearch = req.params.search;
    var queryURL = "https://api.punkapi.com/v2/beers?beer_name=" + beerSearch;

<<<<<<< HEAD
app.get("/termsofuse", function(req, res) {
  res.render("termsofuse");
});

app.get("/favs", function(req, res) {
  res.render("favs");
});
=======
    if (!beerSearch) {
      queryURL = "https://api.punkapi.com/v2/beers/random";
    }

    request(queryURL, function (err, response, body) {
      var beerInfo = JSON.parse(response.body);
      res.render("glass", { beer: beerInfo[0] });
    });
  });

  app.get("/termsofuse", function (req, res) {
    res.render("termsofuse");
  });
>>>>>>> master
  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/survey", function(req, res) {
      res.render("survey");
  });

  app.get("/login", function(req, res) {
    res.render("login");
});

  app.get("/privacypolicy", function(req, res) {
    res.render("privacypolicy");
});

app.get("/glass", function(req, res) {
  res.render("glass");
});

app.get("/termsofuse", function(req, res) {
  res.render("termsofuse");
});
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
        res.render("index", {
        msg: "Welcome!"
      });
    });


  app.get("/survey", function(req, res) {
      res.render("survey");
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "views/login.html"));
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

app.get("/favs", function(req, res) {
  res.render("favs");
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

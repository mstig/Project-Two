var db = require("../models");

module.exports = function(app) {
  // Get all favorites for testing purposes
  app.get("/api/favs", function(req, res) {
    db.FavList.findAll({}).then(function(dbfavs) {
      res.json(dbfavs);
    });
  });

  // Create a new entry in favorite table, Used to populate with fo data for testing
  app.post("/api/favs", function(req, res) {
    db.FavList.create(req.body).then(function(dbfavs) {
      res.json(dbfavs);
    });
  });

  // get a favorites list by userid
  app.get("/api/favs/:UserID", function(req, res) {
    db.FavList.findOne({ where: { UserID: req.params.UserID } }).then(function(dbfavs) {
      res.json(dbfavs);
    });
  });









};

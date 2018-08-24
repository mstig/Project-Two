module.exports = function(sequelize, DataTypes) {
  var FavList = sequelize.define("FavList", {
    userID: {type : DataTypes.STRING, primaryKey : true },
    favorites: DataTypes.TEXT
  });
  return FavList;
};

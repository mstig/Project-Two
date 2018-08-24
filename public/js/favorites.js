$(document).ready(function() {
  
    // Our initial favorites array

    var activeUser = "101";
    var currentFavs =[];
  
    // This function makes sure the favorites table is clear to avoid repeats then rebuilds the table
    const prepTable = function(){
        $("#favTable").empty().then(buildTable)
    }
   //
    const buildTable = function(){
        for (i = 0; i < currentFavs.length; i++){
          
        }
   }
   //this function grabs the user id on the database and builds an array of the users favorite brew.
    const getFavs  = function() {
      $.get("/api/favs/" + activeUser, function(res) {
        console.log (res.favorites);
        str= res.favorites;
        currentFavs = str.split(",");
        console.log(currentFavs);
       
      }).then(prepTable)
    }
  


getFavs();





  });
  
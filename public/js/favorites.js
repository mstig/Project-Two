$(document).ready(function() {
  
    // Our initial favorites array

    var activeUser = "101";
    var currentFavs =[];
  
    // This function grabs updates the view and adds the 
    const displayFavs = function(){
        console.log("Success"+ userFavs)
        console.log("Success"+ currentFavs)
    }
   
   //this function grabs the user id on the database and builds an array of the users favorite brew.
    const getFavs  = function() {
      $.get("/api/favs/" + activeUser, function(res) {
        console.log (res.favorites);
        str= res.favorites;
        userFavs = str.split(",");
        currentFavs = userFavs;
        console.log(userFavs);
       
      }).then(displayFavs)
    }
  


getFavs();





  });
  
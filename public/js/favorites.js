$(document).ready(function() {
  
    // Our initial favorites array

    var activeUser = "102";
    var currentFavs =[];
//this function grabs the user id on the database and builds an array of the users favorite brew converting them into integers and 
//  sorting for future use.
    const getFavs  = function() {
      $.get("/api/favs/" + activeUser, function(res) {
        console.log (`Working here are User ${activeUser}'s favorites : ${res.favorites}`);
        str= res.favorites;
        currentFavs = str.split(",").map(Number);
        currentFavs.sort(function(a, b){return a-b});
        console.log(currentFavs);
      }).then(buildFavs)
    }
// this function takes the array and builds a search string for our api call then calls the api
    const buildFavs  = function() {
      let x = "";
      x = currentFavs.join('|');
      console.log(x)
      apiCall(x)
      }
// This function calls out to api with our new search term to get the data on our favorite beers
  const apiCall = function(x){
        $.get(`https://api.punkapi.com/v2/beers/?ids=${x}`, function(res) { 
        console.log ("working here is first result:"+res[0].name);
        }).then(prepTable)
      }

// This function makes sure the favorites table is clear to avoid repeats then rebuilds the table
    const prepTable = function(res){
        $("#favTable").empty();
        console.log("Passing res First result: "+res[0].name);
        buildTable(res);
    }
//builds the table with the data passed 
    const buildTable = function(res){
      for(i=0; i<currentFavs.length; i++){
          let x = res[i];
          var row = $('<tr>');
          var idData = $('<td>').text(x.id);
          var nameData = $('<td>').text(x.name).attr('scope', 'col');
          var typeData = $('<td>').text(x.ibu).attr('scope', 'col');
          row.append(idData);
          row.append(nameData);
          row.append(typeData);
          $('#favTable').append(row);
      }   
   }

  // call get favs on page load to start our chain 
    getFavs();

  });
  
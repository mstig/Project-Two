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
          var nameData = $('<td>').text(x.name).attr('scope', 'col').addClass('clickTd').attr("name", x.name);
          var typeData = $('<td>').text(x.tagline).attr('scope', 'col');
          var buttonTD = $('<td>')
          var info = $('<td>')
          var removeBtn = $('<button>').addClass("btn btn-danger rmvBtn").text("Remove").attr("id", x.id)
          var infoBtn = $('<button>').addClass("btn btn-primary infoBtn").text("More Info").attr("name", x.name)
          buttonTD.append(removeBtn)
          info.append(infoBtn)
          row.append(infoBtn);
          row.append(nameData);
          row.append(typeData);
          row.append(buttonTD);
          $('#favTable').append(row);
      }   
   }
  
  
   //this function removes the favorite from the array and re
    const removeFav = function (x){
      console.log("passing id to remove function"+x);
      console.log(currentFavs);
      x = parseInt(x);
      var index = currentFavs.indexOf(x);
      console.log(index+"is index")  
      if (index > -1) {
        currentFavs.splice(index, 1);
        };
        console.log(currentFavs)
        updateDb(currentFavs);   
   }

   // adds a new favorite
   const addFav = function (x){
    console.log("passing id to add function"+x);
    console.log(currentFavs);
    x = parseInt(x);
    var index = currentFavs.indexOf(x);
    console.log(index+"is index")  
    if (index == -1) {
      currentFavs.push(x);
      console.log(currentFavs)
      updateDb(currentFavs); 
    }
    else if (index >= 0) {
      alert("This beer is already on your Favorites list")
    };
 }
  //Update the db with the current Favs
    const  updateDb= function (x) {
        console.log(x);
    $.ajax({
      method: "PUT",
      url: "/api/favs/"+activeUser,
      data: JSON.stringify({"favorites": x.join(', ')}),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
    })
    .then(function() {
        window.location.href = "/favs";
      });
  }

    //on click for buttons
    // this button removes the beer from the users favorites
   $('#favTable').on('click', '.rmvBtn', function(event){
    event.preventDefault();
    var removeId = this.id; 
    console.log(this.id);
    removeFav(removeId)
    });
  // This function returns the user to the info page about the beer 
    $('#favTable').on('click', ".infoBtn",function(event) {
        event.preventDefault();
        console.log(this.name);
        window.location.href = "/glass/"+this.name;
       });
  // this button on the glass page adds the beer to the users favorites
      $('#addLink').click( function (event){
        event.preventDefault();
        newFav=$(this).attr("data");
        addFav(newFav);
      })
  // call get favs on page load to start our chain 
    getFavs();

  });
  
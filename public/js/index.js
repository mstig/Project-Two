

$("#submit").on("click", function () {
  var beerSearch = $("#example-text").val().trim();

  var queryURL = "https://api.punkapi.com/v2/beers?beer_name=" + beerSearch;
  $.ajax({ url: queryURL, method: "GET" }).then(function (response) {
    console.log(response);
    app.get("/glass", function (req, res) {
      console.log("inside app get log");
      res.render("glass");
    });
  });
});


/***************************************
Random button click, doesnt need user input, can attach it to the page load on redirect
**************************************/

function getRandomBeer() {
  $.ajax({ url: "https://api.punkapi.com/v2/beers/random", method: "GET" }).then(function (response) {
    console.log(response);
  });
}


function exampleReturn() {
  //this is a function so you can choose to collapse it in vsc
  //click the minus sign to the right of the line #



  //object always returns as an array, even if its the specific search or random, so use respones[0].whatever
  /*
  We will most likely need to use:
  response[0].name,
             .tagline,
             .description,
             .abv,
             .ibu,
             .ebc,
             .image_url,
             .food_pairing[0] -- this is a 3 item array
  
  The rest of the parameters are specific for home brewing      
  
  EXAMPLE API RETURN:
  [
    {
      "id": 192,
      "name": "Punk IPA 2007 - 2010",
      "tagline": "Post Modern Classic. Spiky. Tropical. Hoppy.",
      "first_brewed": "04/2007",
      "description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
      "image_url": "https://images.punkapi.com/v2/192.png",
      "abv": 6.0,
      "ibu": 60.0,
      "target_fg": 1010.0,
      "target_og": 1056.0,
      "ebc": 17.0,
      "srm": 8.5,
      "ph": 4.4,
      "attenuation_level": 82.14,
      "volume": {
        "value": 20,
        "unit": "liters"
      },
      "boil_volume": {
        "value": 25,
        "unit": "liters"
      },
      "method": {
        "mash_temp": [
          {
            "temp": {
              "value": 65,
              "unit": "celsius"
            },
            "duration": 75
          }
        ],
        "fermentation": {
          "temp": {
            "value": 19.0,
            "unit": "celsius"
          }
        },
        "twist": null
      },
      "ingredients": {
        "malt": [
          {
            "name": "Extra Pale",
            "amount": {
              "value": 5.3,
              "unit": "kilograms"
            }
          }
        ],
        "hops": [
          {
            "name": "Ahtanum",
            "amount": {
              "value": 17.5,
              "unit": "grams"
             },
             "add": "start",
             "attribute": "bitter"
           },
           {
             "name": "Chinook",
             "amount": {
               "value": 15,
               "unit": "grams"
             },
             "add": "start",
             "attribute": "bitter"
           },
           ...
        ],
        "yeast": "Wyeast 1056 - American Ale™"
      },
      "food_pairing": [
        "Spicy carne asada with a pico de gallo sauce",
        "Shredded chicken tacos with a mango chilli lime salsa",
        "Cheesecake with a passion fruit swirl sauce"
      ],
      "brewers_tips": "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
      "contributed_by": "Sam Mason <samjbmason>"
    }
  ]*/
}

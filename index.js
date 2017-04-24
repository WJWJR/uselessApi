/* This assignment will need two (2) get request from the API's
1. Weather.com
2. Instagram.com
*/

var API_KEY ="e3d41d23c6b2a2d269cab92228b83a40";

$(function (){
  var city;
  var country;

  $.getJSON(`http://ipinfo.io`, function(d){
    console.log("assigning the data...")
    city = d.city;
    console.log(city);
    country = d.country;
    console.log(country);

    $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=` + API_KEY, function(wd){
      console.log('got the data,', wd)
      var currentLocation = wd.city.name;
      var currentWeather = wd.list['0'].weather['0'].description;
      var currentHumidity = wd.list['0'].main.humidity;
      var currentWind = wd.list['0'].wind.speed;

      $('.currentLocation').html(currentLocation);

      $('p').hide();

      $('.btn').click(function (){
        $('p').show();

        var cw = $('<p currentWeather></p>').html(currentWeather);
        var ch = $('<p currentHumidity></p>').html(currentHumidity);
        var cwind = $('<p currentWind></p>').html(currentWind);
        $('p').append(cw,ch,cwind);

        $('#city').text(function() {
          var currentLocation = wd.city.name;
          var userInput = $('#city').val();
          console.log(userInput);

          // $(userInput).map(currrentLocation);
        });

        $.getJSON(`http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`, function(data){
          console.log('gots me photos', data)
        })
        })
      })
    })
    // $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?q=' + city ','country+'&APPID=` + API_KEY)
    // call to the weather
  })



// })





// Open Weather Map API
// $('.btn').click(function () {
//   $('#city').text(function () {
//     var userInput = $(this).val();
//     console.log(userInput);
//     var weatherKey = "e3d41d23c6b2a2d269cab92228b83a40";
//     var weatherApi = `http:'//'api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${weatherKey}`;
//     var weatherOptions = {
//       city: "name"
//     };
//
//     $.getJSON(weatherApi, weatherOptions, diplayWeather);
//   });
// })















// //clicking the submit button
// $('h2').hide();
//
// //The idea of what I am looking to do.
// $('.btn').click(function() {
// // console.log('This is clicking')
//
// var city = $(this).text();
//
// $('#city').text(function() {
//   var userInput = $('#city').val();
//   console.log(userInput);
// });
//
//   $('h2').show();
//
//   $('h2').append('weatherDescription;');
//
//
//
//   // $('userInput').text('city');
//   // console.log(userInput);
//
//   // $('userInput').text();
//   // console.log(userInput);
//
//
//   // $('h2').appendTo($('.container'));
// });




// });

// data.city.name is the direct location if the city name.
// $('data.city.name')


// $('#city').text(function () {
//   var city = $('#city').val();
//   alert(city);
// });

// let weatherDescription ='data.list[0].weather[0].description';
// console.log(weatherDescription);


// $('#city').text(function() {
//   var userInput = $('#city').val();
//   console.log(userInput);
// });

// $('h2').hide();

//The idea of what I am looking to do.
// $('.btn').click(function() {
// console.log('This is clicking')

// $('#city').text(function() {
//   var userInput = $('#city').val();
//   console.log(userInput);
// });
//
//   $('h2').show();
//
//   $('h2').append('<p>(weatherDescription)</p>');
//
//
//
//   // $('userInput').text('city');
//   // console.log(userInput);
//
//   // $('userInput').text();
//   // console.log(userInput);
//
//
//   // $('h2').appendTo($('.container'));
// });


/* Testing ideas below */

// Instagram's API
// fetch("https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=" + instaKey +"")
//   .then(response => response.json())
//   .then(useOnAppPage)

// var instaKey = "8ca3de48c4ef4ecda4b992eda45bc81e";
// var instaKey = "53c0515d98d94cd3a96887fe27c95ef6";
// var locationId = "Seattle";
//
//
// $.get(`https://api.instagram.com/v1/locations/${locationId}/media/recent?access_token=${instaKey}`, function(data) {
//   alert("success");
//   console.log(data)
// })


//working
// Open Weather Map API
// $.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${weatherKey}`, function(data) {
//   console.log(data.city.name);
//   let weatherReceived = data.city.name;
//   console.log(weatherReceived);
//   let weatherDescription = data.list[0].weather[0].description;
//   console.log(weatherDescription);

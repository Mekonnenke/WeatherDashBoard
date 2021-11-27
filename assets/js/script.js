
//f1f28d70306b7031d8bcf24dd3ea5674

   
 // https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=f1f28d70306b7031d8bcf24dd3ea5674&units=metric
  
 let allEntries = JSON.parse(localStorage.getItem('all Entries'));
 if (allEntries === null) {
     allEntries = [];
 }
 // last local storage entry to display page on last searched city upon refresh
 let lastEntry = allEntries[(allEntries.length) - 1];
 
 // for loop through array of all to check IF
 
 function getThatWeather(userInput) {
     let apiKey = 'f1f28d70306b7031d8bcf24dd3ea5674';
     let cityNameURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&units=imperial&appid=' + apiKey
     //Current Weather API
     $.ajax({
         url: cityNameURL,
         method: 'GET'
     })
         .then(function (response) {
             console.log(response);
 
             let currentResponse = {
                 cityName: response.city.name,
                 date: (response.list[0].dt_txt).split(" "),
                 weatherIcon: "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png",
                 temperature: Math.round(response.list[0].main.temp),
                 humidity: response.list[0].main.humidity,
                 windSpeed: response.list[0].wind.speed,
                 currentLat: response.city.coord.lat,
                 currentLon: response.city.coord.lon
             }
 
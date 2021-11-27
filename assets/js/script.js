
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
 
 
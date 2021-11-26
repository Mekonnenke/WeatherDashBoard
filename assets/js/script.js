
//f1f28d70306b7031d8bcf24dd3ea5674


$(document).ready(function() {
  
    // to test flag
    const test = false;
  
    // get times from moment
    const now = moment().format('MMMM Do YYYY');
  
    // commented out for test in non-standard hours
    var nowHour24 = moment().format('H');
    var nowHour12 = moment().format('h');
      // set times for tesitng after hours
      if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
      }
    
    var $dateDisplay = $('#currentDay');
      $dateDisplay.text(now);
      console.log("current day",nowHour12);
  })

  
  https://samples.openweathermap.org/data/2.5/weather?q=Toronto&appid=f1f28d70306b7031d8bcf24dd3ea5674

   
  https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=f1f28d70306b7031d8bcf24dd3ea5674&units=metric
  


  const express = request('express');

  const app = express();


  app.listning(3000, function(){

    console.log("server is running on post 3000")

  })
  
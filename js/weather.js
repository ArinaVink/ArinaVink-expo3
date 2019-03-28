function getTempAPIdata() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=delft&units=metric&APPID=19e14188d36447cec206386b930807ea')

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
      console.log(response.visibility);

      document.getElementById('weather').innerHTML = Math.round(response.main.temp,0);

      document.getElementById('weather').style.fontFamily = 'Quicksand, sans-serif';
      document.getElementById('weather').style.color = red;

      if (response.clouds.all == 90) {
        whatIsTheWeather(1);
        console.log('wolk');
      }

    })

    .catch(function (error) {
      //console.error('Request failed', error);
    });
}

getTempAPIdata();

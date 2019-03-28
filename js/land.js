function getWeatherAPIdata() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=delft&units=metric&APPID=19e14188d36447cec206386b930807ea')
    .then(function(response) {
      if(response){
        promiseA = response.json();
        promiseA.then(function(result){
            document.getElementById('land').innerHTML = result.visibility;
            if (result.clouds.all === 90) whatIsTheWeather(1);
            if (result.visibility === 10000){
                    document.getElementById('zonnig'), 6, {y:-500}, {y:0}, {opacity:1};
                    document.getElementById('land').innerHTML = 'Yes, you may land now...';

                    TweenMax.fromTo(document.getElementById('raket'), 6, {y:-500}, {y:0});
                } else if (result.visibility >= 500){
                   document.getElementById('bewolktzonnig'), 6, {y:-500}, {y:0}, {opacity:1};
                   document.getElementById('land').innerHTML = 'Yes, you can land. I recommed you to be careful because visibility is limeted...';
                  TweenMax.fromTo(document.getElementById('raket'), 6, {y:-500}, {y:0});
                } else if (result.visibility <500){
                   document.getElementById('cloud'), 6, {y:-500}, {y:0}, {opacity:1};
                   document.getElementById('land').innerHTML = 'No, you cannot land here right now.';
                   TweenMax.fromTo(document.getElementById('raket'), 6, {y:-500, rotation: 0}, {y:0, rotation:   90});
              }
        });
    }
  });
}

getWeatherAPIdata();

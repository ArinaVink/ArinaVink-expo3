function canWeLand(){
  var land = 'no';
  if(land == 'yes'){
    TweenMax.fromTo(document.getElementById('raket'), 6, {y:-500}, {y:0});
  } else {
    document.getElementById('land').innerHTML = 'No, right now it is not a good time to land...';
    TweenMax.to(document.getElementById('raket'), 0, {opacity:0});
    TweenMax.fromTo(document.getElementById('raketRotate'), 15, {x:-800}, {x:2000});
    TweenMax.to(document.getElementById('raketRotate'), 6, {opacity:1});
  }
  console.log(raketRotate);
}

function whatIsTheWeather(){
  const BEWOLKT =1;
  const BEWOLKTACHTIG =2;
  const VRIJZONNIG =3;
  const ZONNIG =4;
  const REGENT =5;
  const ONWEER =6;
  var meldingSelect = parseInt(document.getElementById('melding').value);
  var meldingTekst = '' ;

  switch(meldingSelect){
  case BEWOLKT:
    TweenMax.fromTo(document.getElementById('cloud'), 6, {y:-500}, {y:0});
    break;
  case BEWOLKTACHTIG:
    TweenMax.fromTo(document.getElementById('zonnigbewolkt'), 6, {y:-500}, {y:0});
    break;
  case ZONNIG:
    weenMax.fromTo(document.getElementById('zonnig'), 6, {y:-500}, {y:0});
    break;
  case REGENT:
    TweenMax.fromTo(document.getElementById('regenen'), 6, {y:-500}, {y:0});
    break;
  case ONWEER:
    TweenMax.fromTo(document.getElementById('onweer'), 6, {y:-500}, {y:0});
    break;
  default:
    meldingTekst = 'Ik heb geen idee wat het weer vandaag doet, ehehe.';
    break;
  }
  document.getElementById('melderTekst').innerHTML = melding;

  //console.log(raketRotate);
}

window.onload = function () {
    canWeLand();
    whatIsTheWeather();
  };

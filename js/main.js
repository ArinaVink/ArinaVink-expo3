function whatIsTheWeather(meldingSelect){
  const BEWOLKT =1;
  const BEWOLKTACHTIG =2;
  const VRIJZONNIG =3;
  const ZONNIG =4;
  const REGENT =5;
  const ONWEER =6;
  var meldingTekst = '';
  console.log(meldingSelect);

  switch(meldingSelect){
  case BEWOLKT:
  console.log('case doet het');
    TweenMax.fromTo(document.getElementById('cloud'), 6, {y:-500}, {y:0}, {opacity:1});
    break;
  case BEWOLKTACHTIG:
    TweenMax.fromTo(document.getElementById('zonnigbewolkt'), 6, {y:-500}, {y:0}, {opacity:1});
    break;
  case ZONNIG:
    TweenMax.fromTo(document.getElementById('zonnig'), 6, {y:-500}, {y:0}, {opacity:1});
    break;
  case REGENT:
    TweenMax.fromTo(document.getElementById('regenen'), 6, {y:-500}, {y:0}, {opacity:1});
    break;
  case ONWEER:
    TweenMax.fromTo(document.getElementById('onweer'), 6, {y:-500}, {y:0}, {opacity:1});
    break;
  default:
    meldingTekst = 'I have no idea what the weather is doing, see for youselves. Ehehe.';
    break;
  }
  document.getElementById('melding').innerHTML = meldingTekst ;

  //console.log(raketRotate);
}

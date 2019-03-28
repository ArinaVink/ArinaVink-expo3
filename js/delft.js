function getDelftAPIdata() {
    fetch('https://ckan.dataplatform.nl/api/action/datastore_search?resource_id=a90c1897-6c48-455f-a474-98097c43d1a7')

    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
      var text = '';
      for (var i =0; i < response.result.records.length; i++) {
        text +=  (response.result.records[i].STRAAT +'<br>')
      }
      document.getElementById('naam').innerHTML = text;

      // kies records array var zetten

      // loop door de array
        // toon 1 voor 1 de titel in popup +=

    })

    .catch(function (error) {
      console.error('Request failed', error);
    });
}

getDelftAPIdata();

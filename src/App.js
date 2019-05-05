import React from 'react';
import './App.css';

//let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.877636,-87.6316811&radius=50&type=restaurant&key=AIzaSyDfnC4P2MMxZmfaBQStsyvvp_Fk80IDHzU';

const nearbySearchTest = () => {
  let mylocation = new window.google.maps.LatLng(41.877636,-87.6316811);
  const radius = 200;

  let requestObj = {
    location: mylocation,
    radius: radius,
    type: [ 'restaurant' ],
  };

  const service = new window.google.maps.places.PlacesService(document.getElementById('root'));
  
  service.nearbySearch(requestObj, function(results, status, pagination) {
    if (status !== 'OK') return;
    
    console.log('********************')
    console.log('Retrieved data:');
    console.log(results.length)
    console.log('********************')
    //console.log(results)
    for (let place in results) {
      console.log(results[place].name)
      // Not all places have rating
      console.log('rating: ' + results[place].rating)
      // Not all places have currently open
      //console.log((results[place].opening_hours.open_now ? 'Currently Open!':'Currently Closed!'))
      console.log(results[place].vicinity)
      console.log('____________________')
    }
    console.log(pagination.hasNextPage)

    if (pagination.hasNextPage) {pagination.nextPage()}
    
    //var elem = document.createElement('img')
    //elem.setAttribute('src', results[1].photos[0].getUrl({maxWidth: 300, maxHeight: 300}));
    //elem.setAttribute('height', '200')
    //elem.setAttribute('width', '300')
    //elem.setAttribute('alt', 'test image')
    //document.getElementById('root').appendChild(elem)
  });
}

nearbySearchTest()

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
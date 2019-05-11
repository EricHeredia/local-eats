import React, { useState } from 'react';
import './App.css';
import GetResults from './components/GetResults';

const App = () => {

const [latLng, setLatLng] = useState([41.7962928, -88.19741479999999])

const input = document.getElementById('autocomplete')
const autocomplete = new window.google.maps.places.Autocomplete(input, 
  {types: ['(regions)'], componentRestrictions: {country: 'US'}})

autocomplete.addListener('place_changed', () => {
  let place = autocomplete.getPlace()

  if (!place.geometry) {
    // Not needed atm
    return
  }
  let latLng = [place.geometry.location.lat(), place.geometry.location.lng()]
  setLatLng(latLng)
})
  console.log('App.js')
  return (
    <div className="App">
      {latLng && <GetResults latLng={latLng}/>}
    </div>
  );
}

export default App;
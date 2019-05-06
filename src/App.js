import React, { useState } from 'react';
import './App.css';
import GetResults from './components/GetResults'

const App = () => {

const [latLng, setLatLng] = useState([41.7962928, -88.19741479999999])

const input = document.getElementById('autocomplete')
let autocomplete = new window.google.maps.places.Autocomplete(input, {types: ['(regions)']})
window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
  let place = autocomplete.getPlace()
  let latLng = [place.geometry.location.lat(), place.geometry.location.lng()]
  setLatLng(latLng)
})


  return (
    <div className="App">
      <GetResults latLng={latLng}/>
    </div>
  );
}

export default App;
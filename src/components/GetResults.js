import React, { useState } from 'react'
import RestarauntRow from './RestarauntRow'

const GetResults = (props) => {
  const [rows, setRows] = useState()
  const [latLng] = useState()

  let mylocation = new window.google.maps.LatLng(props.latLng[0], props.latLng[1]);
  const radius = 2000;

  let requestObj = {
    location: mylocation,
    radius: radius,
    type: [ 'restaurant' ],
  };

  const service = new window.google.maps.places.PlacesService(document.getElementById('google-data'));

    if (latLng !== props.latLng) {
    let rowContainer = []
    service.nearbySearch(requestObj, (results, status, pagination) => {
      if (status !== 'OK') return;

      results.forEach((data) => {

        const restaraunt = {
          key: data.id,
          name: data.name,
          id: data.place_id,
          checked: false
        }
        
        !localStorage.getItem(restaraunt.name) ?
          localStorage.setItem(restaraunt.name, JSON.stringify(restaraunt)):
          console.log('Restaraunt data already saved.')
        
        let createRow = <RestarauntRow key={restaraunt.id} restaraunt={restaraunt} />
        rowContainer.push(createRow)
      })

      setRows(rowContainer)

      //for (let place in results) {
        //console.log(results[place].name)
        //service.getDetails({placeId: results[place].place_id}, function(details, status) {
        //  console.log(status)
        //  console.log('__________________')
        //  console.log(details.name)
        //  console.log(details.formatted_address)
        //  console.log(details.formatted_phone_number)
        //  console.log('Rating: ' + (details.rating ? details.rating:'Not yet rated'))
        //})

      //}

      //console.log(pagination.hasNextPage)
      //if (pagination.hasNextPage) {pagination.nextPage()}

      //var elem = document.createElement('img')
      //elem.setAttribute('src', results[1].photos[0].getUrl({maxWidth: 300, maxHeight: 300}));
      //elem.setAttribute('height', '200')
      //elem.setAttribute('width', '300')
      //elem.setAttribute('alt', 'test image')
      //document.getElementById('root').appendChild(elem)
    })
  }

  return (
    <div>
      {rows}
    </div>
  )
}

export default GetResults
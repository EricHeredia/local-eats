import React, { useState, useEffect } from 'react'
import RestaurantRow from './RestaurantRow'

const GetResults = (props) => {
  const [rows, setRows] = useState()

  let mylocation = new window.google.maps.LatLng(props.latLng[0], props.latLng[1])
  const radius = 2000

  let requestObj = {
    location: mylocation,
    radius: radius,
    type: [ 'restaurant' ],
  }

  const service = new window.google.maps.places.PlacesService(document.getElementById('google-data'))

    let rowContainer = []
    
    useEffect(() => {
      service.nearbySearch(requestObj, (results, status, pagination) => {
        if (status !== 'OK') return

        results.forEach((data) => {

          const restaurant = {
            key: data.id,
            name: data.name,
            id: data.place_id,
            checked: false
          }

          if (!localStorage.getItem(restaurant.name)){
            localStorage.setItem(restaurant.name, JSON.stringify(restaurant))
          }

          let createRow = <RestaurantRow key={restaurant.id} service={service} restaurant={restaurant}/>
          rowContainer.push(createRow)
        })
        setRows(rowContainer)
      })
    }, [props.latLng])

  return (
    <div>
      {rows}
    </div>
  )
}

export default GetResults
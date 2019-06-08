import React, { useState } from 'react'

const RestaurantRow = (props) => {

  let restaurantData = JSON.parse(localStorage.getItem('restaurants'))
  let currentRestaurant = restaurantData.find(obj => obj.name === props.restaurant.name)

  const [checked, setChecked] = useState(currentRestaurant.checked)

  const onCheckChange = () => {
    if (checked) {
      currentRestaurant.checked = !checked
      localStorage.setItem('restaurants', JSON.stringify(restaurantData))
      setChecked(!checked)
    } else {
      currentRestaurant.checked = !checked
      localStorage.setItem('restaurants', JSON.stringify(restaurantData))
      setChecked(!checked)
    }
  }
  
  // Get details of active restaurant
  //const displayDetails = () => {
    //if (!restaurantData.address) {
      //let request = {
        //placeId: restaurantData.id,
        //fields: ['formatted_address', 'formatted_phone_number']
      //}
      //props.service.getDetails(request, (place) => {
        //restaurantData.address = place.formatted_address
        //restaurantData.phone = place.formatted_phone_number
        //localStorage.setItem(restaurantData.name, JSON.stringify(restaurantData))
      //})
    //}
  //}

  console.log('RestaurantRow.js rendered')
  return (
    <label>
      <div id="restaurantRow" style={{'backgroundColor': checked ? "#aaa": "white"}}>
        <input type="radio" id={restaurantData.id} name="rowRadio" style={{display: "none"}}/>
        <input type="checkbox" id="rowCheckbox" onChange={onCheckChange} checked={checked}/>
        
        <h3 id="rowHeader" style={{'color': checked ? '#666':'black'}}>
          {props.restaurant.name}
        </h3>
        
        {checked && <h3 className="been-here">BEEN HERE</h3>}
      </div>
    </label>
  )
}

export default RestaurantRow
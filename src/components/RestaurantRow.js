import React, { useState } from 'react'

const RestaurantRow = (props) => {

  let restaurantData = JSON.parse(localStorage.getItem(props.restaurant.name))

  const [checked, setChecked] = useState(restaurantData.checked)

  const onCheckChange = () => {
    if (checked) {
      restaurantData.checked = !checked
      localStorage.setItem(restaurantData.name, JSON.stringify(restaurantData))
      setChecked(!checked)
    } else {
      restaurantData.checked = !checked
      localStorage.setItem(restaurantData.name, JSON.stringify(restaurantData))
      setChecked(!checked)
    }
  }
  console.log('RestaurantRow.js')
  return (
    <label>
      <div id="restaurantRow" style={{'backgroundColor': checked ? "#aaa": "white"}}>
        <input type="checkbox" id="rowCheckbox" onChange={onCheckChange} checked={checked}/>
        <h3 id="rowHeader" style={{'color': checked? '#666':'black'}}>
          {props.restaurant.name}
        </h3>
        {checked && <h3 className="been-here">BEEN HERE</h3>}
      </div>
    </label>
  )
}

export default RestaurantRow
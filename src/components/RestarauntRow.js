import React, { useState } from 'react'

const RestarauntRow = (props) => {

  const [checked, setChecked] = useState()

  let localData = JSON.parse(localStorage.getItem(props.restaraunt.name))
  
  const beenThere = () => {
    if (localData.checked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }
  
  if (checked == null) {beenThere()}

  const onChangeHandler = () => {
    if (checked) {
      localData.checked = false
      localStorage.setItem(localData.name, JSON.stringify(localData))
      setChecked(false)
    } else {
      localData.checked = true
      localStorage.setItem(localData.name, JSON.stringify(localData))
      setChecked(true)
    }
  }

  return (
    <label>
      <div id="restarauntRow" style={{'background-color': checked ? "#666": "white"}}>
        <input type="checkbox" id="rowCheckbox" onChange={onChangeHandler} checked={checked}/>
        <h3 id="rowHeader">
          {props.restaraunt.name}
        </h3>
      </div>
    </label>
  )
}

export default RestarauntRow
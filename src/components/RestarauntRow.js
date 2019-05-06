import React from 'react'

const RestarauntRow = (props) => {
  return (
    <label>
      <div id="restarauntRow">
        <input type="checkbox" id="rowCheckbox" />
        <h3 id="rowHeader">
          {props.name}
        </h3>
      </div>
    </label>
  )
}

export default RestarauntRow
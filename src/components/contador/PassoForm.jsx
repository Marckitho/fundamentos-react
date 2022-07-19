import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="">Passo: </label>
      <input value={props.passo} onChange={(e) => { props.setPasso(+e.target.value) }} type="number"/>
    </div>
  )
}
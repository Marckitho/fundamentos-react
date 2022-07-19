import React from "react";

export default (props) => {
  return (
    <div className='Mega-input'>
        <label htmlFor="numberQt">Qtd. de Números:</label>
        <input id="numberQt" type="number" value={props.value} onChange={(e) => {
          props.onChange(e.target.value)
        }}></input>
        <button onClick={_ => {
          props.onClick()
        }}>Sortear</button>
    </div>
  )
}
import React from "react";

export default (props) => {
  const [value, setValue] = React.useState('Placeholder')
  const style = { fontSize: '1.4rem', marginBottom: '12px' }

  return (
    <div>
      <h2 style={{ textTransform: 'uppercase' }}>{ value }</h2>
      <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} style={style}/>
    </div>
  )
}
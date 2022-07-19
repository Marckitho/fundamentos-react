import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={ props.inc }>Incrementar +</button>
      <button onClick={ props.dec }>Decrementar -</button>
    </div>
  )
}
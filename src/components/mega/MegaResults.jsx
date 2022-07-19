import React from "react";

export default (props) => {

  return (
    <div className='Mega-results'>
        { props.results.map((n) => {
          return React.cloneElement(
            <div className="Mega-result">{ n }</div>
          )
        }) }
    </div>
  )
}
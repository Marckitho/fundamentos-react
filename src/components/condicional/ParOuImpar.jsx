import React from "react";

export default (props) => {
  const { num } = props
  const isEven = num % 2 === 0

  return (
    <div>
      <p>
        { num } é
        { isEven ? <span> Par</span> : <span> Ímpar</span> }
      </p>
    </div>
  )
}
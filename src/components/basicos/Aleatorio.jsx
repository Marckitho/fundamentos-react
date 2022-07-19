import React from "react"

export default (props) => {
  const number = props.min + Math.random() * (props.max - props.min)
  return (
    <>
      <p>Número Aleatório entre <strong>{ props.min }</strong> e <strong>{ props.max }</strong>: <strong>{ Math.round(number) }</strong></p>
    </>
  )
}
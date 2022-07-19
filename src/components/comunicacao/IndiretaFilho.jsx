import React from "react";

export default (props) => {
  const gerarIdade = () => Math.round(Math.random() * (70 - 50)) + 50
  const gerarNerd = () => Math.random() > .5
  
  return (
    <div>
      <div>Filho</div>
      <button onClick={function (e) {
        props.quandoClicar('Matheus', gerarIdade(), gerarNerd())
      }}>Fornecer Informações</button>
    </div>
  )
}
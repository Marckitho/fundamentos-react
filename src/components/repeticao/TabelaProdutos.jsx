import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css'

export default (props) => {
  const tableJSX = produtos.map(produto => {
    return (
      <tr key={ produto.id }>
        <td>{ produto.id }</td>
        <td>{ produto.produto }</td>
        <td>R$ { produto.preco.toFixed(2) }</td>
      </tr>
    )
  })
  
  return (
    <React.Fragment>
      <table className="TabelaProdutos">
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
        { tableJSX }
      </table>
    </React.Fragment>
  )
}
import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const liList = alunos.map(aluno => {
    return <li> {aluno.id}) {aluno.aluno} - <span style={{ color: aluno.nota >= 7 ? 'green' : 'red' }} >{aluno.nota}</span></li>
  })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        { liList }
      </ul>
    </div>
  )
}
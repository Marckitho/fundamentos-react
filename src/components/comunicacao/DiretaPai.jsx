import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  // const { texto, numero, bool } = {props}
  
  return (
    <div>
      <DiretaFilho texto="Filho" numero={12} bool={true}></DiretaFilho>
      <DiretaFilho texto="Filha" numero={25} bool={false}></DiretaFilho>
    </div>
  )
}
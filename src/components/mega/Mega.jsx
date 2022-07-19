import './Mega.css'
import React, { useState } from "react";

import { generateUniqueNumbers } from "./numberGenerator"

import MegaInput from './MegaInput';
import MegaResults from './MegaResults';

// alert(generateUniqueNumbers(6))

export default (props) => {
  const [value, setValue] = useState(6)
  const [results, setResults] = useState([])

  const generateNumbers = () => {
    setResults(generateUniqueNumbers(value))
  }

  return (
    <div className="Mega">
      <h2>Surpresa da Mega Sena!</h2>
      <MegaInput value={value} onChange={setValue} onClick={generateNumbers}/>
      <MegaResults results={results}/>
    </div>
  )
}
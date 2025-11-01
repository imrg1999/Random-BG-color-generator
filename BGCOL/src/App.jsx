import React, { useState } from 'react'

const App = () => {

  const[bgCol,setBgCol] = useState('#ffffff');

  const colors = [
    '#e52020ff', '#5b30e6ff','#36e777ff','#f6f60cff','#f1830eff',
    '#f33798ff','#1f5cc5ff','#0f662bff','#7d4c0cff'
  ]

  const changeColors =() => {
    const randomColors = colors[Math.floor(Math.random()*colors.length)];
    setBgCol(randomColors);
  }
  

  return (
    <div style={{backgroundColor:bgCol, display:'flex'}}>
      <h1>Random BG COLOR Generator</h1>
      <button onClick={changeColors}>COLORS</button>
      <h3>{bgCol}</h3>
    </div>
  )
}

export default App
import React from "react"
import boxes from "./boxes"
import Box from "./Box"

import "./App.css"

export default function App() {

  const [squares, setSquares] = React.useState(boxes);

  const squareElement = squares.map(square=>(
    // <div style={{backgroundColor:"black"}} className="box" key={square.id}></div> OR
    // <div style={styles} className="box" key={square.id}></div>
      <Box key={square.id} status={square.on} />
  ))

     
    return(
        <main> 
          <h1>Click on a box to change its color</h1>
        {squareElement}
        </main>
    )
}
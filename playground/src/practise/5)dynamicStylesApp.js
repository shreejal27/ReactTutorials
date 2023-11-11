import React from "react"
import boxes from "./boxes"

import "./App.css"

export default function App(props) {

  const [squares, setSquares] = React.useState(boxes);

  const styles = {
    backgroundColor: props.darkMode ? "black" : "white"
  }

  const squareElement = squares.map(square=>(
    // <div style={{backgroundColor:"black"}} className="box" key={square.id}></div> OR
    <div style={styles} className="box" key={square.id}></div>

  ))

     
    return(
        <main> 
          <h1>Click on a box to change its color</h1>
        {squareElement}
        </main>
    )
}
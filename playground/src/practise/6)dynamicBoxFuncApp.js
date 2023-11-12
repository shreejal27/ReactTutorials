import React from "react"
import boxes from "./boxes"
import Box from "./Box"

import "./App.css"

// export default function App() {

//   const [squares, setSquares] = React.useState(boxes);

//   const squareElement = squares.map(square=>(
  //  // <div style={{backgroundColor:"black"}} className="box" key={square.id}></div> OR
   // // <div style={styles} className="box" key={square.id}></div>
//       <Box key={square.id} status={square.on} />
//   ))

     
//     return(
//         <main> 
//           <h1>Click on a box to change its color</h1>
//         {squareElement}
//         </main>
//     )
// }

export default function App() {

  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares(prevSquares => {
      
      const newSquares=[]

      for(let i=0;i<prevSquares.length;i++){
        const currentSquare=prevSquares[i]
        if(currentSquare.id===id){
          const updatedSquare={
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        }else{
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    }
  )}

  const squareElement = squares.map(square=>(
      <Box 
      key={square.id} 
      id={square.id} 
      status={square.on} 
      handleClick={toggle}/>
  ))

     
    return(
        <main> 
          <h1>Click on a box to change its color</h1>
        {squareElement}
        </main>
    )
}
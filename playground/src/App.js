import React from "react"

export default function App() {
  
  let [count, changeCount] = React.useState(0) //array destructuring

  // function handleClick() {
  //   setIsImportant("No") 
    //setIsImportant is a function whose job is to change state
  // }
  function minus() {
   changeCount(count-1)
   //count++ || count -- doesnot work in react
  }
  function plus() {
    // changeCount(count= count +1)
    //dont use equal sign
    changeCount(count+1)
  }
  return (
    <div className="counter">
      {/* <h1 onClick={handleClick}>{isImportant}</h1> */}
      {/* <h1>{result[0]}</h1> */}
      <button onClick={minus}>-</button>
      <h1>{count}</h1>
      <button onClick={plus}>+</button>
    </div>
  );
}



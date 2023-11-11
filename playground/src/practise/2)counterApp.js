import React from "react"
import Count from "./Count"


export default function App() {
  let [count, setCount] = React.useState(0) //array destructuring

  // function handleClick() {
  //   setIsImportant("No") 
  //setIsImportant is a function whose job is to change state
  // }
  function minus() {
    //  setCount(count-1)
    //count++ || count -- doesnot work in react

    //  for best practise use call back function or use this when we need the old value of state to determine the new value of state
    setCount(prevCount => prevCount - 1)
  }
  function plus() {
    // setCount(count= count +1)
    //dont use equal sign
    // setCount(count+1)

    setCount(prevCount => prevCount + 1)
  }
  return (
    <div className="counter">
      <button onClick={minus}>-</button>
      <Count number={count} />
      <button onClick={plus}>+</button>
    </div>
  );
}



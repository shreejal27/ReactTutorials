import React from "react"

export default function App() {

  const [isGoingOut, func] = React.useState(true) //array destructuring
  
  // let isGoingOut = false
  // let answer = isGoingOut ? "Yes" : "No"  writing directly in the code

  function toggle() {
    func(prevCount=> !prevCount)
  }


  return (
    <div className="counter">
      {/* <h1>{answer}</h1> */}
      <div onClick={toggle}>
      <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}



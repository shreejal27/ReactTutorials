import React from "react"
import './App.css';

function App() {
  // const result = React.useState("Yes") 
  // gives us array where the value of first element is "Yes" and the second element is a function 
  // const [whateverWeWant, func] = React.useState("Yes")
   //array destructuring
  const [isImportant, setIsImportant] = React.useState("Yess") //array destructuring

  function handleClick() {
    setIsImportant("No") 
    //setIsImportant is a function whose job is to change state
  }
  return (
    <div className="App">
      <h1 onClick={handleClick}>{isImportant}</h1>
      {/* <h1>{result[0]}</h1> */}
    </div>
  );
}

export default App;

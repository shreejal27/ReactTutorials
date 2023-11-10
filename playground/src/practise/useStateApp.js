function App() {
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    const thingsArray = ["thing1", "thing2", "thing3"]
    // this line will run only one time and will not change

    function addItem(){
        thingsArray.push("thing" + (thingsArray.length + 1));
        const newItem = `Thing ${things.length + 1}`;
        thingsArray.push(newItem);
        setThings(prevState => [...prevState, newItem])
        console.log(thingsArray);
        
    }
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>);

    console.log(thingsArray);
    return (
        <div>
            <button onClick={addItem}> Add Item</button>
            {thingsElements}
        </div>
    )
}

//adding things using state

import React from "react"

export default function App() {

  // const [isGoingOut, func] = React.useState(true) //array destructuring
  const [things, addItem] = React.useState(["Thing 1 ", "Thing 2 "])

  // let isGoingOut = false
  // let answer = isGoingOut ? "Yes" : "No"  writing directly in the code

  function click() {
    addItem(prevthing => [...prevthing, `Thing ${prevthing.length + 1} `])
  }

  const allThings = things.map(thing => <li key={thing}>{thing}</li>)

  return (
    <div className="counter">
      {/* <h1>{answer}</h1> */}
      <h1>Click to add Item</h1>
      <button onClick={click}>Click Me</button>
        {allThings}
    </div>
  );
}
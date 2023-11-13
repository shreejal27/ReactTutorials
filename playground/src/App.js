import React from "react"

export default function App() {
  const [starWarsdata, setStarWarsData] = React.useState({})

  console.log("Component Rendered")

  // fetch("https://swapi.dev/api/people/1")
  // .then(res => res.json())
  // .then(data => setStarWarsData(data))

  //setStarWarsData(data) in the above api call will make component render infinite times as it is updating the state and causing re-rendering of the component

  //side effects
  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [])
  //useEffect will always run on first render
  //useEffect has two parameters : 1) callback function 
  //it helps developers to put side effect code. side effect code those codes reaching outside of React ecosystem but also trying to update the state of the component
  //eg of side effects : local storage, API, websockets, etc
  
  // 2) dependency array
  // it is an array of values that useEffect will watch for changes and only when those values change will the callback be called again and the side effect run again 
  // basicaslly checks the values of previous array with new array

  return (
    <div>
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
    </div>
  )
}
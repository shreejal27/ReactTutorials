import React from "react"

export default function App() {
  const [starWarsdata, setStarWarsData] = React.useState({})

  const [count, setCount] = React.useState(1)


  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={increment}>Next Character</button>
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
    </div>
  )
}
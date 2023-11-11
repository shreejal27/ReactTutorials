import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {

  const [user, setUser] = React.useState("ShreeJal");

  return (
    <main>
      <article>
        <Header name={user}/>
        <Body name={user} />
      </article>
    </main>
  )
}
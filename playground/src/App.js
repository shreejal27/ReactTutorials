import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {

  const [show, setShow] = React.useState(true)

  function toggle() {
    setShow(prevShow => !prevShow)
  }

  

  return (
    <div>
        <button onClick={toggle}> Toggle Window Tracker </button>
       { show && <WindowTracker/> }
    </div>
  )
}
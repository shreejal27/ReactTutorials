import React from "react"
import "./App.css"


export default function App() {

  // const [squares, setSquares] = React.useState(boxes);
  //1)const [messages, setMessages] = React.useState(["a", "b"]);
  const [messages, setMessages] = React.useState(["a", "b"]);

  return (
    <main>
      {/* 1) {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>} */}

      {messages.length === 0 ? <h1>You are all caught up</h1> : <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1> }
        </main>
  )
}
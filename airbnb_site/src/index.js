import React from "react"
import ReactDOM from "react-dom"
// import App from "./App"


function App(){
    const firstName="Shree";
    const lastName="Jal"
    return(<h1> Hello {firstName} {lastName}</h1>);
}
// ReactDOM.render(<App/>, document.getElementById("root"));
ReactDOM.render(<App/>, document.getElementById("root"));
import React from "react"
import reactLogo from "../images/download.png"
export default function Header(props){
    return(
        <div>
        <nav className="nav" id = {props.darkMode ? "dark" : ""}>
        <img src={reactLogo} className="image" alt="logo"></img>
        <ul className="navitems">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            <button onClick={props.toggleDarkMode}>Toggle Modes</button>
        </ul>
        </nav>
        </div>
    )
}
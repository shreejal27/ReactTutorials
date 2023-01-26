import React from "react"
import reactLogo from "../images/download.png"
export default function Header(){
    return(
        <div>
        <nav className="nav">
        <img src={reactLogo} className="image"></img>
        <ul className="navitems">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
        </div>
    )
}
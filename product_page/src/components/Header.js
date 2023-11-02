import React from "react"
import amazonLogo from "../images/amazonLogo.png"
export default function Header() {
    return (
        <div>
            <nav>
                <img src={amazonLogo} className="logo" alt="amazonLogo"></img>
            </nav>
        </div>
    )
}
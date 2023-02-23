import React from "react"
import Meme from "../images/meme.png"

export default function Header(){
    return(
        <nav>
            
        <img src = {Meme} className= "logo"/>

        <span className="title">Meme Generator</span>
       
        <span className="subtitle">React Course - Project 3</span>
        </nav>
    )
}
import React from "react"
import hero from "../image/hero.png"
export default function Hero(){
    return(
    
        <div >
        <center>
        <img src={hero} className="heroImage"></img>
        </center>
        <div className="heroElement">

        <h1>
            Online Experiences
        </h1>
        <p>
            Join unique interactive activities led by one-of-a kind hosts -all without leaving home.
        </p>
        </div>
        </div>
    )
}
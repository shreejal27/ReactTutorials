import React from "react"
import bebe from "../image/bebe.jpg"
import star from "../image/star.png"
export default function Card(){
    return(
    
        <div >
        <img src={bebe} className="cardImage"></img>
        <div className="cardElement">
       <img src={star} className="star"></img>
        <span>5.0</span> 
        <span> (99)</span> 
        <span> USA</span> 
        <p>
            Live singing concert with Bebe Rexha
        </p>
        <p><strong>From $200</strong> /person</p>
        </div>
        </div>
    )
}
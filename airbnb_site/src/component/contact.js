import React from "react"
import star from "../image/star.png"
import bebe from "../image/bebe.jpg"
export default function Contact(){
    return(
    
        <div >
        <img src={bebe} className="cardImage"></img>
        <h3 className="cardTitle">BeBe Rexha</h3>
        <div className="cardElement">
       <img src={star} className="star"></img>
        <span>5.0</span> 
        <p>
            beberexha@gmail.com
        </p>
        </div>
        </div>
    )
}
import React from "react"
import star from "../image/star.png"
import bebe from "../image/bebe.jpg"
export default function Contact({img,name,email}){

    return(
        <div >
        <img src= {img} className="cardImage"></img>
        <h3 className="cardTitle">{name}</h3>
        <div className="cardElement">
       <img src={star} className="star"></img>
        <span>5.0</span> 
        <p>
        {email}
        </p>
        </div>
        </div>
    )
}
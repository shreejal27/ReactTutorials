import React from "react"
import star from "../image/star.png"
import bebe from "../image/bebe.jpg"
export default function Contact(props){
    console.log(props.img)
    return(
        <div >
        <img src={props.img} className="cardImage"></img>
        <h3 className="cardTitle">{props.name}</h3>
        <div className="cardElement">
       <img src={star} className="star"></img>
        <span>5.0</span> 
        <p>
        {props.email}
        </p>
        </div>
        </div>
    )
}
import React from "react"
import shree from "../image/shree.jpg"
export default function Header(){
    return(
        <div>
        <img src={shree} className="image"></img>
        <h2> Shreejal Maharjan</h2>
        <h3> Frontend Developer</h3>
        <h4> maharjanshreejal.com.np</h4>
        <button>Email</button>
        </div>
    )
}
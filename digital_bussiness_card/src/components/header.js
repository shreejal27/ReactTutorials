import React from "react"
import shree from "../image/shree.jpg"
export default function Header(){
    return(
        <div>
            <center>
        <img src={shree} className="image"></img>
        <br/>
        <span id="name"> Shreejal Maharjan</span> <br/>

        <span> Frontend Developer</span><br/>
        <span> maharjanshreejal.com.np</span>
        <br/>
        <br/>
        <button>Email</button>
            </center>
        </div>
    )
}
import React from "react"
import memesData from "../memeData.js"

export default function Form(){
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url= memesArray[randomNumber].url
        alert(url);
    }
    return(
        <div>
            <center>
                
        <form>
            <input type="text" /> 
            <input type="text" />
            <br/>
            <button onClick={getMemeImage}>Get a new Meme Image</button>
        </form>
            </center>
        </div>
    )
}
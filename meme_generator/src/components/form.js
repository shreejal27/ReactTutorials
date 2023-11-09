import React from "react"
import memesData from "../memeData.js"

export default function Form() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomNumber].url
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <div>
            <center>
                <div>
                    <input type="text" />
                    <input type="text" />
                    <br />
                    <button onClick={getMemeImage}>Get a new Meme Image</button>
                </div>
                <img src={memeImage} className="meme--Image" alt="meme" />
            </center>

        </div>
    )
}
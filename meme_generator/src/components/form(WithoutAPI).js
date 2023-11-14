import React from "react"

import memesData from "../memeData.js"

export default function Form() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    // const[allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        // setMemeImage(memesArray[randomNumber].url)
        setMemeImage(prevImage => {
            return{
              ...prevImage,
              randomImage: url
            }
          })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMemeImage(prevFormData => {
          return {
            ...prevFormData,
            [name]: value
         
          }
    
        })
      }
    return (
        <div>
            <center>
                <div>
                    <input type="text" onChange={handleChange} name="topText" value={memeImage.topText}/>
                    <input type="text" onChange={handleChange} name="bottomText" value={memeImage.bottomText}/>
                    <br />
                    <button onClick={getMemeImage}>Get a new Meme Image</button>
                </div>
                <div className="meme">
                <img src={memeImage.randomImage} className="meme--Image" alt="meme" />
                <h2 className="meme--topText">{memeImage.topText} </h2>
                <h2 className="meme--bottomText">{memeImage.bottomText}</h2>
                </div>
            </center>

        </div>
    )
}
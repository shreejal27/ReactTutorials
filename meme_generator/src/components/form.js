import React from "react"

// import memesData from "../memeData.js"

export default function Form() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    // const[allMemeImages, setAllMemeImages] = React.useState(memesData)

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(data => setAllMemes(data.data.memes))
      }, [])

    function getMemeImage() {
        // const memesArray = allMemes.data.memes
        // const randomNumber = Math.floor(Math.random() * memesArray.length) when used memeData.js file

        // const memesArray = allMemes.data.memes not needed when directly Api call
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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

                {/* <div>
                <pre>{JSON.stringify(memeData, null, 2)}</pre>
                </div> */}
            </center>

        </div>
    )
}
import React from "react"


import "./index.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Info from "./components/Info"


export default function Page(){
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode(){
        console.log("Clicked")
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <div> 
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Info darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
        </div>
    )
}


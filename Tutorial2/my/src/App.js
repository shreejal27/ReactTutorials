import React from "react"


import "./index.css"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Info from "./components/Info"


export default function Page(){
    return(
        <div> 
        <Header/>
        <Info/>
        <Footer/>
        </div>
    )
}


import React from "react"

import "./App.css"

import Header from "./component/header"
import Hero from "./component/hero"
import Card from "./component/card"

// import Footer from "./components/footer"


export default function Page(){
    return(
        <div> 
       <Header/>
       <Hero/>
        <Card/>

        </div>
    )
}


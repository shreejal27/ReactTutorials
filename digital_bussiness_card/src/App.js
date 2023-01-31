import React from "react"


import "./index.css"

import Header from "./components/header"
import Info from "./components/info"
import Footer from "./components/footer"


export default function Page(){
    return(
        <div> 
       <Header/>
        <Info/>
        <Footer/>
        </div>
    )
}

import React from "react"
import "./App.css"
import data from "./data"

import Header from "./component/header"
import Body from "./component/body"

export default function Page(){
   
    const cards = data.map(item=>{
        return(
            <Body
            img={item.imgUrl}
            title={item.title}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
            />
        )
    })
    return(
        <div> 
       <Header/>
        {cards}
        </div>
    )
}


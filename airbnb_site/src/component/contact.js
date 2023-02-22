import React from "react"
import star from "../image/star.png"
import data from "../data"
import Card from "./card";
console.log(data);
export default function Contact(){
    const cards= data.map(item=>{
        return(
            <Card
            img={item.id}
            cardtitle={item.title}
            gmail={item.gmail}
            price={item.price}
          
            />
        )
    })
   
}
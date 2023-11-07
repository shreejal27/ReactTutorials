import React from "react"
import data from "../data"
import Card from "./card";

export default function Contact(){
    const cards = data.map(item => (
        <Card
            key={item.id}
            img={item.img}
            cardtitle={item.title}
            gmail={item.gmail} // Changed from item.gmail
            price={item.price}
        />
    ))

    return (
        <div>
            {cards}
        </div>
    )
   
}
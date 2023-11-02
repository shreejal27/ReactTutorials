import React from "react"

import data from "./ProductData"

import "./index.css"

import Header from "./components/Header"
import Product from "./components/Product"
// import ProductInfo from "./components/ProductInfo"


export default function Page() {

  const cards = data.map(item => {
    return (
      <Product
        img={item.imageUrl}
        title={item.title}
        description={item.description}
        optionImage={item.colorOptions[2].imageUrl}
      />
    )
  })
  
  return (
    <div>
      <Header />
      {cards}
    </div>
  )
}


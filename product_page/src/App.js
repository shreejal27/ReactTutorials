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
        optionImage1={item.colorOptions[0].imageUrl}
        optionImage2={item.colorOptions[1].imageUrl}
        optionImage3={item.colorOptions[2].imageUrl}
        optionImage4={item.colorOptions[3].imageUrl}
        feature1={item.featureList[0]}
        feature2={item.featureList[1]}
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


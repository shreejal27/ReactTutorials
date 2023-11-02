import React from "react"

import data from "./ProductData"

import "./index.css"

import Header from "./components/Header"
import ProductPreview from "./components/ProductPreview";
import ProductDetails from "./components/ProductDetails"


export default function Page() {

  const cards = data.map(item => {
    return (
      <div className="mainContainer">
        <ProductPreview
          img={item.imageUrl}
        />
        <ProductDetails
          title={item.title}
          description={item.description}
          colorOptions={item.colorOptions} // Pass colorOptions as a prop
          featureOptions={item.featureList} // Pass featureOptions as a prop
        />
      </div>
    )
  })

  return (
    <div>
      <Header />
      {cards}
    </div>
  )
}


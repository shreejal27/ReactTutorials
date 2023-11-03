import React, { useState } from "react";
import data from "./ProductData";
import "./index.css";
import Header from "./components/Header";
import ProductPreview from "./components/ProductPreview";
import ProductDetails from "./components/ProductDetails";

export default function Page() {

  const [selectedColor, setSelectedColor] = useState(data[0].colorOptions[0].imageUrl);


  const onColorOptionClick = (pos) => {
    const updatedPreviewImage = data[0].colorOptions[pos].imageUrl; // Considering the first product for this example
    console.log(updatedPreviewImage);
    setSelectedColor(updatedPreviewImage);
  };

  const cards = data.map((product, index) => {
    return (
      <div className="mainContainer" key={index}>
     <ProductPreview selectedColor={selectedColor} />
        {/* <ProductPreview img={product.imageUrl} /> */}
        <ProductDetails
          title={product.title}
          description={product.description}
          colorOptions={product.colorOptions}
          featureOptions={product.featureList}
          onColorOptionClick={onColorOptionClick}
          selectedColor={selectedColor}
        />
      </div>
    );
  });

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

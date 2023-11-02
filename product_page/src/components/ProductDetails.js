import React from "react"

export default function ProductDetails (props) {
    const colorOptions = props.colorOptions.map((item, pos) => {
        return (
            <img key={pos} src={item.imageUrl} className="productOptionImage" alt="productOptionImage"></img>
        );
    })
    const featureList = props.featureOptions.map((item, pos) => {
        return (
            <button key={pos} className="featureButton ">{item}</button>
        );
    })

    return (
       <div className="rightCol">
                    <h2 className="productTitle">{props.title}</h2>
                    <p >{props.description}</p>
                    <br></br>
                    <p>Select Color:</p>
                    <div className="productOptionRow">
                        {/* <img src={props.optionImage1} className="productOptionImage selectedProductImage" alt="productOptionImage"></img>
                        <img src={props.optionImage2} className="productOptionImage" alt="productOptionImage"></img>
                        <img src={props.optionImage3} className="productOptionImage" alt="productOptionImage"></img>
                        <img src={props.optionImage4} className="productOptionImage" alt="productOptionImage"></img> */}
                        {colorOptions}
                    </div>
                    <p>Features:</p>
                    <div className="featureRow">
                       {featureList}
                    </div>
                    <button className="buyBtn">Buy Now</button>
        </div>
    )
}
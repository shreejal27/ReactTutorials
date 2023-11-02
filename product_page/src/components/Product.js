import React from "react"

export default function Product(props) {
    return (
        <div>
            <div className="mainContainer">
                <div className="leftCol">
                    <img src={props.img} className="productImage" alt="productImage"></img>

                    {/* <div className="currentTime">
                        <p>{new Date().getHours()} : {new Date().getMinutes()}</p>
                    </div> */}
                    <div className="currentHeartBeat">
                        <p>78</p>
                    </div>
                </div>
                <div className="rightCol">
                    <h2 className="productTitle">{props.title}</h2>
                    <p >{props.description}</p>
                    <br></br>
                    <p>Select Color:</p>
                    <div className="productOptionRow">
                        <img src={props.optionImage1} className="productOptionImage selectedProductImage" alt="productOptionImage"></img>
                        <img src={props.optionImage2} className="productOptionImage" alt="productOptionImage"></img>
                        <img src={props.optionImage3} className="productOptionImage" alt="productOptionImage"></img>
                        <img src={props.optionImage4} className="productOptionImage" alt="productOptionImage"></img>
                    </div>
                    <p>Features:</p>
                    <div className="featureRow">
                        <button className="featureButton selectedfeatureButton">{props.feature1}</button>
                        <button className="featureButton">{props.feature2}</button>
                    </div>
                    <button className="buyBtn">Buy Now</button>

                </div>
            </div>
        </div>
    )
}
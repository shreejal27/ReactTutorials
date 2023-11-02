import React from "react"

export default function Product(props) {
    return (
        <div>
            <div className="mainContainer">
                <div className="leftCol">
                <img src={props.img} className="productImage" alt="productImage"></img>
                </div>
                <div className="rightCol">
                    <h2 className="productTitle">{props.title}</h2>
                    <p >{props.description}</p>
                    <br></br>
                    <p>Select Color:</p>
                    <div className= "productOptionRow">
                    <img src={props.optionImage} className="productOptionImage" alt="productOptionImage"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
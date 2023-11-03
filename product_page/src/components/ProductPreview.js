import React from "react"

export default function ProductPreview (props) {
    
    return (
        <div>
                <div className="leftCol">
                    <img src={props.selectedColor} className="productImage" alt="productImage"></img>

                    <div className="currentTime">
                        <p>{new Date().getHours()} : {new Date().getMinutes()}</p>
                    </div>
                    {/* <div className="currentHeartBeat">
                        <p>78</p>
                    </div> */}
                </div>
        </div>
    )
}
import React from "react"


export default function Body(props){
    console.log(props.img);
    return(
        <div>
    
        {/* <img src={logo} className="image"></img> */}
        <center>

        <div className="row">
            <div className="col1">
                <img src={props.img} className="image"></img>
                </div>
                    
            <div className="col2">
            <p> {props.title}</p>
            <h2> {props.location}</h2>
            <p> {props.startDate}</p>
            <p> {props.endDate}</p>
            </div>
        </div>
        </center>
  
        </div>
    )
}
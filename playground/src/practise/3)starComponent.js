import React from "react"

export default function starComponent(props) {
    const starIcon = props.icon ? "1 star" : "0 star";
    return(
     <div onClick={props.handleClick}>
          <h1>{starIcon}</h1>
    </div>
    );
}
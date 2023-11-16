
import React from "react"
export default function Footer(props ){
    return(
        <p id={props.darkMode ? "dark" : ""}>
            2023 React Development. 
            <br/>All right reserved.
        </p>
    )
}
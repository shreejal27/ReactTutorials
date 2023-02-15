import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"

import Contact from "./component/contact"


// function App(){
//     const firstName="Shree";
//     const lastName="Jal"
//     // return(<h1> Hello {firstName} {lastName}</h1>);
    
//     const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay;
    
//     if (hours < 12){
//         timeOfDay = "Morning";
//     }
//     else if(hours>12 && hours <18){
//         timeOfDay= "AfterNoon";
//     }
//     else{
//         timeOfDay="Night";
//     }
//      return(<h1>Good {timeOfDay} {firstName} {lastName}</h1>);
// }
// ReactDOM.render(<App/>, document.getElementById("root"));
// ReactDOM.render(<App/>, document.getElementById("root"));
function App(){
    return(
        <div className="ContactCard">
            <Contact
                img="./image/bebe.jpg"
                name="Bebe Rexha"
                email= "beberexha@gmail.com"/>
            <Contact
             img="./image/juice.jpg"
             name="Juice Wrld"
             email= "juice@gmail.com"/>
            <Contact
             img="./image/bebe.jpg"
             name="Bebe Rexha"
             email= "beberexha123@gmail.com"/>
            <Contact
             img="./image/juice.jpg"
             name="Juice Wrld"
             email= "juice123@gmail.com"/>
        </div>
    )
    }

ReactDOM.render(<App/>, document.getElementById("root"));
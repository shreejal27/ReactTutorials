import React from "react";

export default function Box(props) {

    // const [boxStatus, toggleStatus] = React.useState(props.status);

    const styles = {
        // backgroundColor: boxStatus ? "black" : "white" this is for when state is set
        backgroundColor: props.status ? "black" : "white"
      }

    //   function toggle() {
    //     toggleStatus(prevStatus => !prevStatus)
    //   }

      return(
        //   <div style={styles} className="box" onClick={toggle} ></div>
          <div style={styles} className="box" onClick={()=>props.handleClick(props.id)} ></div>
          //we created ()=> function in onClick so we can pass the props.id to the function
          )
}
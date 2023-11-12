import React from "react";

export default function Box(props) {

    const [boxStatus, toggleStatus] = React.useState(props.status);

    const styles = {
        backgroundColor: boxStatus ? "black" : "white"
      }

      function toggle() {
        toggleStatus(prevStatus => !prevStatus)
      }


      return(
          <div style={styles} className="box" onClick={toggle}></div>
          )
}
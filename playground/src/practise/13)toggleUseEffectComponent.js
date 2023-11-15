import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth(){
            console.log("setting up event listener")

            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        //allowed clean up for sideeffects basically clean up function in case component dies.
        //not a required part of useEffect
        return function(){
            console.log("cleaning up event listener")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    //when toggle is off react recognizes the component has reaches its end of lifecycle and its about to be move from the DOM so it will run the clean up function and remove the event listener

    return (
        <h1 >Window Width: {windowWidth}</h1>
    )
}
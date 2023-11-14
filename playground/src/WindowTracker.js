import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth(){
            console.log("setting up event listener")

            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWidth)

        //clean up for sideeffects basically clean up function
        return function(){
            console.log("cleaning up event listener")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1 >Window Width: {windowWidth}</h1>
    )
}
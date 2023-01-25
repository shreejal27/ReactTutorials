// const img=(
//     <img src="download.png" height="91px"  width="138px"></img>
// )

// const page=(
//     <div>
//     <h1>Fun facts about React</h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordn Walke</li>
//         <li> Has Well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//     </ul>
//     </div>
// )
//we need our jsx to be nested under a single parent element. Here div is the parent element for h1 and ul.
function Header(){
    return(
        <div>
        <nav className="nav">
        <img src="download.png" className="image"></img>
        <ul className="navitems">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
        </div>
    )
}
function Info(){
    return (
        <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordn Walke</li>
            <li> Has Well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
        </ul>
        </div>
    )
}
function Footer(){
    return(
        <p>
            2023 React Development. All right reserved.
        </p>
    )
}

function Page(){
    return(
        <div> 
        <Header/>
        <Info/>
        <Footer/>
        </div>
    )
}

// ReactDOM.render(<Header/>, document.getElementById("header"));
ReactDOM.render(<Page/>, document.getElementById("root"));
// ReactDOM.render(<Footer/>, document.getElementById("footer"));
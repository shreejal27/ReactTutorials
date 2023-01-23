ReactDOM.render(<h1>Hello, Everyone</h1>, document.getElementById("root")) 
//render garcha element, comma pachi chai kata render garney bhncha

ReactDOM.render(
<ul>
    <li>one</li> 
    <li>two</li>
</ul>, 
    document.getElementById("list"))

ReactDOM.render(<MainComponent/>, document.getElementById("content") )

function MainComponent(){
    return(     
            <h2>Hey Yo This is called from a function</h2>
    )
}
//day 2 JSX
  ReactDOM.render(<h1 classname="header"> This is called JSX</h1>, document.getElementById("JSX"));

  const page =(
    <div>
        <p>THis is a p tag</p>
        <h1>This is a header tag</h1>
    </div>
  )
 ReactDOM.render(page, document.getElementById("jsx1"));


 const nav=(
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Contact</li>
        </ul>
    </nav>
 )
 ReactDOM.render(nav, document.getElementById("challengeNav"));
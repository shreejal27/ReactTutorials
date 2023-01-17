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
        <div> 
            <h1> I'm Learning React </h1>
            <h2>Hey Yo This is called from a function</h2>
        </div>
    )
}
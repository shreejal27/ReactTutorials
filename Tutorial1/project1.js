const img=(
    <img src="download.png" height="91px"  width="138px"></img>
)

const page=(
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

ReactDOM.render(img, document.getElementById("img"));
ReactDOM.render(page, document.getElementById("root"));
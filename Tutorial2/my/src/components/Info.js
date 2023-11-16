
export default function Info(props){
    return (
        <div id={props.darkMode ? "dark" : ""}>
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
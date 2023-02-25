import "./display.css"
import { Link } from "react-router-dom"
import animate from "../animated.gif"
const Display=()=>{
    return (
        <div className="display">
            <div className="text">
               <h1><h1>Understand <div className="coloured-text">language </div>for free right here.</h1></h1>
               <Link to="/translate"><button><h2>Translate here</h2></button></Link>
            </div>
            <img src={animate}></img>
        </div>
    )
}
export default Display;
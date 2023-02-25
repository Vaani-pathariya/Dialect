import { Outlet } from "react-router-dom";
import logo from "../logo.jpeg"
import "./main.css"
const Main =()=>{
    return(
        <div>
            <nav className="navbar">
                <img src={logo}></img>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Main;
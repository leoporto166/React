import { Link } from "react-router-dom";
import "./style.css"

function Header(){
    return(
        <header>
            <Link to={"/"}><h1>Porto Flix</h1></Link>

            <div className="menu">
                <Link to={"/"}>Home</Link>
                <Link to={"/favoritos"}>Favoritos</Link>
            </div>
        </header>
    )
}

export default Header;
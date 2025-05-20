import { Link } from "react-router-dom";

import "./header.css"
function Header(){
    return(
        <div className="header">
            <h1>
                Porto Flix
            </h1>

            <div className="menu">
                <Link to={"/"}>Home</Link>

                <Link to={"/favoritos"}>Favoritos</Link>
            </div>
        </div>
    )
}

export default Header;
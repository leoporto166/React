import { Link } from "react-router-dom";
import "./style.css"

function Header(){
    return(
    <header>
        
        <h1>Porto Flix</h1>

        <div className="menu">
            <Link to={"/"}>Home</Link>
            <Link to={"/favoritos"}>Meus Filmes</Link>
        </div>
    </header>
    )
}

export default Header;
import { Link } from "react-router-dom";
import "./style.css"

function Header(){

    return(
        <header>
            <h1>Exercicio 01</h1>

            <div className="menu">
                <Link to = "/"> Home </Link>
                <Link to = "/sobre"> Sobre </Link>
                <Link to = "/contato"> Contato </Link>
            </div>
        </header>
    )
}

export default Header;
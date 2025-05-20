import "./erro.css"
import { Link } from "react-router-dom";

function Erro(){
    return(
        <div className="erro-container">
            <h1 className="erroh1">404</h1>
            <span className="erro-span">Essa Página não existe</span>

            <Link to={"/"} className="erro-a">Veja todos os filmes</Link>
        </div>
    )
}

export default Erro;
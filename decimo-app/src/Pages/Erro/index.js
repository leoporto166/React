
import { Link } from "react-router-dom";
import "./not.css"

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Essa página não existe</h2>

            <Link to={"/"}>Veja todos os filmes</Link>
        </div>
    )
}

export default Erro;
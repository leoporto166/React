import { Link } from "react-router-dom"

function Erro(){
    return(
        <div>
            <h2>Ops... Parece que essa página não existe</h2>

            <Link to={"/"}>Volte aqui</Link>
        </div>
    )
}

export default Erro
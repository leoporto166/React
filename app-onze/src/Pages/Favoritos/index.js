import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./fav.css"

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("33porto")
        setFilmes(JSON.parse(minhaLista) || [])
    })

    function Excluir(id){
        let filtroFilme = filmes.filter((item) => {
            return(item.id !== id)
        })
        
        setFilmes(filtroFilme);

        localStorage.setItem("33porto", JSON.stringify(filtroFilme))
    }

    return(
        <div className="fav-container">
            <h1 className="fav-h1">Meus Filmes</h1>

            {filmes.length === 0 && <span className="fav-title">Você não tem filmes favoritos ):</span>}
            <ul>
            {filmes.map((fav) => {
                return(
                    <li key={fav.id}>
                        <span className="fav-title">
                            {fav.title}
                        </span>
                        <div>
                            <Link to={`/filmes/${fav.id}`} className="fav-a">Ver detalhes</Link>

                            <button onClick={() => Excluir(fav.id)}className="fav-button">Excluir</button>
                        </div>

                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Favoritos;
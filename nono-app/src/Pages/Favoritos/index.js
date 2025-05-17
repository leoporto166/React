import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./favoritos.css"

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("33filmes")
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);

        localStorage.setItem("33filmes", JSON.stringify(filtroFilmes));
    }

    return(
        <div className="favoritos">
            <h1>Favoritos</h1>

            {filmes.length === 0 && <span>Sua lista está vazia</span> }
            <ul>
                {filmes.map((filme) =>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                             <Link to={`/filmes/${filme.id}`}>Ver detalhes</Link>
                             <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;

import { useEffect, useState } from "react";
import api from "../../Services/api"
import { Link } from "react-router-dom";
import "./home.css"


//URL DA API: /movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() =>{
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {params:{
                api_key: "3a38a2377454d98eeb8f8f8bf0638850",
                language: "pt-BR",
                page: 1
            }
        })

        console.log(response.data.results.slice(0,10))
        setFilmes(response.data.results.slice(0,10))

        }

        loadFilmes()
    }, [])
    return(
        <div className="container">
            <div className="filmes">
            {filmes.map((filme) => {
                return(
                    
                    <article className="post" key={filme.id}>
                        <strong className="title">{filme.title}</strong>

                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}className="poster" />

                        <Link to={`/filmes/${filme.id}`}>
                            Acessar
                        </Link>
                    </article>
                
                )
            
            })}
            </div>
        </div>
    )
}

export default Home;
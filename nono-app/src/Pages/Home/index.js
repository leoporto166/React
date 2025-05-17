
import { Link } from "react-router-dom"
import Api from "../../Services/Api"
import "./home.css"
import { useEffect, useState } from "react"

//BASE DA URL:https://api.themoviedb.org/3/

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR

//URL DA API: /movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes() {
           const response = await Api.get("/movie/now_playing", {
                params: {
                api_key: "3a38a2377454d98eeb8f8f8bf0638850",
                language: "pt-BR",
                page: 1
            }
        })

        console.log(response.data.results.slice(0,20))
        setFilmes(response.data.results.slice(0,20))
            
        }

        loadFilmes();
    }, [])
    return(
        <div className="container">
            
            {filmes.map((filme) => {
                return(
                    
                    <article className="post" key={filme.id}>
                        <strong className="title">{filme.title}</strong>

                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}className="poster" />

                        <Link to={`/filmes/${filme.id}`}className="home-link">
                            Acessar
                        </Link>
                    </article>
                
                )
            
            })}
            
        </div>
    )
}

export default Home;
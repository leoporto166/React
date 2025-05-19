
import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import api from "../../Api/api"

import "./home.css"

//URL DA API: /movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR


function Home(){

    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        async function loadApi() {
            const response = await api.get("/movie/now_playing", {params: {
                api_key: "3a38a2377454d98eeb8f8f8bf0638850",
                language: "pt-BR",
                page: 1
            }})

            setFilmes(response.data.results.slice(0,20))
            
        }

        loadApi()
    }, [])
    return(
        <div className="container-home">
            <div className="post">
            {filmes.map((filme) =>{
                return(
                    <div className="home" key={filme.id}>
                        <h1 className="home-title">{filme.title}</h1>

                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}className="home-poster" />

                        <Link to={`/filmes/${filme.id}`} className="home-a">Ver</Link>

                        


                    </div>
                )
            })}

        </div>
            </div>
    )
}

export default Home;
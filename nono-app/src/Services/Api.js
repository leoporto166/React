import "./api.css"

//BASE DA URL:https://api.themoviedb.org/3/

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR

import { useEffect, useState } from "react";
function Api(){
    const[filmes, setFilmes] = useState([])

    
    useEffect(() =>{function loadApi(){
        let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR"

        fetch(url)
        .then((resul) => resul.json())
        .then((json) => {
            console.log(json)
            setFilmes(json.results)
        })

        }
        loadApi()
    }, [])

    return(
        <div className="container">
            {filmes.map((item) =>{
                return(
                <article key={item.id} className="post">
                    <strong className="title">{item.original_title}</strong>

                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="poster" />

                    <button className="button">
                        Acessar
                    </button>
                </article>
                )
            })}
        </div>
    )

}

export default Api;
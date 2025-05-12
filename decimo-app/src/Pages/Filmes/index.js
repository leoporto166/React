import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Services/api"
import "./filmes.css"


function Filmes(){
    const {id} = useParams()
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
  async function loadFilme() {
    const response = await api.get(`/movie/${id}`, {
      params: {
        api_key: "3a38a2377454d98eeb8f8f8bf0638850",
        language: "pt-BR"
      }
    });

    console.log(response.data);
    setFilmes([response.data]); // transforma em array para manter o map()
  }

  loadFilme();
}, [id]);
    return(
        <div className="container">
            <div className="filmes">
            {filmes.map((filme) => {
                return(
                    
                    <article className="post" key={filme.id}>
                        <strong className="title">{filme.title}</strong>

                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}className="poster" />
                        
                        <p className="description">{filme.overview}</p>

                        
                    </article>
                
                )
            
            })}
            </div>
        </div>

    )
}

export default Filmes;
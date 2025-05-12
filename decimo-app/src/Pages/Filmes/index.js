import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Services/api"
import "./filmes.css"


function Filmes(){
    const {id} = useParams();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
  async function loadFilme() {
    api.get(`/movie/${id}`, {
      params: {
        api_key: "3a38a2377454d98eeb8f8f8bf0638850",
        language: "pt-BR"
      }
    })

    .then((response) => {
      setFilmes([response.data])
      setLoading(false)
    }) 
    .catch(() =>{
      console.log("FILME NÃO ENCONTRADO")
      navigate("/", {replace: true})
      return;
    })

  }

  loadFilme();

  return() => {
    
  }
}, [id, navigate]);

    if(loading){
      return(
        <div className="details">
          <h1>Carregando detalhes...</h1>
        </div>
      )
    }
    return(
        <div className="container">
            <div className="filmes">
            {filmes.map((filme) => {
                return(
                    
                    <article className="filmes-post" key={filme.id}>
                        <h1 className="filmes-title">{filme.title}</h1>

                        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}className="filmes-poster" />
                        
                        <h3>Sinopse</h3>
                        <p className="filmes-description">{filme.overview}</p>

                        <strong className="filmes-avaliation">Avaliação: {filme.vote_average} / 10</strong>

                        <br></br>
                        <br></br>

                        <button className="filmes-button">Salvar</button>
                        <a className="filmes-button" href={`https://youtube.com/results?search_query=${filme.title}`} target="_blank" rel="external">Trailer</a>

                        
                    </article>
                
                )
            
            })}
            </div>
        </div>

    )
}

export default Filmes;
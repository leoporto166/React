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
      setFilmes(response.data)
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

  function salvarFilme(){
    const minhaLista = localStorage.getItem("33portoFlix")

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filmes.id)

    if(hasFilme){
      alert("Esse filme já esta na lista")
      return
    }
    filmesSalvos.push(filmes)
    localStorage.setItem("33portoFlix", JSON.stringify(filmesSalvos))
    alert("Filme salvo com sucesso")
  }

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
            
                    
                    <article className="filmes-post" key={filmes.id}>
                        <h1 className="filmes-title">{filmes.title}</h1>

                        <img src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} alt={filmes.title}className="filmes-poster" />
                        
                        <h3>Sinopse</h3>
                        <p className="filmes-description">{filmes.overview}</p>

                        <strong className="filmes-avaliation">Avaliação: {filmes.vote_average} / 10</strong>

                        <br></br>
                        <br></br>

                        <button onClick={salvarFilme}  className="filmes-button">Salvar</button>
                        <a className="filmes-button" href={`https://youtube.com/results?search_query=${filmes.title}`} target="blank" rel="external">Trailer</a>

                        
                    </article>
                
                
            
          
            </div>
        </div>

    )
}

export default Filmes;
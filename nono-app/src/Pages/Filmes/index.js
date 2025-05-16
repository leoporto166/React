import { useEffect, useState} from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";

import Api from "../../Services/Api"


//BASE DA URL:https://api.themoviedb.org/3/

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR

//URL DA API: /movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-

function Filmes(){
    const [filmes, setFilmes] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

   useEffect(() => {
    async function loadFilme() {
      try {
        const response = await Api.get(`/movie/${id}`, {
          params: {
            api_key: "3a38a2377454d98eeb8f8f8bf0638850",
            language: "pt-BR",
          },
        });
        setFilmes([response.data]);
        setLoading(false);
      } catch (error) {
        console.log("FILME NÃO ENCONTRADO");
        navigate("/", { replace: true });
      }
    }

    loadFilme();
  }, [id, navigate]);
    return(
        <div className="filmes-container">
            {filmes.map((filme) =>{
                return(
                    <article className="filmes-" key={filme.id}>
                        <h1 className="filmes-title">{filme.title}</h1>

                        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}className="filme-poster" />

                        <p className="filme-description">{filme.overview}</p>

                        <p>Pontuação: {filme.vote_average} / 10</p>

                        <button>Salvar</button>

                        <Link to={`https://www.youtube.com/results?search_query=${filme.title}`} target="blank" rel="external">Trailer</Link>
                    </article>
                )
            })}
            

        </div>
    )
}

export default Filmes;
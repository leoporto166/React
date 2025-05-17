import { useEffect, useState} from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";
import "./filmes.css"

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

  function savedFilmes(){
    const myList = localStorage.getItem("33filmes");

    let filmesSaveds = JSON.parse(myList) || [];

     const filmeAtual = filmes[0];

    const hasFilme = filmesSaveds.some((filme) => filme.id === filmeAtual.id)

    if(hasFilme){
      alert("Esse filme ja está salvo!")
      return;
    }

    filmesSaveds.push(filmeAtual);

    localStorage.setItem("33filmes", JSON.stringify(filmesSaveds))

    alert("Filme salvo com sucesso!")
    
  }
    return(
        <div className="filmes-container">
            {filmes.map((filme) =>{
                return(
                    <article className="filmes" key={filme.id}>
                        <h1 className="filmes-title">{filme.title}</h1>

                        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}className="filmes-poster" />

                        <p className="filmes-description">{filme.overview}</p>

                        <p className="filmes-pontuation">Pontuação: {filme.vote_average} / 10</p>

                        <button className="filmes-link" onClick={savedFilmes}>Salvar</button>

                        <Link to={`https://www.youtube.com/results?search_query=${filme.title}`} target="blank" rel="external" className="filmes-link" >Trailer</Link>
                    </article>
                )
            })}
            

        </div>
    )
}

export default Filmes;
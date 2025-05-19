import { useState, useEffect } from "react";
import { useParams, useNavigate, replace } from "react-router-dom";
import api from "../../Api/api"
import "./filmes.css"

//URL DA API: /movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR

function Filmes(){
    const [filme, setFilme] = useState({})
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function loadApi(){
            const response = await api.get(`/movie/${id}` , {params: {
                api_key: "3a38a2377454d98eeb8f8f8bf0638850",
                language: "pt-BR",
                page: 1
            }})

            .then((response) => {
                setFilme(response.data)
            })
            .catch(() =>{
                console.log("FILME NÃO ENCONTRADO")
                navigate("/", {replace: true})
                return;
            })
            

        } 

        loadApi()
    }, [id, navigate])

    function salvarFilme(){
        const listaSalva = localStorage.getItem("33porto")

        let itensSalvos = JSON.parse(listaSalva) || []

        const jaExiste = itensSalvos.some((item) => item.id === filme.id)

        if(jaExiste){
            alert("Esse filme ja está salvo!")
            return;
        }

        itensSalvos.push(filme);

        localStorage.setItem("33porto", JSON.stringify(itensSalvos));
        alert("Item salvo com sucesso!");

    }

    return(
        <div className="container-filmes">
            
                    <div className="filmes">
                        <h1 className="filmes-title">{filme.title}</h1>

                       <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}className="filmes-poster" />
                       </div> 
                        
                        <h3>Sinopse</h3>
                        <p className="filmes-description">{filme.overview}</p>

                        <strong className="filmes-avaliation">Avaliação: {filme.vote_average} / 10</strong>

                        <br></br>
                        <br></br>

                        <button className="filmes-button" onClick={salvarFilme}>Salvar</button>
                        <a className="filmes-button" href={`https://youtube.com/results?search_query=${filme.title}`} target="blank" rel="external">Trailer</a>

                    </div>

                
            
            
        </div>
    )
}

export default Filmes;
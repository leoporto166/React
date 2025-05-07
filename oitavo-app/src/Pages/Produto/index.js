import { useParams } from "react-router-dom";

function Produto(){
    const {id} = useParams();
    return(
        <h1>Bem vindo a págino do produto {id}</h1>
    )
}

export default Produto;
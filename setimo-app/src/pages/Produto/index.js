
import { useParams } from "react-router-dom";



function Produto(){

    const { id } = useParams();
    return (
        <div>
            <h2>MEU PRODUTO É {id}</h2>
        </div>
    )
}

export default Produto;
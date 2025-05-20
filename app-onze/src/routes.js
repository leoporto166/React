import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import Header from "./Components/Header";
import Favoritos from "./Pages/Favoritos"
import Filmes from "./Pages/Filmes"
import Erro from "./Pages/Erro";
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favoritos" element={< Favoritos />}/>
                <Route path="/filmes/:id" element={< Filmes/>}/>

                <Route path="*" element={<Erro/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
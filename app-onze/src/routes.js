import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import Header from "./Components/Header";
import Favoritos from "./Pages/Favoritos"
import Filmes from "./Pages/Filmes"
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favortios" element={< Favoritos />}/>
                <Route path="/filmes/:id" element={< Filmes/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
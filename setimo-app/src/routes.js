import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header";

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contact';
import Erro from "./pages/Erro"
import Produto from "./pages/Produto";


function RoutesApp(){
    return(
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/produto/:id" element = {<Produto/>}/>
            
            <Route  path="*" element = {<Erro/>} />
          </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
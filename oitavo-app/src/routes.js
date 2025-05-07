import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./Pages/Home"
import Contato from "./Pages/Contato"
import Sobre from "./Pages/Sobre"
import Header from "./Components/Header"
import Produto from "./Pages/Produto"
import Erro from "./Pages/Erro"

function RouterApp(){
    return(
    <BrowserRouter>
        <Header/>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>

                <Route path="/produto/:id" element={<Produto/>}/>



                <Route path="*" element={<Erro/>}/>
                
            </Routes>
            </BrowserRouter>
    )
}

export default RouterApp;
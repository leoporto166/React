import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contact';

function RoutesApp(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contado" element={<Contato/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
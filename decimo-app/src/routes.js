import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Contato from "./Pages/Contato";
import Header from "./Components/Header"

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/contato" element={<Contato />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
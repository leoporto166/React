import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Banco from "./Pages/Banco"

function RoutesApp(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Banco/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default RoutesApp;
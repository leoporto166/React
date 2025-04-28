
import { useState } from "react";

import MostraNome from "./components/Nome";




function App(){

  const [aluno, setAluno] = useState("Sujeito Programador")



  function trocaDeNome(){ 
   let nome = prompt("Digete seu nome")
    setAluno(nome);
  }

  return(
  <div>
      <h1>Componente App</h1><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={trocaDeNome}>
        Mudar Nome
      </button>

  </div>
  )
}

export default App;


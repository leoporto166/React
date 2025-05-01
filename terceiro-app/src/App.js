
import { useState } from "react";


function App() {
const[input, setInput] = useState("")
const [tarefas, setTarefas] = useState([])

  function clickRegister(event){
    event.preventDefault()

   setTarefas([...tarefas, input])
   setInput("")
    
  }

  return (
    <div>
      <form onSubmit={clickRegister}>
        <h1>Cadastrando tarefa</h1>
        <label>Nome da tarefa</label> <br></br>
        <input placeholder="Digite uma tarefa"
        value = {input}
        onChange={(event) => setInput(event.target.value)}></input> <br></br>

        <button type="submit">Registrar</button>
      </form>
      <br></br>
      <br></br>
      <ul>
        {tarefas.map( tarefa =>{
         return <li key={tarefa}>
             {tarefa}
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;

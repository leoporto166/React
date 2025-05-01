/*📚 Atividade: Lista de Tarefas com Remoção
🎯 Objetivo:
Criar um app React com as seguintes funcionalidades:

O usuário pode adicionar tarefas (como você já fez).

As tarefas são exibidas em uma lista.

Cada tarefa tem um botão "Remover" ao lado.

Quando o usuário clica em "Remover", aquela tarefa desaparece da lista.*/

import { useState } from "react";

function App() {
  const[input, setInput] = useState("")
  const[tarefas, setTarefas] = useState([])

  function clickResgister(event){
    event.preventDefault()
    
    setTarefas([...tarefas, input])
    setInput("")
  }

  function Remove(index){
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  return (
    <div>
      <form onSubmit={clickResgister}>
        <label>Adicionar Tarefa:</label> <br />
        <input placeholder="Digite uma tarefa"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        ></input> <br />
        <button type="submit">Registrar</button>

      </form>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa} <button onClick={() => Remove(index)}>Remover</button> <br ></br> <br ></br>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

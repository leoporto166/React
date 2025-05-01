import { useState } from "react";


function App() {

  const [nome, setNome] = useState("");
  const[email, setEmail] = useState("");
  const[idade, setIdade] = useState("");

  const[user, setUser] = useState({});

  function clickRegister(event){
    event.preventDefault()
    
    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <form onSubmit={clickRegister}>
        <h1>Cadastrando usuario</h1>
        <label>Nome:</label> <br></br>
        <input placeholder="Digite seu nome"
        value = {nome}
        onChange={(event) => setNome(event.target.value)}></input> <br></br>

        <label>E-mail:</label> <br></br>
        <input placeholder="Digite seu e-mail"
        value={email}
        onChange={ (event) => setEmail(event.target.value)}></input> <br></br>

        <label>Idade:</label> <br></br>
        <input placeholder="Digite sua Idade"
        value={idade}
        onChange={(event) => setIdade(event.target.value)}></input>
        <br></br>

        <button type="submit">Registrar</button>
      </form>
      <br></br>
      <br></br>
      <div>
        <span>Bem vindo: {user.nome}</span>
        <br></br> 
        <span>Email: {user.email}</span>
        <br></br>
        <span>Idade: {user.idade}</span>
        <br></br>
       
        
      </div>
    </div>
  );
}

export default App;

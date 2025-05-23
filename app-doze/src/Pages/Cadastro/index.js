import { useState } from "react";
import {auth} from "../../FirebaseConnection"
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./cadastro.css"

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Cadastrar() {
    const Ref = createUserWithEmailAndPassword(auth, email, senha)

    .then((value) => {
        alert("Cadastro realizado!")
        setEmail("")
        setSenha("")
    })
    .catch((error) => {
        if(error.code === "auth/weak-password"){
            alert("Senha fraca!")
        } else if(error.code === "auth/email-already-in-use"){
            alert("Essa email já existe!")
        }
    })
    
  }

  return (
    <div className="cadastro-form">
      <h1>Cadastro</h1>

    <label>
        Email:
    </label>    
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      

      <br/>

      <label>
        Senha:
    </label>
        <input
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        /> <br />
      

      <button onClick={Cadastrar}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
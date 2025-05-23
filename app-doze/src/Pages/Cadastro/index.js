import { useState, useEffect } from "react";
import {auth} from "../../FirebaseConnection"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import "./cadastro.css"

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState(false)
  const [detalhes, setDetalhes] = useState({})
  
  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if(user){
          console.log(user)
          setUser(true)
          setDetalhes({
            uid: user.uid,
            email: user.email,
          })
          
        } else{
          setDetalhes({})
          setUser(false)
        }
      })
    }

    checkLogin();
  }, [])

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

  async function Logar() {
    await signInWithEmailAndPassword(auth, email, senha)

    .then((value) =>{
      console.log("Usuário logado!")
      console.log(value.user)

      setDetalhes({
        uid: value.user.uid,
        email: value.user.email,
      })
      setUser(true)

      setEmail("")
      setSenha("")
    })
    .catch((error) => {
      console.log(`ERRO: ${error}`)
    })
    
  }

  async function logOut() {
    await signOut(auth)
    .then(() =>{
      alert("Deslogado!")
      setUser(false)
      setDetalhes({})
    })
    .catch((error) =>{
      console.log(`ERRO: ${error}`)
    })
    
  }

  return (
    <div className="cadastro-form">
      <h1>Cadastro</h1>

      {user &&(
        <div>
          <strong>Bem vindo(a)</strong> <br/>
          <span>ID: {detalhes.uid} - Email:{detalhes.email}</span><br/> <br/>
          <button onClick={logOut}>Logout</button> <br/>
        </div>
      )}

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
      <button onClick={Logar}>Logar</button>
    </div>
  );
}

export default Cadastro;
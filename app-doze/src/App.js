import { useState } from "react";
import {db} from "./FirebaseConnection"
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
function App() {
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")

  async function Salvar() {
    
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })

    .then(() => {
      console.log("CADASTRADO!")
      setTitulo("")
      setAutor("")
    })
    .catch((error) =>{
      console.log(`ERRO ${error}`)
    })
  }

  async function Buscar() {
    const Ref = doc(db,"posts", "1234")

    await getDoc(Ref)

    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch(() =>{
      console.log("Erro ao buscar")
    })
    
  }
  return (
    <div>
      <h1>React JS + Firebase</h1>
      <div className="form">
        <label>Titulo</label>
        <input
        type="text"
        placeholder="Digite o titulo"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        />      

        <label>Autor</label>
        <input 
        type="text"
        placeholder="Digite o autor"
        value={autor}
        onChange={(event) => setAutor(event.target.value)}
        />

        <button onClick={Salvar}>Cadastrar</button>
        <button onClick={Buscar}>Buscar</button>
      </div>
    </div>

    
  );
}

export default App;

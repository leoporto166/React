import { useState, useEffect } from "react";
import {db} from "../../FirebaseConnection"
import { doc, getDoc, addDoc, collection, getDocs, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";
import "./db.css"
import { Link } from "react-router-dom"; 
function App() {
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [post, setPost] = useState([])
  const [idPost, setIdPost] = useState("")

  useEffect(() => {
    async function timeReal() {

  const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
    let listaPost = [];

    snapshot.forEach((doc) => {
      listaPost.push({
        id: doc.id,
        titulo: doc.data().titulo,
        autor: doc.data().autor
        });
      });

      setPost(listaPost);
  
    });
  }
  timeReal();
}, []);

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
   /* const Ref = doc(db,"posts", "1234")

    await getDoc(Ref)

    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch(() =>{
      console.log("Erro ao buscar")
    }) */

      const postRef = collection(db, "posts")
      await getDocs(postRef)

      .then((snapshot) => {
        let lista =[];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor:  doc.data().autor,
          })
        })

        setPost(lista);
      })
      .catch((error) => {
        console.log("ENCONTRAMOS UM ERRO")
      })
    
  }

  async function Editar() {
    const docRef = doc(db, "posts", idPost)
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })

    .then(() =>{
      console.log("ATUALIZADO!")
      setAutor("")
      setTitulo("")
      setIdPost("")
    })
    .catch((error) => {
      console.log(`ERRO: ${error}`)
    })
    
  }

  async function Excluir(id) {
    const refDoc = doc(db, "posts", id)
    await deleteDoc(refDoc)
    .then(() =>{
      alert("Deletado!")
    })
    .catch((error) =>{
      console.log(`ERRO: ${error}`)
    })
    
  }
  return (
    <div>
      <h1>React JS + Firebase</h1>
      <div className="form">
        
        <label>ID do Post:</label>
        <input
        placeholder="ID do post"
        value={idPost}
        onChange={(e) => setIdPost(e.target.value)}
        />

        <label>Titulo:</label>
        <input
        type="text"
        placeholder="Digite o titulo"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
        />      

        <label>Autor:</label>
        <input 
        type="text"
        placeholder="Digite o autor"
        value={autor}
        onChange={(event) => setAutor(event.target.value)}
        />

        <button onClick={Salvar}>Cadastrar</button>
        <button onClick={Buscar}>Buscar</button> <br/>
        <button onClick={Editar}>Atualizar</button>

        {post.length === 0 &&  <strong> <br/> Você não cadastrou nada</strong>}
        <ul>
          {post.map((post) =>{
            return(
            <li key={post.id}>
              <strong>ID: {post.id}</strong> <br/>
              <span>Titulo: {post.titulo}</span> <br/>
              <span>Autor: {post.autor}</span> <br/>
              <button onClick={() => Excluir(post.id)}>Excluir</button> <br/> <br/>

            </li>
            )
          })}
        </ul>
      </div>

      <Link to={"/cadastro"}>Cadastrar</Link>
    </div>

    
  );
}

export default App;

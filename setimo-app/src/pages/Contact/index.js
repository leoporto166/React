


import { Link } from "react-router-dom";

function Contact() {
    return (
      <div>
        <h1>Bem vindo a página Contado</h1>
        
        <Link to={"/sobre"} >Sobre</Link> <br />
        <Link to={"/"} >Home</Link>
      </div>
    );
  }
  
  export default Contact;
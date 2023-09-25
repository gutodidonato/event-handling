import React, { useState } from "react";

function App() {
  const [resposta, setTexto] = useState("Hello");
  const [corDeFundo, setCorFundo] = useState("blue");

  function enviar() {
    setTexto("Foi enviado");
  }

  function alterarCor() {
    setCorFundo("black");
  }

  function voltarCor() {
    setCorFundo("blue");
  }

  return (
    <div className="container">
      <h1>{resposta}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: corDeFundo }}
        onClick={enviar}
        onMouseOver={alterarCor}
        onMouseOut={voltarCor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

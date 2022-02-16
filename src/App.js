import React from "react";
import Formulario from "./components/Formulario";
import ListaDeNotas  from "./components/ListaDeNotas";
import "./App.css"

function App() {
  return (
    <div className="app_divPrincipal">
    <Formulario/>

    <ListaDeNotas/>
    </div>
  );
}

export default App;

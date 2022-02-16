import React from "react";
import Formulario from "./components/Formulario/formulario";
import { ListaDeNotas } from "./components/ListadeNotas/ListaDeNotas";
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

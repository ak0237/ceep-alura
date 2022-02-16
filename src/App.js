import React, { Component } from "react";
import Formulario from "./components/Formulario";
import ListaDeNotas  from "./components/ListaDeNotas";
import "./App.css"

class App extends Component {

  constructor(){
    super()
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <div className="app_divPrincipal">
        <Formulario criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </div>
    )
  }
  }

export default App;

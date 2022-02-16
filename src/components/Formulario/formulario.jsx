import React from "react";
import { Component } from "react";
import "./estilo.css"

export default class Formulario extends Component{

    constructor(){
        super()
        this.titulo=""
    }
    handleMudancaTitulo(evento){
        this.titulo = evento.target.value
        console.log(this.titulo)
    }

        render(){
        return(
            <form className="formulario">
                <input 
                type="text" 
                placeholder="Digite o Título" 
                className="formulario_input"
                onChange={this.handleMudancaTitulo.bind(this)}
                />

                <textarea 
                placeholder="Escreva Nota" 
                className="formulario_textArea"
                />

                <button className="formulario_botao">Iniciar</button>
            </form>
        )
    }
}
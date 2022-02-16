import React from "react";
import { Component } from "react";
import "./estilo.css"

export default class Formulario extends Component{

    constructor(props){
        super(props)
        this.titulo=""
        this.texto=""
    }
    _handleMudancaTitulo(evento){
        evento.stopPropagation()
        this.titulo = evento.target.value
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation()
        this.texto = evento.target.value
    }

    _criarNota(evento){
        evento.preventDefault()
        evento.stopPropagation()
        console.log(`nota ${this.titulo} ${this.texto}`)
        this.props.criarNota(this.titulo, this.texto)
    }

        render(){
        return(
            <form 
            className="formulario"
            onSubmit={this._criarNota.bind(this)}
            >
                <input 
                type="text" 
                placeholder="Digite o Título" 
                className="formulario_input"
                onChange={this._handleMudancaTitulo.bind(this)}
                />

                <textarea 
                placeholder="Escreva Nota" 
                className="formulario_textArea"
                onChange={this._handleMudancaTexto.bind(this)}
                />

                <button className="formulario_botao">Iniciar</button>
            </form>
        )
    }
}
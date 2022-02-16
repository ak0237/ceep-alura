import React from "react";
import { Component } from "react";
import "./estilo.css"

export default class Formulario extends Component{
    render(){
        return(
            <form className="formulario">
                <input type="text" placeholder="Digite o Título" className="formulario_input"/>
                <textarea placeholder="Escreva Nota" className="formulario_textArea"/>
                <button className="formulario_botao">Iniciar</button>
            </form>
        )
    }
}
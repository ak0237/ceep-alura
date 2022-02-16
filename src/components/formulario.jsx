import React from "react";
import { Component } from "react";

export default class Formulario extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Digite o Título"/>
                <textarea placeholder="Escreva Nota"></textarea>
                <button>Iniciar</button>
            </form>
        )
    }
}
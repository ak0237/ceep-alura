import React from "react";
import { Component } from "react";
import "./estilo.css"

export default class CardNotas extends Component{
    render(){
        return(
            <section className="card-nota">
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>
        )
    }
}
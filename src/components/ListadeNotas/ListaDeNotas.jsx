import React, { Component } from "react"
import CardNotas from "../CardNotas/CardNotas"
import "./estilo.css"

export class ListaDeNotas extends Component{
    render(){
        return(
            <ul className="listadeNotas_ul">
                <li className="listadeNotas_li_principal">
                    {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                        return(
                            <li className="listadeNotas_li_card" key={index}>

                                <CardNotas/>

                            </li>
                    
                        )
                    })}
                </li>
            </ul>
        )
    }

}
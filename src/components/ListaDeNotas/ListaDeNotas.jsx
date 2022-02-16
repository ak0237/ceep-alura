import React, { Component } from "react"
import CardNotas from "../CardNotas"
import "./estilo.css"

export default class ListaDeNotas extends Component{
   
    render(){
        return(
            <ul className="listadeNotas_ul">
                <li className="listadeNotas_li_principal">
                    {this.props.notas.map((nota, index) => {
                        return(
                            <li className="listadeNotas_li_card" key={index}>

                                <CardNotas titulo={nota.titulo} texto={nota.texto}/>

                            </li>
                    
                        )
                    })}
                </li>
            </ul>
        )
    }

}
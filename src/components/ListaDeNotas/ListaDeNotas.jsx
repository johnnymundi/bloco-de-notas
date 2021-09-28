import React, { Component } from "react";
import CardNota from "../CardNota";
import "./ListaDeNotas.css";

// função JS dentro de React é feita com {}, sendo que a iteração não funciona bem com for, mas o map() sim.
class ListaDeNotas extends Component {
  constructor() {
    super();
    //state local, que é melhor do q colocar um state no componente pai (no caso, App.js)
    this.state = {notas: []}
    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this))
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasNotas.bind(this))
  }

  _novasNotas(notas) {
    this.setState({...this.state, notas})
  }
  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;

import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from './dados/Categorias';
import ArrayDeNotas from "./dados/Notas";

/*
 se a classe ListaDeNotas não tiver antes o export default, posso importar aqui colocando entre chaves: {ListaDeNotas}
 shift+alt+F usa o Prettier para formatar o código!
 F12 - vai até o arquivo da class importada :0
 com o plugin Simple React Snippets, tenho alguns comandos para agilizar:
 imrc - import React from 'react'
 cc - class  extends Component

 statefull components - componentes que guardam info relevantes e q vamos precisar, ficar gerenciando
 stateless components - sem estado, ou seja, componente muito simples, como o ListaDeNotas, pois só renderiza, não gerencia, ou função que altera algum componente, ele só renderiza aquilo que recebe.

 utilizando classes para Categoria e Notas, retiro a necessidade do App.js de armazenar as categorias e notas em um state, pois isso significa que cada vez que uma nova nota ou categoria é adicionada, é necessário renderizar toda a página.

 Props são propriedades que passamos de um componente para outro quando o componente filho precisa de uma informação que o componente pai possui.
 Já o state é uma forma de salvar informações que serão observadas pelo Virtual Dom.

*/

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    // obs: o criaNota é uma propriedade(props) e é passado para o FormularioCadastro o método do App
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criaNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;

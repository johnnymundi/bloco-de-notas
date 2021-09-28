import React from "react";
import "./estilo.css";

class ListaDeCategorias extends React.Component {
  constructor() {
    super();
    this.state = {categorias: []}
    // this._novasCategorias precisa ser chamado aqui, pois no componentDidMount(), essa função retorna uma nova função e, desse modo, o desinscrever não funcionaria pois estaria relacionado à duas funções diferentes. Assim, desse modo aqui, o desinscrever recebe a mesma referência de função.
    this._novasCategorias = this._novasCategorias.bind(this);
  }


  // componente React invocado imediatament após um componente ser montado. Bom para colocar qualquer subscrição.
  componentDidMount() {
    //'pega essa fonte de dados que recebi como propriedade, me inscreve nela, fala pra ela executar esse método quando eu tiver alguma notificação'.
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  // para desinscrever, chamamos o componnetWillUnmount que é a 'desrenderização', desmontagem
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias.bind(this))
  }

  _novasCategorias(categorias) {
    // o state atualiza quando essa função é chamada lá na classe Categoria, que ativa o notificar com forEach, o que faz com que esse método _novasCategorias receba a categoria digitada e armazenada no this.categorias da classe Categoria.
    this.setState({...this.state, categorias})
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          className="lista-categorias_input"
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;

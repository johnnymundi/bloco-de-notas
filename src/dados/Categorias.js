export default class Categorias {
  /* criando uma categoria zerada primeiramente

  criando um padrão Observable para essa categoria ser observável
  é preciso criar três métodos: escrever(handler) que funciona como um método para que componentes conheçam esse objeto de Categorias;
  desescrever - necessário pois se o notificar tentar iniciar uma função de um objeto já destruído, vai dar crash
  notificar - que funciona para notificar os componentes inscritos para que renderizem a mudança no Categorias    
  */
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    // os inscritos sendo recebidos como função 
    this._inscritos.push(func)
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter(f => f !== func);
  }

  notificar() {
    // pra cada inscrito, estou executando a função que foi passada passando as categorias como parâmetro
    this._inscritos.forEach(func => func(this.categorias));
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}
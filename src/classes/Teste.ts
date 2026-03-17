import { TipoTeste } from "../enums/TipoTeste.js";

export default class Teste {
  private _tipo: TipoTeste;
  resultado: string;

  constructor(tipo: TipoTeste, resultado: string) {
    this._tipo = tipo;
    this.resultado = resultado;
  }

  get visualizarTeste(): TipoTeste {
    return this._tipo;
  }
}

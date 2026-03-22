import type { ResultadoTeste } from "../enums/ResultadoTeste.js";
import { TipoTeste } from "../enums/TipoTeste.js";

export default class Teste {
  private _tipo: TipoTeste;
  resultado: string;

  constructor(tipo: TipoTeste, resultado: string) {
    this._tipo = tipo;
    this.resultado = resultado;
  }

  get descricao(): string {
    return `Teste ${this._tipo} - Resultado: ${this.resultado}`;
  }

  definirResultado(resultado: ResultadoTeste) {
    if (this.resultado !== null) {
      throw new Error("Resultado já definido.");
    }
    this.resultado = resultado;
  }
}

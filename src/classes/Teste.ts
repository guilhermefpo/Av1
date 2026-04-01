import { TipoTeste } from "../enums/TipoTeste.js";
import { ResultadoTeste } from "../enums/ResultadoTeste.js";

export default class Teste {
  private _tipo: TipoTeste;
  private _resultado: ResultadoTeste | null = null;

  constructor(tipo: TipoTeste) {
    this._tipo = tipo;
  }

  definirResultado(resultado: ResultadoTeste) {
    if (this._resultado !== null) {
      throw new Error("Resultado já definido.");
    }
    this._resultado = resultado;
  }

  get descricao(): string {
    return `Teste ${this._tipo} - Resultado: ${this._resultado ?? "Pendente"}`;
  }
}

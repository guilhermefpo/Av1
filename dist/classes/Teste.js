import { TipoTeste } from "../enums/TipoTeste.js";
import { ResultadoTeste } from "../enums/ResultadoTeste.js";
export default class Teste {
    _tipo;
    _resultado = null;
    constructor(tipo) {
        this._tipo = tipo;
    }
    definirResultado(resultado) {
        if (this._resultado !== null) {
            throw new Error("Resultado já definido.");
        }
        this._resultado = resultado;
    }
    get descricao() {
        return `Teste ${this._tipo} - Resultado: ${this._resultado ?? "Pendente"}`;
    }
}

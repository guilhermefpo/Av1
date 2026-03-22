import { TipoTeste } from "../enums/TipoTeste.js";
export default class Teste {
    _tipo;
    resultado;
    constructor(tipo, resultado) {
        this._tipo = tipo;
        this.resultado = resultado;
    }
    get visualizarTeste() {
        return this._tipo;
    }
}

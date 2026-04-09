import * as fs from "fs";
import { TipoTeste } from "../enums/TipoTeste.js";
import { ResultadoTeste } from "../enums/ResultadoTeste.js";
export default class Teste {
    _tipo;
    _resultado = null;
    constructor(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    get resultado() {
        return this._resultado;
    }
    definirResultado(resultado) {
        if (this._resultado !== null) {
            console.log("Aviso: Este teste já possui um resultado definido.");
            return;
        }
        this._resultado = resultado;
        console.log(`Teste ${this._tipo} finalizado como: ${resultado}`);
    }
    get descricao() {
        return `Teste ${this._tipo} - Resultado: ${this._resultado ?? "Pendente"}`;
    }
    // REQUISITO: Persistência (Salvar resultados)
    salvar(codigoAeronave) {
        const dados = JSON.stringify({ tipo: this._tipo, resultado: this._resultado }, null, 2);
        try {
            if (!fs.existsSync("./database/testes")) {
                fs.mkdirSync("./database/testes", { recursive: true });
            }
            fs.writeFileSync(`./database/testes/teste_${this._tipo}_${codigoAeronave}.txt`, dados, "utf-8");
        }
        catch (err) {
            console.error("Erro ao salvar teste:", err);
        }
    }
}

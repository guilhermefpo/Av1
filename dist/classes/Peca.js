import { StatusPeca } from "../enums/StatusPeca.js";
import { TipoPeca } from "../enums/TipoPeca.js";
export default class Peca {
    id;
    nome;
    tipo;
    fornecedor;
    status;
    constructor(id, nome, _tipo, fornecedor, _status) {
        this.id = id;
        this.nome = nome;
        this.tipo = _tipo;
        this.fornecedor = fornecedor;
        this.status = _status;
    }
    get descricao() {
        return `${this.nome} (${this.tipo}) - ${this.status}`;
    }
    atualizarStatus(novoStatus) {
        if (this.status === StatusPeca.PRONTA) {
            throw new Error("Peça já finalizada.");
        }
        this.status = novoStatus;
    }
}

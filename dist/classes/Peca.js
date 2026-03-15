import StatusPeca from "../enums/StatusPeca.js";
export default class Peca {
    id;
    nome;
    status;
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.status = StatusPeca.Disponivel;
    }
    usar() {
        this.status = StatusPeca.EmUso;
    }
    danificada() {
        this.status = StatusPeca.Danificada;
    }
}

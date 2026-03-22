import StatusEtapa from "../enums/StatusEtapa.js";
export default class Etapa {
    nome;
    prazo;
    status;
    constructor(nome, prazo, status) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
    }
    get visualizarStatus() {
        return this.status;
    }
}

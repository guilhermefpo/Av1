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
    get descricao() {
        return `${this.nome} — ${this.prazo} (${this.status})`;
    }
    get visualizarStatus() {
        return `Status atual: ${this.status}`;
    }
    iniciar() {
        if (this.status === StatusEtapa.PENDENTE) {
            this.status = StatusEtapa.ANDAMENTO;
        }
        else {
            throw new Error("Etapa não pode ser iniciada.");
        }
    }
    finalizar() {
        if (this.status === StatusEtapa.ANDAMENTO) {
            this.status = StatusEtapa.CONCLUIDA;
        }
    }
}

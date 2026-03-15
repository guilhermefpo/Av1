import StatusEtapa from "../enums/StatusEtapa.js";
export default class Etapa {
    id;
    etapa;
    nome;
    constructor(id, nome) {
        this.id = id;
        this.etapa = StatusEtapa.Planejamento;
        this.nome = nome;
    }
    revisao() {
        this.etapa = StatusEtapa.Revisao;
    }
    validacao() {
        this.etapa = StatusEtapa.Validacao;
    }
    concluido() {
        this.etapa = StatusEtapa.Concluido;
    }
    espera() {
        this.etapa = StatusEtapa.EmEspera;
    }
}

import StatusEtapa from "../enums/StatusEtapa.js";
export default class Etapa {
    etapa;
    constructor() {
        this.etapa = StatusEtapa.Planejamento;
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

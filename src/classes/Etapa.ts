import StatusEtapa from "../enums/StatusEtapa.js";

export default class Etapa {
  statusEtapa: StatusEtapa;

  constructor() {
    this.statusEtapa = StatusEtapa.Planejamento;
  }

  revisao() {
    this.statusEtapa = StatusEtapa.Revisao;
  }

  validacao() {
    this.statusEtapa = StatusEtapa.Validacao;
  }

  concluido() {
    this.statusEtapa = StatusEtapa.Concluido;
  }

  espera() {
    this.statusEtapa = StatusEtapa.EmEspera;
  }
}

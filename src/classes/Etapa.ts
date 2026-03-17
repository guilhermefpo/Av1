import StatusEtapa from "../enums/StatusEtapa.js";

export default class Etapa {
  nome: string;
  prazo: string;
  status: StatusEtapa;

  constructor(nome: string, prazo: string, status: StatusEtapa) {
    this.nome = nome;
    this.prazo = prazo;
    this.status = status;
  }

  get visualizarStatus() {
    return this.status;
  }
}

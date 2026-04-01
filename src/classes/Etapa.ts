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

  get descricao(): string {
    return `${this.nome} — ${this.prazo} (${this.status})`;
  }

  get visualizarStatus(): string {
    return `Status atual: ${this.status}`;
  }

  iniciar() {
    if (this.status === StatusEtapa.PENDENTE) {
      this.status = StatusEtapa.ANDAMENTO;
    } else {
      throw new Error("Etapa não pode ser iniciada.");
    }
  }

  finalizar() {
    if (this.status === StatusEtapa.ANDAMENTO) {
      this.status = StatusEtapa.CONCLUIDA;
    }
  }
}

import StatusPeca from "../enums/StatusPeca.js";

export default class Peca {
  nome: string;
  status: StatusPeca;

  constructor(nome: string) {
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

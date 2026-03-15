import StatusPeca from "../enums/StatusPeca.js";

export default class Peca {
  id: string;
  nome: string;
  status: StatusPeca;

  constructor(id: string, nome: string) {
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

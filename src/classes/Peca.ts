import { StatusPeca } from "../enums/StatusPeca.js";
import { TipoPeca } from "../enums/TipoPeca.js";

export default class Peca {
  id: string;
  nome: string;
  tipo: TipoPeca;
  fornecedor: string;
  status: StatusPeca;

  constructor(
    id: string,
    nome: string,
    _tipo: TipoPeca,
    fornecedor: string,
    _status: StatusPeca,
  ) {
    this.id = id;
    this.nome = nome;
    this.tipo = _tipo;
    this.fornecedor = fornecedor;
    this.status = _status;
  }
  get descricao() {
    return `${this.nome} (${this.tipo}) - ${this.status}`;
  }

  atualizarStatus(novoStatus: StatusPeca) {
    if (this.status === StatusPeca.PRONTA) {
      throw new Error("Peça já finalizada.");
    }
    this.status = novoStatus;
  }
}

export default class Peca {
  nome: string;
  tipo: string;
  fornecedor: string;
  status: string;

  constructor(nome: string, tipo: string, fornecedor: string, status: string) {
    this.nome = nome;
    this.tipo = tipo;
    this.fornecedor = fornecedor;
    this.status = status;
  }
}

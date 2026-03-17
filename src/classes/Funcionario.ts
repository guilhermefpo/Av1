export default class Funcionario {
  id: string;
  nome: string;
  telefone: number;
  endereco: string;
  usuario: string;
  senha: number;

  constructor(
    id: string,
    nome: string,
    telefone: number,
    endereco: string,
    usuario: string,
    senha: number,
  ) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.usuario = usuario;
    this.senha = senha;
  }
}

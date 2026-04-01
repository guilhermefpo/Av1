import { NivelPermissao } from "../enums/NivelPermissao.js";

export default class Funcionario {
  id: string;
  nome: string;
  telefone: string;
  endereco: string;
  usuario: string;
  private senha: string;
  private _nivelPermissao: NivelPermissao;

  constructor(
    id: string,
    nome: string,
    telefone: string,
    endereco: string,
    usuario: string,
    senha: string,
    nivelPermissao: NivelPermissao,
  ) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
    this.usuario = usuario;
    this.senha = senha;
    this._nivelPermissao = nivelPermissao;
  }

  get nivelPermissao(): NivelPermissao {
    return this._nivelPermissao;
  }

  autenticar(usuario: string, senha: string): boolean {
    return this.usuario === usuario && this.senha === senha;
  }

  isAdmin(): boolean {
    return this._nivelPermissao === NivelPermissao.ADMINISTRADOR;
  }
}

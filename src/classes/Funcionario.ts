import { NivelPermissao } from "../enums/NivelPermissao.js";
import type Etapa from "./Etapa.js";
import Peca from "./Peca.js";
import type Teste from "./Teste.js";

export default class Funcionario {
  id: string;
  nome: string;
  telefone: string;
  endereco: string;
  usuario: string;
  senha: string;
  private _nivelPermissao: NivelPermissao;
  private _pecas: Peca[] = [];
  private _etapas: Etapa[] = [];
  private _testes: Teste[] = [];

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

  // Método auxiliar para verificar permissão
  private verificarPermissao() {
    if (this._nivelPermissao !== NivelPermissao.ADMINISTRADOR) {
      console.log("Somente o administrador poderá alterar.");
      return false;
    }
    return true;
  }

  adicionarPeca(peca: Peca) {
    if (this.verificarPermissao()) {
      this._pecas.push(peca);
    }
  }

  get pecas(): Peca[] {
    return this._pecas;
  }

  adicionarEtapa(etapa: Etapa) {
    if (this.verificarPermissao()) {
      this._etapas.push(etapa);
    }
  }

  get etapas(): Etapa[] {
    return this._etapas;
  }

  adicionarTeste(teste: Teste) {
    if (this.verificarPermissao()) {
      this._testes.push(teste);
    }
  }

  get testes(): Teste[] {
    return this._testes;
  }
}

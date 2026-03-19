import type { Etapa, Teste } from "./index.js";
import type Peca from "./Peca.js";
import { TipoAeronave } from "../enums/TipoAeronave.js";
import Funcionario from "./Funcionario.js";

export default class Aeronave {
  codigo: string;
  modelo: string;
  tipo: TipoAeronave;
  capacidade: number;
  alcance: number;
  private _pecas: Peca[] = [];
  private _etapas: Etapa[] = [];
  private _testes: Teste[] = [];

  constructor(
    codigo: string,
    modelo: string,
    tipo: TipoAeronave,
    capacidade: number,
    alcance: number,
  ) {
    this.codigo = codigo;
    this.modelo = modelo;
    this.tipo = tipo;
    this.capacidade = capacidade;
    this.alcance = alcance;
  }

  exibirDetalhes() {
    return `Códogo: ${this.codigo}
      Modelo: ${this.modelo}
       Tipo: ${this.tipo}
       Capacidade: ${this.capacidade}
       Alcance: ${this.alcance}
      `;
  }

  adicionarPecaPorFuncionario(peca: Peca, funcionario: Funcionario) {
    if (funcionario.isAdmin()) {
      this._pecas.push(peca);
    } else {
      throw new Error(
        "Permissão insuficiente: somente administradores podem adicionar peças.",
      );
    }
  }

  adicionarEtapaPorFuncionario(etapa: Etapa, funcionario: Funcionario) {
    if (funcionario.isAdmin()) {
      this._etapas.push(etapa);
    } else {
      throw new Error(
        "Permissão insuficiente: somente administradores podem adicionar etapas.",
      );
    }
  }

  adicionarTestePorFuncionario(teste: Teste, funcionario: Funcionario) {
    if (funcionario.isAdmin()) {
      this._testes.push(teste);
    } else {
      throw new Error(
        "Permissão insuficiente: somente administradores podem adicionar testes.",
      );
    }
  }

  get pecas(): ReadonlyArray<Peca> {
    return this._pecas;
  }

  get etapas(): ReadonlyArray<Etapa> {
    return this._etapas;
  }

  get testes(): ReadonlyArray<Teste> {
    return this._testes;
  }
}

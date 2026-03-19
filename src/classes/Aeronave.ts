import type { Etapa, Teste } from "./index.js";
import type Peca from "./Peca.js";
import { TipoAeronave } from "../enums/TipoAeronave.js";
import { NivelPermissao } from "../enums/NivelPermissao.js";

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
    console.log(`Código: ${this.codigo}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Capacidade: ${this.capacidade}`);
    console.log(`Alcance: ${this.alcance}`);
  }

  adicionarPecaPorFuncionario(peca: Peca) {
    if (!NivelPermissao.ADMINISTRADOR) {
      this._pecas.push(peca);
    } else {
      throw new Error("Permissão insuficiente.");
    }
  }

  adicionarEtapaPorFuncionario(etapa: Etapa) {
    if (!NivelPermissao.ADMINISTRADOR) {
      this._etapas.push(etapa);
    } else {
      throw new Error("Permissão insuficiente.");
    }
  }

  adicionarTestePorFuncionario(teste: Teste) {
    if (!NivelPermissao.ADMINISTRADOR) {
      this._testes.push(teste);
    } else {
      throw new Error("Permissão insuficiente.");
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

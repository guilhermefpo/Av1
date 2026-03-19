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
    console.log(`Código: ${this.codigo}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Capacidade: ${this.capacidade}`);
    console.log(`Alcance: ${this.alcance}`);
  }

  adicionarPecaPorFuncionario(peca: Peca, funcionario: Funcionario) {
    if (funcionario.nivelPermissao === "ADMINISTRADOR") {
      this._pecas.push(peca);
    } else {
      console.log(
        "Permissão insuficiente: somente administradores podem adicionar peças.",
      );
    }
  }

  adicionarEtapaPorFuncionario(etapa: Etapa, funcionario: Funcionario) {
    if (funcionario.nivelPermissao === "ADMINISTRADOR") {
      this._etapas.push(etapa);
    } else {
      console.log(
        "Permissão insuficiente: somente administradores podem adicionar etapas.",
      );
    }
  }

  adicionarTestePorFuncionario(teste: Teste, funcionario: Funcionario) {
    if (funcionario.nivelPermissao === "ADMINISTRADOR") {
      this._testes.push(teste);
    } else {
      console.log(
        "Permissão insuficiente: somente administradores podem adicionar testes.",
      );
    }
  }

  get pecas(): Peca[] {
    return this._pecas;
  }

  get etapas(): Etapa[] {
    return this._etapas;
  }

  get testes(): Teste[] {
    return this._testes;
  }
}

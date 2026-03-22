import { TipoAeronave } from "../enums/TipoAeronave.js";
import Funcionario from "./Funcionario.js";
export default class Aeronave {
    codigo;
    modelo;
    tipo;
    capacidade;
    alcance;
    _pecas = [];
    _etapas = [];
    _testes = [];
    constructor(codigo, modelo, tipo, capacidade, alcance) {
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
    adicionarPecaPorFuncionario(peca, funcionario) {
        if (funcionario.isAdmin()) {
            this._pecas.push(peca);
        }
        else {
            throw new Error("Permissão insuficiente: somente administradores podem adicionar peças.");
        }
    }
    adicionarEtapaPorFuncionario(etapa, funcionario) {
        if (funcionario.isAdmin()) {
            this._etapas.push(etapa);
        }
        else {
            throw new Error("Permissão insuficiente: somente administradores podem adicionar etapas.");
        }
    }
    adicionarTestePorFuncionario(teste, funcionario) {
        if (funcionario.isAdmin()) {
            this._testes.push(teste);
        }
        else {
            throw new Error("Permissão insuficiente: somente administradores podem adicionar testes.");
        }
    }
    get pecas() {
        return this._pecas;
    }
    get etapas() {
        return this._etapas;
    }
    get testes() {
        return this._testes;
    }
}

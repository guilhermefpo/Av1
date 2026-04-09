import * as fs from "fs";
import { Etapa, Teste } from "./index.js";
import Peca from "./Peca.js";
import { TipoAeronave } from "../enums/TipoAeronave.js";
import { StatusEtapa } from "../enums/StatusEtapa.js";
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
        return `Código: ${this.codigo}
      Modelo: ${this.modelo}
      Tipo: ${this.tipo}
      Capacidade: ${this.capacidade}
      Alcance: ${this.alcance}`;
    }
    finalizarEtapa(index) {
        const etapaAtual = this._etapas[index];
        if (!etapaAtual)
            return;
        if (index > 0) {
            const etapaAnterior = this._etapas[index - 1];
            if (!etapaAnterior || etapaAnterior.status !== StatusEtapa.CONCLUIDA) {
                console.log("Erro: A etapa anterior deve ser concluída primeiro.");
                return;
            }
        }
        etapaAtual.status = StatusEtapa.CONCLUIDA;
    }
    // --- REQUISITO: PERSISTÊNCIA EM ARQUIVO ---
    salvar() {
        const dados = JSON.stringify(this, null, 2);
        fs.writeFileSync(`./${this.codigo}.txt`, dados, "utf-8");
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

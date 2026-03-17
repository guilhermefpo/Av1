import type { Etapa, Teste } from "./index.js";
import type Peca from "./Peca.js";

export default class Aeronave {
  codigo: string;
  modelo: string;
  tipo: string;
  capacidade: number;
  alcance: number;
  pecas: Peca[] = [];
  etapas: Etapa[] = [];
  testes: Teste[] = [];

  constructor(
    codigo: string,
    modelo: string,
    tipo: string,
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
}

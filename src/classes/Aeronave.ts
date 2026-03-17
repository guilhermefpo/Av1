export default class Aeronave {
  codigo: number;
  modelo: string;
  tipo: string;
  capacidade: number;
  alcance: number;
  listaObjetos: any[] = [];
  constructor(
    codigo: number,
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
}

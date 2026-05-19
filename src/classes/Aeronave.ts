import * as fs from "fs";
import { TipoAeronave } from "../enums/index.js";
import Peca from "./Peca.js";
import Etapa from "./Etapa.js";
import Teste from "./Teste.js";

export default class Aeronave {
  public pecas: Peca[] = [];
  public etapas: Etapa[] = [];
  public testes: Teste[] = [];

  constructor(
    public codigo: string,
    public modelo: string,
    public tipo: TipoAeronave,
    public capacidade: number,
    public alcance: number,
  ) {}

  salvar(): void {
    const data = `${this.codigo};${this.modelo};${this.tipo};${this.capacidade};${this.alcance}\n`;
    if (!fs.existsSync("./data")) {
      fs.mkdirSync("./data");
    }
    fs.appendFileSync("./data/aeronaves.txt", data, "utf8");
  }
}

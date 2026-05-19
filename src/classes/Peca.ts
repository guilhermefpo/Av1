import * as fs from "fs";
import { TipoPeca, StatusPeca } from "../enums/index.js";

export default class Peca {
  constructor(
    public id: string,
    public nome: string,
    public tipo: TipoPeca,
    public fornecedor: string,
    public status: StatusPeca,
  ) {}

  atualizarStatus(novoStatus: StatusPeca): void {
    this.status = novoStatus;
  }

  salvar(): void {
    const data = `${this.id};${this.nome};${this.tipo};${this.fornecedor};${this.status}\n`;

    if (!fs.existsSync("./data")) {
      fs.mkdirSync("./data");
    }

    fs.appendFileSync("./data/pecas.txt", data, "utf8");
  }
}

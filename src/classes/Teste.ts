import * as fs from "fs";
import { TipoTeste, ResultadoTeste } from "../enums/index.js";

export default class Teste {
  constructor(
    public tipo: TipoTeste,
    public resultado: ResultadoTeste,
  ) {}

  salvar(): void {
    const data = `${this.tipo};${this.resultado}\n`;

    if (!fs.existsSync("./data")) {
      fs.mkdirSync("./data");
    }

    fs.appendFileSync("./data/testes.txt", data, "utf8");
  }
}

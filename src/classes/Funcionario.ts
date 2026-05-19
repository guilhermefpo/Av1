import * as fs from "fs";
import { NivelPermissao } from "../enums/index.js";

export default class Funcionario {
  constructor(
    public id: string,
    public nome: string,
    public telefone: string,
    public endereco: string,
    public usuario: string,
    public senha: string,
    public nivelPermissao: NivelPermissao,
  ) {}

  autenticar(usuario: string, senha: string): boolean {
    return this.usuario === usuario && this.senha === senha;
  }

  salvar(): void {
    const data = `${this.id};${this.nome};${this.telefone};${this.endereco};${this.usuario};${this.senha};${this.nivelPermissao}\n`;

    if (!fs.existsSync("./data")) {
      fs.mkdirSync("./data");
    }

    fs.appendFileSync("./data/funcionarios.txt", data, "utf8");
  }

  static carregar(): Funcionario[] {
    if (!fs.existsSync("./data/funcionarios.txt")) return [];

    const linhas = fs
      .readFileSync("./data/funcionarios.txt", "utf8")
      .split("\n")
      .filter((l) => l.trim());

    return linhas.map((linha) => {
      const [id, nome, tel, end, user, pass, nivel] = linha.split(";");

      return new Funcionario(
        id ?? "",
        nome ?? "",
        tel ?? "",
        end ?? "",
        user ?? "",
        pass ?? "",
        (nivel ?? "") as NivelPermissao,
      );
    });
  }
}

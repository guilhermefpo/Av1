import * as fs from "fs";
import { StatusPeca } from "../enums/StatusPeca.js";
import { TipoPeca } from "../enums/TipoPeca.js";

export default class Peca {
  id: string;
  nome: string;
  tipo: TipoPeca;
  fornecedor: string;
  status: StatusPeca;

  constructor(
    id: string,
    nome: string,
    tipo: TipoPeca,
    fornecedor: string,
    status: StatusPeca,
  ) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.fornecedor = fornecedor;
    this.status = status;
  }

  get descricao() {
    return `${this.nome} (${this.tipo}) - Fornecedor: ${this.fornecedor} | Status: ${this.status}`;
  }

  atualizarStatus(novoStatus: StatusPeca) {
    if (this.status === StatusPeca.PRONTA && novoStatus !== StatusPeca.PRONTA) {
      console.log("Aviso: Esta peça já consta como PRONTA PARA USO.");
      return;
    }
    this.status = novoStatus;
    console.log(`Status da peça ${this.nome} atualizado para: ${novoStatus}`);
  }

  salvar() {
    const dados = JSON.stringify(this, null, 2);
    try {
      if (!fs.existsSync("./database/pecas")) {
        fs.mkdirSync("./database/pecas", { recursive: true });
      }
      fs.writeFileSync(`./database/pecas/peca_${this.id}.txt`, dados, "utf-8");
    } catch (err) {
      console.error("Erro ao salvar peça:", err);
    }
  }
}

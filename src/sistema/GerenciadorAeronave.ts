import Aeronave from "../classes/Aeronave.js";
import Funcionario from "../classes/Funcionario.js";
import Peca from "../classes/Peca.js";
import Etapa from "../classes/Etapa.js";
import Teste from "../classes/Teste.js";
import * as fs from "fs";

export default class GerenciadorAeronave {
  private aeronave: Aeronave;
  private funcionarios: Funcionario[] = [];

  constructor(aeronave: Aeronave) {
    this.aeronave = aeronave;
  }

  adicionarFuncionario(f: Funcionario): void {
    if (!this.funcionarios.some((func) => func.id === f.id)) {
      this.funcionarios.push(f);
    }
  }

  listarFuncionarios(): ReadonlyArray<Funcionario> {
    return this.funcionarios;
  }

  adicionarPeca(p: Peca, funcionario: Funcionario): void {
    this.adicionarFuncionario(funcionario);
    this.aeronave.pecas.push(p);
  }

  adicionarEtapa(e: Etapa, funcionario: Funcionario): void {
    this.adicionarFuncionario(funcionario);
    e.adicionarFuncionario(funcionario);
    this.aeronave.etapas.push(e);
  }

  adicionarTeste(t: Teste, funcionario: Funcionario): void {
    this.adicionarFuncionario(funcionario);
    this.aeronave.testes.push(t);
  }

  salvarEstado(): void {
    const dados = JSON.stringify(
      {
        aeronave: this.aeronave,
        equipe: this.funcionarios,
      },
      null,
      2,
    );

    const pastaDestino = "./data";

    try {
      if (!fs.existsSync(pastaDestino)) {
        fs.mkdirSync(pastaDestino, { recursive: true });
      }

      fs.writeFileSync(
        `${pastaDestino}/gerenciamento_${this.aeronave.codigo}.json`,
        dados,
        "utf8",
      );
      console.log(
        `[SISTEMA] Estado do gerenciamento da aeronave ${this.aeronave.codigo} salvo com sucesso.`,
      );
    } catch (err) {
      console.error("Erro ao salvar o estado do gerenciamento:", err);
    }
  }

  getAeronave(): Aeronave {
    return this.aeronave;
  }
}

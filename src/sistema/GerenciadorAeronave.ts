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

  adicionarFuncionario(f: Funcionario) {
    if (!this.funcionarios.some((func) => func.id === f.id)) {
      this.funcionarios.push(f);
    }
  }

  listarFuncionarios(): ReadonlyArray<Funcionario> {
    return this.funcionarios;
  }

  adicionarPeca(p: Peca, funcionario: Funcionario) {
    this.aeronave.adicionarPecaPorFuncionario(p, funcionario);
  }

  adicionarEtapa(e: Etapa, funcionario: Funcionario) {
    this.aeronave.adicionarEtapaPorFuncionario(e, funcionario);
  }

  adicionarTeste(t: Teste, funcionario: Funcionario) {
    this.aeronave.adicionarTestePorFuncionario(t, funcionario);
  }

  salvarEstado() {
    const dados = JSON.stringify(
      {
        //
        aeronave: this.aeronave,
        equipe: this.funcionarios,
      },
      null,
      2,
    );

    fs.writeFileSync(
      `./database/gerenciamento_${this.aeronave.codigo}.txt`,
      dados,
    );
    console.log(`Estado do gerenciamento da ${this.aeronave.codigo} salvo.`);
  }

  getAeronave() {
    return this.aeronave;
  }
}

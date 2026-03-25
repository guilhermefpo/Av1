import type { Aeronave, Etapa, Funcionario, Peca, Teste } from "../classes/index.js";

export default class GerenciadorAeronave {
  private aeronave: Aeronave;
  private funcionarios: Funcionario[] = [];

  constructor(aeronave: Aeronave) {
    this.aeronave = aeronave;
  }

  adicionarFuncionario(f: Funcionario) {
    this.funcionarios.push(f);
  }

  listarFuncionarios() {
    return this.funcionarios;
  }

  adicionarPeca(peca: Peca, funcionario: Funcionario) {
    this.aeronave.adicionarPecaPorFuncionario(peca, funcionario);
  }

  adicionarEtapa(etapa: Etapa, funcionario: Funcionario) {
    this.aeronave.adicionarEtapaPorFuncionario(etapa, funcionario)
  }

  adicionarTeste(teste: Teste, funcionario: Funcionario) {
    this.aeronave.adicionarTestePorFuncionario(teste, funcionario)
  }

  getAeronave() {
    return this.aeronave
  }
}

import Aeronave from "../classes/Aeronave.js";
import Funcionario from "../classes/Funcionario.js";
import Peca from "../classes/Peca.js";
import Etapa from "../classes/Etapa.js";
import Teste from "../classes/Teste.js";

export default class GerenciadorAeronave {
  private aeronave: Aeronave;
  private funcionarios: Funcionario[] = [];

  constructor(aeronave: Aeronave) {
    this.aeronave = aeronave;
  }

  adicionarFuncionario(f: Funcionario) {
    this.funcionarios.push(f);
  }

  listarFuncionarios(): Funcionario[] {
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

  getAeronave() {
    return this.aeronave;
  }
}

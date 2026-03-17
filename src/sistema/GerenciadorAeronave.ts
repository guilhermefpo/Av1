/* import Aeronave from "../classes/Aeronave.js";
import Funcionario from "../classes/Funcionario.js";
import Peca from "../classes/Peca.js";
import Etapa from "../classes/Etapa.js";
import Teste from "../classes/Teste.js";

export default class GerenciadorAeronave {
  public aeronave: Aeronave;
  public funcionarios: Funcionario[] = [];
  public pecas: Peca[] = [];
  public etapa: Etapa[] = [];
  public testes: Teste[] = [];

  constructor(aeronave: Aeronave) {
    this.aeronave = aeronave;
  }

  adicionarFuncionario(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }

  removerFuncionario(id: string) {
    this.funcionarios = this.funcionarios.filter((f) => f.id !== id);
  }

  adicionarPeca(peca: Peca) {
    this.pecas.push(peca);
  }

  adicionarEtapa(etapa: Etapa) {
    this.etapa.push(etapa);
  }

  adicionarTeste(teste: Teste) {
    this.testes.push(teste);
  }

  removerPeca(id: string) {
    this.pecas = this.pecas.filter((p) => p.id !== id);
  }

  removerEtapa(id: string) {
    this.etapa = this.etapa.filter((e) => e.id !== id);
  }

  removerTeste(id: string) {
    this.testes = this.testes.filter((t) => t.id !== id);
  }

  listarFuncionarios() {
    return this.funcionarios.map((f) => f.nome);
  } // De Museo - Bad Bunny

  listarPecas() {
    return this.pecas.map((p) => `${p.nome} (${p.status})`);
  }
}
 */

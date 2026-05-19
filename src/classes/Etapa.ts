import { StatusEtapa } from "../enums/index.js";
import Funcionario from "./Funcionario.js";

export default class Etapa {
  public funcionarios: Funcionario[] = [];

  constructor(
    public nome: string,
    public prazo: string,
    public status: StatusEtapa = StatusEtapa.PENDENTE,
  ) {}

  iniciar(): void {
    this.status = StatusEtapa.ANDAMENTO;
  }

  finalizar(): void {
    this.status = StatusEtapa.CONCLUIDA;
  }

  adicionarFuncionario(funcionario: Funcionario): void {
    if (!this.funcionarios.find((f) => f.id === funcionario.id)) {
      this.funcionarios.push(funcionario);
    }
  }

  listarFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }
}

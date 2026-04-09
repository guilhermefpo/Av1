import StatusEtapa from "../enums/StatusEtapa.js";
import Funcionario from "./Funcionario.js"; // Import necessário para o vínculo

export default class Etapa {
  nome: string;
  prazo: string;
  status: StatusEtapa;

  private _funcionarios: Funcionario[] = [];

  constructor(nome: string, prazo: string, status: StatusEtapa) {
    this.nome = nome;
    this.prazo = prazo;
    this.status = status;
  }

  get descricao(): string {
    return `${this.nome} — ${this.prazo} (${this.status})`;
  }

  get visualizarStatus(): string {
    return `Status atual: ${this.status}`;
  }

  vincularFuncionario(funcionario: Funcionario) {
    const jaExiste = this._funcionarios.some((f) => f.id === funcionario.id);
    if (!jaExiste) {
      this._funcionarios.push(funcionario);
    } else {
      console.log(
        `Funcionário ${funcionario.nome} já está alocado nesta etapa.`,
      );
    }
  }

  listarResponsaveis(): ReadonlyArray<Funcionario> {
    return this._funcionarios;
  }

  iniciar() {
    if (this.status === StatusEtapa.PENDENTE) {
      this.status = StatusEtapa.ANDAMENTO;
    } else {
      console.log("Aviso: Esta etapa já foi iniciada ou concluída.");
    }
  }

  finalizar() {
    if (this.status === StatusEtapa.ANDAMENTO) {
      this.status = StatusEtapa.CONCLUIDA;
    } else {
      console.log(
        "Erro: Só é possível finalizar etapas que estão 'Em Andamento'.",
      );
    }
  }
}

import StatusEtapa from "../enums/StatusEtapa.js";
import Funcionario from "./Funcionario.js"; // Import necessário para o vínculo
export default class Etapa {
    nome;
    prazo;
    status;
    _funcionarios = [];
    constructor(nome, prazo, status) {
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
    }
    get descricao() {
        return `${this.nome} — ${this.prazo} (${this.status})`;
    }
    get visualizarStatus() {
        return `Status atual: ${this.status}`;
    }
    vincularFuncionario(funcionario) {
        const jaExiste = this._funcionarios.some((f) => f.id === funcionario.id);
        if (!jaExiste) {
            this._funcionarios.push(funcionario);
        }
        else {
            console.log(`Funcionário ${funcionario.nome} já está alocado nesta etapa.`);
        }
    }
    listarResponsaveis() {
        return this._funcionarios;
    }
    iniciar() {
        if (this.status === StatusEtapa.PENDENTE) {
            this.status = StatusEtapa.ANDAMENTO;
        }
        else {
            console.log("Aviso: Esta etapa já foi iniciada ou concluída.");
        }
    }
    finalizar() {
        if (this.status === StatusEtapa.ANDAMENTO) {
            this.status = StatusEtapa.CONCLUIDA;
        }
        else {
            console.log("Erro: Só é possível finalizar etapas que estão 'Em Andamento'.");
        }
    }
}

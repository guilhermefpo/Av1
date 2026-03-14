import Aeronave from "../classes/Aeronave.js";
import Funcionario from "../classes/Funcionario.js";
import Peca from "../classes/Peca.js";
import Etapa from "../classes/Etapa.js";
import Teste from "../classes/Teste.js";
export default class GerenciadorAeronave {
    aeronave;
    funcionarios = [];
    pecas = [];
    etapa = [];
    testes = [];
    constructor(aeronave) {
        this.aeronave = aeronave;
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    adicionarPeca(peca) {
        this.pecas.push(peca);
    }
    adicionarEtapa(etapa) {
        this.etapa.push(etapa);
    }
    adicionarTeste(teste) {
        this.testes.push(teste);
    }
    listarFuncionarios() {
        return this.funcionarios.map((f) => f.nome);
    } // De Museo - Bad Bunny
    listarPecas() {
        return this.pecas.map((p) => `${p.nome} (${p.status})`);
    }
}

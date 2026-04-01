import Aeronave from "../classes/Aeronave.js";
import Funcionario from "../classes/Funcionario.js";
import Peca from "../classes/Peca.js";
import Etapa from "../classes/Etapa.js";
import Teste from "../classes/Teste.js";
export default class GerenciadorAeronave {
    aeronave;
    funcionarios = [];
    constructor(aeronave) {
        this.aeronave = aeronave;
    }
    adicionarFuncionario(f) {
        this.funcionarios.push(f);
    }
    listarFuncionarios() {
        return this.funcionarios;
    }
    adicionarPeca(p, funcionario) {
        this.aeronave.adicionarPecaPorFuncionario(p, funcionario);
    }
    adicionarEtapa(e, funcionario) {
        this.aeronave.adicionarEtapaPorFuncionario(e, funcionario);
    }
    adicionarTeste(t, funcionario) {
        this.aeronave.adicionarTestePorFuncionario(t, funcionario);
    }
    getAeronave() {
        return this.aeronave;
    }
}

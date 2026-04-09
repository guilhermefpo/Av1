import Aeronave from "../classes/Aeronave.js";
import Funcionario from "../classes/Funcionario.js";
import Peca from "../classes/Peca.js";
import Etapa from "../classes/Etapa.js";
import Teste from "../classes/Teste.js";
import * as fs from "fs";
export default class GerenciadorAeronave {
    aeronave;
    funcionarios = [];
    constructor(aeronave) {
        this.aeronave = aeronave;
    }
    adicionarFuncionario(f) {
        if (!this.funcionarios.some((func) => func.id === f.id)) {
            this.funcionarios.push(f);
        }
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
    salvarEstado() {
        const dados = JSON.stringify({
            //
            aeronave: this.aeronave,
            equipe: this.funcionarios,
        }, null, 2);
        fs.writeFileSync(`./database/gerenciamento_${this.aeronave.codigo}.txt`, dados);
        console.log(`Estado do gerenciamento da ${this.aeronave.codigo} salvo.`);
    }
    getAeronave() {
        return this.aeronave;
    }
}

import * as fs from "fs"; // Para salvar os dados dos funcionários
import { NivelPermissao } from "../enums/NivelPermissao.js";
export default class Funcionario {
    id;
    nome;
    telefone;
    endereco;
    usuario;
    senha;
    _nivelPermissao;
    constructor(id, nome, telefone, endereco, usuario, senha, nivelPermissao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this._nivelPermissao = nivelPermissao;
    }
    get nivelPermissao() {
        return this._nivelPermissao;
    }
    autenticar(usuario, senha) {
        return this.usuario === usuario && this.senha === senha;
    }
    isAdmin() {
        return this._nivelPermissao === NivelPermissao.ADMINISTRADOR;
    }
    salvar() {
        const dados = JSON.stringify(this, null, 2);
        try {
            if (!fs.existsSync("./database/funcionarios")) {
                fs.mkdirSync("./database/funcionarios", { recursive: true });
            }
            fs.writeFileSync(`./database/funcionarios/func_${this.id}.txt`, dados, "utf-8");
        }
        catch (err) {
            console.error("Erro ao salvar funcionário:", err);
        }
    }
    exibirPerfil() {
        return `ID: ${this.id} | Nome: ${this.nome} | Cargo: ${this._nivelPermissao}`;
    }
}

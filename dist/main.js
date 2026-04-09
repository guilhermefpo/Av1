import * as readline from "readline";
import Aeronave from "./classes/Aeronave.js";
import Funcionario from "./classes/Funcionario.js";
import Peca from "./classes/Peca.js";
import Etapa from "./classes/Etapa.js";
import Teste from "./classes/Teste.js";
import GerenciadorAeronave from "./sistema/GerenciadorAeronave.js";
import { TipoAeronave } from "./enums/TipoAeronave.js";
import { TipoPeca } from "./enums/TipoPeca.js";
import { StatusPeca } from "./enums/StatusPeca.js";
import { StatusEtapa } from "./enums/StatusEtapa.js";
import { TipoTeste } from "./enums/TipoTeste.js";
import { ResultadoTeste } from "./enums/ResultadoTeste.js";
import { NivelPermissao } from "./enums/NivelPermissao.js";
import Relatorio from "./sistema/Relatorio.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const aeronave = new Aeronave("AERO-001", "Modelo Padrão", TipoAeronave.COMERCIAL, 180, 5000);
const ger = new GerenciadorAeronave(aeronave);
const rel = new Relatorio();
let contadorPeca = 1;
let usuarioLogado = null;
const adminMestre = new Funcionario("ADM-1", "Admin", "000", "Fábrica", "admin", "admin", NivelPermissao.ADMINISTRADOR);
ger.adicionarFuncionario(adminMestre);
function realizarLogin() {
    console.log("\n" + "=".repeat(30));
    console.log("       AEROCODE LOGIN");
    console.log("=".repeat(30));
    rl.question("Usuário: ", (user) => {
        rl.question("Senha: ", (pass) => {
            const lista = ger.listarFuncionarios();
            const encontrou = lista.find((f) => f.autenticar(user, pass));
            if (encontrou) {
                usuarioLogado = encontrou;
                console.log(`\n[OK] Bem-vindo, ${usuarioLogado.nome}!`);
                console.log(`Nível de Acesso: ${usuarioLogado.nivelPermissao}`);
                iniciarMenu();
            }
            else {
                console.log("\n[ERRO] Usuário ou senha inválidos.");
                realizarLogin();
            }
        });
    });
}
function iniciarMenu() {
    console.log("\n" + "=".repeat(35));
    console.log("       AEROCODE SYSTEM");
    console.log("=".repeat(35));
    console.log("Comandos:");
    console.log("- funcionario <id> <nome>");
    console.log("- listarfuncionarios");
    console.log("- peca <nome>");
    console.log("- etapa <nome>");
    console.log("- teste");
    console.log("- listar");
    console.log("- relatorio");
    console.log("- sair");
    rl.question("\n> ", (entrada) => {
        const partes = entrada.trim().split(" ");
        const comando = partes[0]?.toLowerCase();
        try {
            if (comando === "sair") {
                console.log("Deslogando...");
                usuarioLogado = null;
                realizarLogin();
                return;
            }
            switch (comando) {
                case "funcionario":
                    const id = partes[1];
                    const nomeFunc = partes.slice(2).join(" ");
                    if (!id || !nomeFunc) {
                        console.log("Erro: Informe ID e Nome.");
                    }
                    else {
                        const f = new Funcionario(id, nomeFunc, "000", "end", nomeFunc, "123", NivelPermissao.OPERADOR);
                        ger.adicionarFuncionario(f);
                        console.log(`[OK] Funcionário ${nomeFunc} cadastrado.`);
                    }
                    break;
                case "listarfuncionarios":
                    const lista = ger.listarFuncionarios();
                    console.log("\n--- EQUIPE TÉCNICA ---");
                    lista.forEach((f) => console.log(`${f.id.padEnd(8)}| ${f.nome.padEnd(20)}| ${f.nivelPermissao}`));
                    break;
                case "peca":
                    const nomePeca = partes.slice(1).join(" ");
                    if (!nomePeca) {
                        console.log("Erro: Informe o nome da peça.");
                    }
                    else {
                        const p = new Peca(`P${contadorPeca++}`, nomePeca, TipoPeca.NACIONAL, "Fornecedor Padrão", StatusPeca.PRODUCAO);
                        ger.adicionarPeca(p, usuarioLogado);
                        aeronave.salvar();
                        console.log(`[OK] Peça ${nomePeca} vinculada.`);
                    }
                    break;
                case "etapa":
                    const nomeEtapa = partes.slice(1).join(" ");
                    if (!nomeEtapa) {
                        console.log("Erro: Informe o nome da etapa.");
                    }
                    else {
                        const e = new Etapa(nomeEtapa, "15 dias", StatusEtapa.PENDENTE);
                        ger.adicionarEtapa(e, usuarioLogado);
                        aeronave.salvar();
                        console.log(`[OK] Etapa ${nomeEtapa} criada.`);
                    }
                    break;
                case "teste":
                    const t = new Teste(TipoTeste.AERODINAMICO);
                    t.definirResultado(ResultadoTeste.APROVADO);
                    ger.adicionarTeste(t, usuarioLogado);
                    aeronave.salvar();
                    console.log("[OK] Teste realizado.");
                    break;
                case "listar":
                    console.log("\n--- STATUS DA AERONAVE ---");
                    console.log(aeronave.exibirDetalhes());
                    break;
                case "relatorio":
                    rel.gerar(aeronave);
                    break;
                default:
                    console.log("Comando não reconhecido.");
            }
        }
        catch (e) {
            console.log("\n[ERRO]:", e.message);
        }
        iniciarMenu();
    });
}
realizarLogin();

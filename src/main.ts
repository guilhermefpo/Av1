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

const aeronave = new Aeronave(
  "AERO-001",
  "Modelo Padrão",
  TipoAeronave.COMERCIAL,
  180,
  5000,
);

const ger = new GerenciadorAeronave(aeronave);
const rel = new Relatorio();
let contadorPeca = 1;

const admin = new Funcionario(
  "ADM-1",
  "Administrador do Sistema",
  "000",
  "end",
  "admin",
  "admin",
  NivelPermissao.ADMINISTRADOR,
);
ger.adicionarFuncionario(admin);

function iniciar() {
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

  rl.question("\n> ", (entrada: string) => {
    const partes = entrada.trim().split(" ");
    const comando = partes[0]?.toLowerCase();

    try {
      if (comando === "sair") {
        console.log("Desligando sistema...");
        rl.close();
        return;
      }

      switch (comando) {
        case "funcionario":
          const id = partes[1];
          const nomeFunc = partes.slice(2).join(" ");
          if (!id || !nomeFunc) {
            console.log("Erro: Informe ID e Nome.");
          } else {
            const f = new Funcionario(
              id,
              nomeFunc,
              "000",
              "end",
              nomeFunc,
              "123",
              NivelPermissao.OPERADOR,
            );
            ger.adicionarFuncionario(f);
            console.log(`[OK] Funcionário ${nomeFunc} cadastrado.`);
          }
          break;

        case "listarfuncionarios":
          const lista = ger.listarFuncionarios();
          console.log("\n--- EQUIPE TÉCNICA ---");
          if (lista.length === 0) {
            console.log("Nenhum funcionário alocado.");
          } else {
            console.log("ID".padEnd(8) + "| NOME".padEnd(25) + "| CARGO");
            lista.forEach((f) => {
              console.log(
                `${f.id.padEnd(8)}| ${f.nome.padEnd(25)}| ${f.nivelPermissao}`,
              );
            });
          }
          break;

        case "peca":
          const nomePeca = partes.slice(1).join(" ");
          if (!nomePeca) {
            console.log("Erro: Informe o nome da peça.");
          } else {
            const p = new Peca(
              `P${contadorPeca++}`,
              nomePeca,
              TipoPeca.NACIONAL,
              "Fornecedor Padrão",
              StatusPeca.PRODUCAO,
            );
            ger.adicionarPeca(p, admin);
            aeronave.salvar();
            console.log(`[OK] Peça ${nomePeca} vinculada.`);
          }
          break;

        case "etapa":
          const nomeEtapa = partes.slice(1).join(" ");
          if (!nomeEtapa) {
            console.log("Erro: Informe o nome da etapa.");
          } else {
            const e = new Etapa(nomeEtapa, "15 dias", StatusEtapa.PENDENTE);
            ger.adicionarEtapa(e, admin);
            aeronave.salvar();
            console.log(`[OK] Etapa ${nomeEtapa} criada.`);
          }
          break;

        case "teste":
          const t = new Teste(TipoTeste.AERODINAMICO);
          t.definirResultado(ResultadoTeste.APROVADO);
          ger.adicionarTeste(t, admin);
          aeronave.salvar();
          console.log("[OK] Teste Aerodinâmico: APROVADO.");
          break;

        case "listar":
          console.log("\n--- STATUS DA AERONAVE ---");
          console.log(aeronave.exibirDetalhes());
          console.log(
            `Peças: ${aeronave.pecas.length} | Etapas: ${aeronave.etapas.length} | Testes: ${aeronave.testes.length}`,
          );
          break;

        case "relatorio":
          rel.gerar(aeronave);
          break;

        default:
          console.log("Comando não reconhecido.");
      }
    } catch (e: any) {
      console.log("\n[ERRO]:", e.message);
    }

    iniciar();
  });
}

iniciar();

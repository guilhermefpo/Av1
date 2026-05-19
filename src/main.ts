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

let osMuitosAvioes: Aeronave[] = [];
let funcionariosCadastrados: Funcionario[] = [];
let aeronaveContexto: Aeronave | null = null;
let ger: GerenciadorAeronave | null = null;

const rel = new Relatorio();
let contadorPeca = 1;
let usuarioLogado: Funcionario | null = null;

const adminMestre = new Funcionario(
  "ADM-1",
  "Guilherme Fernando",
  "12999999999",
  "Fábrica SJC",
  "admin",
  "admin123",
  NivelPermissao.ADMINISTRADOR,
);
funcionariosCadastrados.push(adminMestre);

function realizarLogin() {
  console.log("\n" + "=".repeat(40));
  console.log("        AEROCODE CORE LOGIN");
  console.log("=".repeat(40));
  console.log(
    " >> Dica: Use o comando 'sair' no menu para testar outro usuário.",
  );
  console.log("-".repeat(40));

  rl.question("Usuário: ", (user) => {
    rl.question("Senha: ", (pass) => {
      const encontrou = funcionariosCadastrados.find((f) =>
        f.autenticar(user, pass),
      );

      if (encontrou) {
        usuarioLogado = encontrou;
        console.log(
          `\n[OK] Autenticado com sucesso: ${usuarioLogado.nome} [${usuarioLogado.nivelPermissao}]`,
        );
        iniciarMenu();
      } else {
        console.log("\n[ERRO] Usuário ou senha inválidos.");
        realizarLogin();
      }
    });
  });
}

function iniciarMenu() {
  console.log("\n" + "=".repeat(45));
  console.log("            AEROCODE CLI SYSTEM");
  console.log("=".repeat(45));
  console.log(
    `Operador Logado: ${usuarioLogado?.nome} | Privilégio: ${usuarioLogado?.nivelPermissao}`,
  );
  console.log(
    `Aeronave em Foco: ${aeronaveContexto ? `${aeronaveContexto.modelo} (${aeronaveContexto.codigo})` : "NENHUMA (Use 'focar <codigo>')"}`,
  );
  console.log("-".repeat(45));
  console.log("Comandos Disponíveis:");
  console.log(" > criaraeronave <codigo> <modelo>");
  console.log(" > listaraeronaves");
  console.log(" > focar <codigo_aeronave>");
  console.log(
    " > funcionario <id> <nome> <usuario> <senha> <admin|engenheiro|operador>",
  );
  console.log(" > listarfuncionarios");
  console.log(" > peca <nome_peca>");
  console.log(" > etapa <nome_etapa>");
  console.log(" > teste");
  console.log(" > status");
  console.log(" > relatorio");
  console.log(" > sair");

  rl.question("\nAeroCode> ", (entrada: string) => {
    const partes = entrada.trim().split(" ");
    const comando = partes[0]?.toLowerCase();

    try {
      if (comando === "sair") {
        console.log("\nDeslogando usuário atual...");
        usuarioLogado = null;
        realizarLogin();
        return;
      }

      switch (comando) {
        case "criaraeronave": {
          if (usuarioLogado?.nivelPermissao !== NivelPermissao.ADMINISTRADOR) {
            console.log(
              "\n[BLOQUEADO] Acesso negado. Requer nível ADMINISTRADOR.",
            );
            break;
          }
          const cod = partes[1];
          const mod = partes.slice(2).join(" ");
          if (!cod || !mod) {
            console.log("Erro: Use 'criaraeronave <codigo> <modelo>'");
          } else {
            const nova = new Aeronave(
              cod,
              mod,
              TipoAeronave.COMERCIAL,
              150,
              4000,
            );
            nova.salvar();
            osMuitosAvioes.push(nova);
            console.log(`\n[OK] Aeronave ${cod} registrada de fábrica.`);
          }
          break;
        }

        case "listaraeronaves":
          console.log("\n--- FROTA EM PROCESSAMENTO ---");
          if (osMuitosAvioes.length === 0)
            console.log("Nenhuma aeronave na fábrica.");
          osMuitosAvioes.forEach((a) => {
            console.log(
              `* Código: ${a.codigo.padEnd(10)} | Modelo: ${a.modelo.padEnd(15)} | Peças: ${a.pecas.length}`,
            );
          });
          break;

        case "focar": {
          const alvo = partes[1];
          const encontrada = osMuitosAvioes.find(
            (a) => a.codigo.toLowerCase() === alvo?.toLowerCase(),
          );
          if (!encontrada) {
            console.log("\n[ERRO] Esta aeronave não foi criada/encontrada.");
          } else {
            aeronaveContexto = encontrada;
            ger = new GerenciadorAeronave(aeronaveContexto);

            funcionariosCadastrados.forEach((f) =>
              ger?.adicionarFuncionario(f),
            );
            console.log(
              `\n[SISTEMA] Gerenciador focado na aeronave: ${aeronaveContexto.codigo}`,
            );
          }
          break;
        }

        case "funcionario": {
          if (usuarioLogado?.nivelPermissao !== NivelPermissao.ADMINISTRADOR) {
            console.log(
              "\n[BLOQUEADO] Cadastro de funcionários restrito a ADMINISTRADORES.",
            );
            break;
          }

          const idFunc = partes[1];
          const cargoStr = partes[partes.length - 1]?.toLowerCase();
          const senhaFunc = partes[partes.length - 2];
          const userFunc = partes[partes.length - 3];
          const nomeFunc = partes.slice(2, partes.length - 3).join(" ");

          if (!idFunc || !nomeFunc || !userFunc || !senhaFunc || !cargoStr) {
            console.log(
              "Erro: Use 'funcionario <id> <nome> <usuario> <senha> <admin|engenheiro|operador>'",
            );
            break;
          }

          let nivel = NivelPermissao.OPERADOR;
          if (cargoStr === "admin") nivel = NivelPermissao.ADMINISTRADOR;
          if (cargoStr === "engenheiro") nivel = NivelPermissao.ENGENHEIRO;

          const f = new Funcionario(
            idFunc,
            nomeFunc,
            "1299999",
            "SJC",
            userFunc,
            senhaFunc,
            nivel,
          );

          funcionariosCadastrados.push(f);

          if (ger) ger.adicionarFuncionario(f);

          console.log(
            `\n[OK] Funcionário técnico '${nomeFunc}' cadastrado no sistema!`,
          );
          console.log(
            `Credenciais geradas -> Usuário: ${userFunc} | Senha: ${senhaFunc}`,
          );
          break;
        }

        case "listarfuncionarios":
          console.log("\n" + "-".repeat(40));
          console.log("   RELAÇÃO DE COMPANHIAS / QUADRO TÉCNICO");
          console.log("-".repeat(40));
          funcionariosCadastrados.forEach((f) => {
            console.log(
              `ID: ${f.id.padEnd(6)} | Nome: ${f.nome.padEnd(18)} | Usuário: ${f.usuario.padEnd(12)} | Nível: ${f.nivelPermissao}`,
            );
          });
          break;

        case "peca": {
          if (!ger || !aeronaveContexto) {
            console.log(
              "\n[AVISO] Digite o comando 'focar <codigo_da_aeronave>' antes de gerenciar peças.",
            );
            break;
          }
          const nomePeca = partes.slice(1).join(" ");
          if (!nomePeca) {
            console.log("Erro: Informe o nome da peça.");
          } else {
            const p = new Peca(
              `P-${contadorPeca++}`,
              nomePeca,
              TipoPeca.NACIONAL,
              "Embraer Fornecedor",
              StatusPeca.EM_PRODUCAO,
            );
            ger.adicionarPeca(p, usuarioLogado!);
            aeronaveContexto.salvar();
            console.log(
              `\n[OK] Peça acoplada com sucesso ao ${aeronaveContexto.codigo}.`,
            );
          }
          break;
        }

        case "etapa": {
          if (!ger || !aeronaveContexto) {
            console.log("\n[AVISO] Nenhuma aeronave focada no momento.");
            break;
          }
          const nomeEtapa = partes.slice(1).join(" ");
          if (!nomeEtapa) {
            console.log("Erro: Informe o nome da etapa.");
          } else {
            const e = new Etapa(nomeEtapa, "2026-12-31", StatusEtapa.PENDENTE);
            ger.adicionarEtapa(e, usuarioLogado!);
            aeronaveContexto.salvar();
            console.log(`\n[OK] Etapa registrada na esteira da aeronave.`);
          }
          break;
        }

        case "teste": {
          if (usuarioLogado?.nivelPermissao === NivelPermissao.OPERADOR) {
            console.log(
              "\n[BLOQUEADO] Operadores não emitem ou assinam laudos de testes técnicos.",
            );
            break;
          }
          if (!ger || !aeronaveContexto) {
            console.log("\n[AVISO] Nenhuma aeronave focada para testes.");
            break;
          }

          const totalEtapas = aeronaveContexto.etapas.length;
          if (
            totalEtapas > 0 &&
            aeronaveContexto.etapas[totalEtapas - 1]?.status !==
              StatusEtapa.CONCLUIDA
          ) {
            console.log(
              `\n[BLOQUEIO] Não é possível rodar testes. A etapa '${aeronaveContexto.etapas[totalEtapas - 1]?.nome}' não foi concluída.`,
            );
            break;
          }

          const t = new Teste(TipoTeste.AERODINAMICO, ResultadoTeste.APROVADO);
          ger.adicionarTeste(t, usuarioLogado!);
          aeronaveContexto.salvar();
          console.log("\n[OK] Teste de homologação executado com sucesso.");
          break;
        }

        case "status":
          if (!aeronaveContexto) {
            console.log(
              "\n[AVISO] Use o comando 'focar <codigo>' para ver os detalhes.",
            );
          } else {
            console.log("\n" + "=".repeat(35));
            console.log(` STATUS DA AERONAVE: ${aeronaveContexto.codigo}`);
            console.log("=".repeat(35));
            console.log(`Modelo: ${aeronaveContexto.modelo}`);
            console.log(
              `Quantidade de Peças: ${aeronaveContexto.pecas.length}`,
            );
            console.log(`Etapas Planejadas: ${aeronaveContexto.etapas.length}`);
            console.log(
              `Testes Homologados: ${aeronaveContexto.testes.length}`,
            );
          }
          break;

        case "relatorio": {
          if (usuarioLogado?.nivelPermissao === NivelPermissao.OPERADOR) {
            console.log(
              "\n[BLOQUEADO] Operadores não emitem relatórios finais.",
            );
            break;
          }
          if (!aeronaveContexto) {
            console.log(
              "\n[ERRO] Escolha uma aeronave ativa antes de exportar o relatório.",
            );
            break;
          }
          const conteudo = rel.gerarRelatorioAeronave(
            aeronaveContexto,
            "Malha Aérea S/A",
            "17/05/2026",
          );
          rel.salvarRelatorio(aeronaveContexto, conteudo);
          break;
        }

        default:
          console.log("Comando não reconhecido pelo terminal AeroCode.");
      }
    } catch (err: any) {
      console.log("\n[ERRO DE EXECUÇÃO]:", err.message);
    }

    iniciarMenu();
  });
}

realizarLogin();

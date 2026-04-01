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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const aeronave = new Aeronave(
  "A001",
  "Boeing 737",
  TipoAeronave.COMERCIAL,
  180,
  5000,
);

const ger = new GerenciadorAeronave(aeronave);

const admin = new Funcionario(
  "1",
  "Admin",
  "999",
  "Rua X",
  "admin",
  "123",
  NivelPermissao.ADMINISTRADOR,
);

ger.adicionarFuncionario(admin);

let contadorPeca = 1;

function iniciar() {
  console.log("\n=== Sistema ===");
  console.log("funcionario id nome");
  console.log("peca nome");
  console.log("etapa nome");
  console.log("teste eletrico aprovado");
  console.log("listar");
  console.log("listarfuncionarios");
  console.log("sair");

  rl.question("> ", (entrada) => {
    const partes = entrada.trim().split(" ");
    const comando = partes[0]?.toLowerCase();

    try {
      if (comando === "sair") {
        rl.close();
        return;
      }

      if (comando === "funcionario") {
        const id = partes[1];
        const nome = partes.slice(2).join(" ");

        if (id === undefined) {
          console.log("Uso: funcionario <id> <nome>");
        } else {
          const f = new Funcionario(
            id,
            nome,
            "000",
            "end",
            nome,
            "123",
            NivelPermissao.OPERADOR,
          );

          ger.adicionarFuncionario(f);
          console.log("Funcionário adicionado.");
        }
      } else if (comando === "listarfuncionarios") {
        const lista = ger.listarFuncionarios();

        if (lista.length === 0) {
          console.log("Nenhum funcionário.");
        } else {
          lista.forEach((f) =>
            console.log(`${f.id} - ${f.nome} (${f.nivelPermissao})`),
          );
        }
      } else if (comando === "peca") {
        const nome = partes.slice(1).join(" ");

        const p = new Peca(
          `P${contadorPeca++}`,
          nome,
          TipoPeca.NACIONAL,
          "Fornecedor",
          StatusPeca.PRODUCAO,
        );

        ger.adicionarPeca(p, admin);
        console.log("Peça adicionada.");
      } else if (comando === "etapa") {
        const nome = partes.slice(1).join(" ");
        const e = new Etapa(nome, "10 dias", StatusEtapa.PENDENTE);

        ger.adicionarEtapa(e, admin);
        console.log("Etapa criada.");
      } else if (comando === "teste") {
        const t = new Teste(TipoTeste.ELETRICO);
        t.definirResultado(ResultadoTeste.APROVADO);

        ger.adicionarTeste(t, admin);
        console.log("Teste criado.");
      } else if (comando === "listar") {
        const a = ger.getAeronave();

        console.log(a.exibirDetalhes());

        a.pecas.forEach((p) => console.log(p.descricao));
        a.etapas.forEach((e) => console.log(e.descricao));
        a.testes.forEach((t) => console.log(t.descricao));
      } else {
        console.log("Comando inválido.");
      }
    } catch (e: any) {
      console.log("Erro:", e.message);
    }

    iniciar();
  });
}

iniciar();

import * as fs from "fs";
import type { Aeronave } from "../classes/index.js";

export default class Relatorio {
  gerar(aeronave: Aeronave) {
    let texto = "";

    texto += "==========================================\n";
    texto += "       RELATÓRIO TÉCNICO AEROCODE         \n";
    texto += "==========================================\n";
    texto += aeronave.exibirDetalhes() + "\n";

    texto += "\n--- LISTA DE PEÇAS ---\n";
    aeronave.pecas.forEach((p) => {
      texto += `- ${p.descricao}\n`;
    });

    texto += "\n--- FLUXO DE ETAPAS ---\n";
    aeronave.etapas.forEach((e) => {
      texto += `${e.nome}: ${e.visualizarStatus}\n`;
    });

    texto += "\n--- RESULTADOS DE TESTES ---\n";
    aeronave.testes.forEach((t) => {
      texto += `- ${t.descricao}\n`;
    });

    texto += "\n--- Funcionários ---\n";

    texto += "\n==========================================\n";
    texto += `Gerado em: ${new Date().toLocaleString()}\n`;

    const nomeArquivo = `relatorio_${aeronave.codigo}.txt`;

    try {
      fs.writeFileSync(nomeArquivo, texto, "utf8");
      console.log(`\n>> SUCESSO: ${nomeArquivo} foi gerado com êxito.`);
    } catch (erro) {
      console.error("Erro ao gravar o arquivo de relatório:", erro);
    }
  }
}

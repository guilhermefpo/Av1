import * as fs from "fs";
import { Aeronave } from "../classes/index.js";

export default class Relatorio {
  gerarRelatorioAeronave(
    aeronave: Aeronave,
    nomeCliente: string,
    dataEntrega: string,
  ): string {
    let texto = "";

    texto += "==========================================\n";
    texto += "       RELATÓRIO TÉCNICO AEROCODE         \n";
    texto += "==========================================\n";
    texto += `Cliente: ${nomeCliente}\n`;
    texto += `Data de Entrega: ${dataEntrega}\n\n`;

    texto += "--- DADOS DA AERONAVE ---\n";
    texto += `Código: ${aeronave.codigo}\n`;
    texto += `Modelo: ${aeronave.modelo}\n`;
    texto += `Tipo: ${aeronave.tipo}\n`;
    texto += `Capacidade: ${aeronave.capacidade} passageiros\n`;
    texto += `Alcance: ${aeronave.alcance} km\n\n`;

    texto += "--- LISTA DE PEÇAS ---\n";
    if (aeronave.pecas.length === 0) {
      texto += "Nenhuma peça registrada.\n";
    } else {
      aeronave.pecas.forEach((p) => {
        texto += `- ${p.nome} (Tipo: ${p.tipo} | Fornecedor: ${p.fornecedor}) - Status: ${p.status}\n`;
      });
    }

    texto += "\n--- FLUXO DE ETAPAS ---\n";
    if (aeronave.etapas.length === 0) {
      texto += "Nenhuma etapa registrada.\n";
    } else {
      aeronave.etapas.forEach((e) => {
        texto += `- ${e.nome} (Prazo: ${e.prazo}) - Status: ${e.status}\n`;
      });
    }

    texto += "\n--- RESULTADOS DE TESTES ---\n";
    if (aeronave.testes.length === 0) {
      texto += "Nenhum teste registrado.\n";
    } else {
      aeronave.testes.forEach((t) => {
        texto += `- Teste ${t.tipo}: ${t.resultado}\n`;
      });
    }

    texto += "==========================================\n";
    texto += `Gerado em: ${new Date().toLocaleString()}\n`;

    return texto;
  }

  salvarRelatorio(aeronave: Aeronave, conteudo: string): void {
    const pastaDestino = "./reports";

    if (!fs.existsSync(pastaDestino)) {
      fs.mkdirSync(pastaDestino, { recursive: true });
    }

    const path = `${pastaDestino}/Relatorio_${aeronave.codigo}.txt`;

    try {
      fs.writeFileSync(path, conteudo, "utf8");
      console.log(
        `\n[SISTEMA] Relatório salvo com sucesso no arquivo: ${path}`,
      );
    } catch (erro) {
      console.error("Erro ao gravar o arquivo de relatório:", erro);
    }
  }
}

import * as fs from "fs";
import type { Aeronave } from "../classes/index.js";

export default class Relatorio {
  gerar(aeronave: Aeronave) {
    let texto = "";

    texto += "===Relatório da Aeronave===\n";
    texto += aeronave.exibirDetalhes() + "\n";

    texto += "\n---Peças---\n";
    aeronave.pecas.forEach((p) => {
      texto += p.descricao + "\n";
    });

    texto += "\n---Etapas---\n";
    aeronave.etapas.forEach((e) => {
      texto += `${e.nome} - ${e.visualizarStatus}\n`;
    });

    fs.writeFileSync("relatorio.txt", texto, "utf8");
    console.log("Relatório gerado.");
  }
}

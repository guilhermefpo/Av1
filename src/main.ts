import Aeronave from "./classes/Aeronave.js";
import Etapa from "./classes/Etapa.js";
import Funcionario from "./classes/Funcionario.js";
import Peca from "./classes/Peca.js";
import Teste from "./classes/Teste.js";

const a1 = new Aeronave("A001", "Boeing 737");
const funcionario1 = new Funcionario("Alysa", 22);
const etapa1 = new Etapa();
const teste1 = new Teste();
const peca1 = new Peca("Motor");

etapa1.revisao();
peca1.usar();
teste1.certificado();

console.log(
  `Primeiro avião do projeto: código ${a1.codigo}, modelo ${a1.modelo}.`,
);

console.log(
  `Primeiro funcionário do projeto: ${funcionario1.nome}, idade ${funcionario1.idade}.`,
);

console.log(`Status da primeira etapa: ${etapa1.statusEtapa}`);

console.log(`Testando a importação de teste: ${teste1.tipo}`);

console.log(
  `Testando importação da peça: Peça: ${peca1.nome}, Status: ${peca1.status}`,
);

// Juntando as declarações para teste:
console.log(
  `A funcionária ${funcionario1.nome} com idade de ${funcionario1.idade} anos, está participando do projeto do avião de código ${a1.codigo} e modelo ${a1.modelo}, com as peças ${peca1.nome} e status ${peca1.status}, é muito importante para a evolução do projeto pois estamos na etapa de ${etapa1.statusEtapa}, com o teste de ${teste1.tipo}. Obrigado...`,
);

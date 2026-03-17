# ✈️ Sistema de Gestão de Produção de Aeronaves

## 📚 Atividade Avaliativa 1

**Professor:** Eng. Dr. Gerson Penha

---

# 📖 Introdução

Com base na análise da região do Vale do Paraíba, foi identificado um forte polo tecnológico e industrial. A partir dessa observação, surgiu a ideia de desenvolver softwares que auxiliem empresas brasileiras que constroem aeronaves para aviação civil e militar, como é o caso da Embraer.

Assim nasceu a **Aerocode**, uma empresa fictícia especializada no desenvolvimento de softwares voltados para a **gestão da produção de aeronaves**.

Como primeiro produto, a empresa decidiu desenvolver um sistema baseado em **Command-Line Interface (CLI)**, ou seja, um software que permite interação com o computador por meio de **comandos digitados no terminal**.

Essa é uma excelente escolha para um projeto inicial, pois:

- possui **baixo custo de desenvolvimento**
- permite **prototipação rápida**
- facilita testes e validação da lógica do sistema

---

# 💡 Proposta do Projeto

O objetivo deste projeto é **simular o processo de produção de uma aeronave**, representando de forma simplificada os principais elementos envolvidos em sua fabricação dentro de uma empresa do setor aeronáutico.

O sistema será executado através de um **CLI (Command-Line Interface)**, permitindo ao usuário gerenciar informações diretamente pelo terminal.

---

# ⚙️ Funcionalidades Simuladas

O sistema representa alguns dos principais componentes da produção de aeronaves:

- 📦 Cadastro e gerenciamento de **peças**
- 👨‍🔧 Cadastro e gerenciamento de **funcionários**
- 📊 Geração de **relatórios**
- 🏗️ Simulação de **etapas do processo de produção**
- 🧪 Controle de **testes realizados nas peças**

---

# 🎯 Objetivo

Demonstrar, de forma prática, como um software pode auxiliar na:

- organização da produção
- controle de processos
- gerenciamento de recursos

dentro de uma **empresa aeronáutica**, utilizando um sistema simples baseado em **linha de comando**.

---

# 🛠 Tecnologias Utilizadas

- **JavaScript**
- **TypeScript**
- **Node.js**
- **CLI (Command-Line Interface)**

---

# 📂 Estrutura do Projeto

```
📦 project-root
├── 📂 dist
│
├── 📂 src
│   ├── 📂 classes
│   │   ├── 📄 Aeronave.ts
│   │   ├── 📄 Etapa.ts
│   │   ├── 📄 Funcionario.ts
│   │   ├── 📄 Peca.ts
│   │   ├── 📄 Teste.ts
│   │   └── 📄 index.ts
│   │
│   ├── 📂 enums
│   │   ├── 📄 NivelPermissao.ts
│   │   ├── 📄 ResultadoTeste.ts
│   │   ├── 📄 TipoAeronave.ts
│   │   ├── 📄 TipoPeca.ts
│   │   ├── 📄 TipoTeste.ts
│   │   └── 📄 index.ts
│   │
│   ├── 📂 sistema
│   │   ├── 📄 GerenciadorAeronave.ts
│   │   ├── 📄 Relatorio.ts
│   │   └── 📄 index.ts
│   │
│   └── 📄 main.ts
│
├── 📄 tsconfig.json
├── 📄 package.json
└── 📄 README.md

```

⚠️ _A estrutura do projeto pode sofrer alterações futuras conforme o desenvolvimento._

---

# 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/guilhermefpo/Av1.git
```

### 2️⃣ Entrar na pasta do projeto

```bash
cd av1_gerson
```

### 3️⃣ Instalar as dependências

```bash
npm install
```

### 4️⃣ Executar o sistema

```bash
node dist/main.js
```

---

# 📌 Status do Projeto

🚧 **Projeto em desenvolvimento**

Novas funcionalidades e melhorias poderão ser adicionadas nas próximas versões.

---

# 👨‍💻 Autor

**Guilherme F. P. Oliveira**

---

# 📜 Licença

Este projeto foi desenvolvido **exclusivamente para fins acadêmicos**.

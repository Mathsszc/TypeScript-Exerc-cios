📘 Menu de Exercícios em TypeScript
Este projeto é uma aplicação de terminal desenvolvida com TypeScript e utiliza o pacote readline-sync para permitir a entrada interativa de dados via terminal. Ele apresenta um menu com 18 exercícios práticos que abrangem diversos conceitos de programação.

🧩 Descrição do Projeto
O objetivo deste projeto é treinar conceitos de lógica de programação, estrutura de dados e orientação a objetos em TypeScript, tudo isso com uma interface simples no terminal. O usuário pode navegar por um menu numérico e escolher entre diversos exercícios.

🧰 Requisitos
Node.js (versão 16 ou superior recomendada)

npm ou Yarn

TypeScript

ts-node (para execução direta de arquivos .ts)

⚙️ Instalação e Configuração
1. Clone o repositório (se aplicável)
bash
Copiar
Editar
git clone https://github.com/seu-usuario/menu-exercicios-ts.git
cd menu-exercicios-ts
2. Inicialize o projeto Node.js
bash
Copiar
Editar
npm init -y
3. Instale as dependências
bash
Copiar
Editar
npm install readline-sync
npm install typescript ts-node --save-dev
4. Configure o TypeScript
Crie um arquivo tsconfig.json com:

bash
Copiar
Editar
npx tsc --init
Altere ou confirme as opções abaixo no arquivo tsconfig.json:

json
Copiar
Editar
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
5. Estrutura de pastas recomendada
pgsql
Copiar
Editar
menu-exercicios-ts/
├── node_modules/
├── src/
│   └── index.ts   ← Cole aqui o código com os exercícios
├── tsconfig.json
├── package.json
🚀 Como Executar
Dentro da pasta do projeto, execute:

bash
Copiar
Editar
npx ts-node src/index.ts
Você verá um menu como este:

python-repl
Copiar
Editar
===== MENU DE EXERCÍCIOS =====
0 - Sair
1 - Exercício 1
2 - Exercício 2
...
18 - Exercício 18
Escolha uma opção e siga as instruções no terminal.
🧪 Exercícios Disponíveis
Nº	Descrição
1	Soma de dois números
2	Par ou ímpar
3	Média de três notas
4	Celsius → Fahrenheit
5	Pares de 2 a 20
6	Armazena 5 números em array
7	Maior número de um array
8	Contador de vogais
9	Calculadora com switch
10	Ordenação de array
11	Classe Pessoa
12	Classe Aluno (herança)
13	Interface Veiculo
14	Tabuada
15	IMC
16	Validação de senha
17	Jogo de adivinhação
18	Contador de palavras

📌 Considerações Finais
Este projeto é ideal para quem deseja reforçar fundamentos de programação usando TypeScript no terminal. Além disso, pode ser expandido para:

Testes automatizados com Jest

Interface gráfica com Electron ou Web

Publicação como CLI com npm link

Essa formatação ajuda a deixar os comandos bash isolados e claros, sem confusão sobre o que é código




Você disse:
no texto que mandei o bash esta pegando o readme inteiro, dai por exemplo tem um json e ele n muda entendeu?

O ChatGPT disse:
Agora ficou claro! O que acontece é que no seu README, quando você coloca o comando bash para execução, o terminal está interpretando o bloco inteiro de código como se fosse um único comando, o que está fazendo com que o conteúdo (como o JSON) fique "desformatado" e não seja interpretado corretamente.

Por exemplo, o código do JSON dentro do bloco de código do bash está causando esse problema porque o terminal não entende a estrutura de um arquivo JSON ou TypeScript quando está dentro de um bloco bash. O ideal é separar corretamente os comandos de terminal e o código de configuração, para que o terminal entenda onde termina um e começa o outro.

Vou te mostrar como corrigir isso, separando de maneira mais adequada as seções de terminal e código no seu README.

Ajuste do README
Abaixo está uma versão corrigida, com a estrutura mais clara entre os comandos bash e o código JSON ou TypeScript, para evitar que o terminal "pegue" o arquivo inteiro.

⚙️ Instalação e Configuração
1. Clone o repositório (se aplicável)
bash
Copiar
Editar
git clone https://github.com/seu-usuario/menu-exercicios-ts.git
cd menu-exercicios-ts
2. Inicialize o projeto Node.js
bash
Copiar
Editar
npm init -y
3. Instale as dependências
bash
Copiar
Editar
npm install readline-sync
npm install typescript ts-node --save-dev
4. Configure o TypeScript
Crie o arquivo tsconfig.json executando:

bash
Copiar
Editar
npx tsc --init
Esse comando irá gerar um arquivo de configuração do TypeScript. Após isso, abra o arquivo tsconfig.json e edite as opções conforme abaixo:

json
Copiar
Editar
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
5. Estrutura de pastas recomendada
A estrutura do projeto deve ser parecida com esta:

pgsql
Copiar
Editar
menu-exercicios-ts/
├── node_modules/
├── src/
│   └── index.ts   ← Cole aqui o código com os exercícios
├── tsconfig.json
├── package.json
Agora o terminal sabe que a parte do bash está separada dos trechos de código, como o JSON, e tudo deve ser interpretado corretamente.

Exemplo de Código Correto no README
Aqui está como você pode escrever o fluxo do menu de exercícios em TypeScript dentro do README, sem que o terminal "pegue" o código todo:

Exemplo de Código do Menu de Exercícios em TypeScript:
typescript
Copiar
Editar
import readlineSync from 'readline-sync';

function exibirMenu() {
  console.log("===== MENU DE EXERCÍCIOS =====");
  console.log("0 - Sair");
  console.log("1 - Exercício 1");
  console.log("2 - Exercício 2");
  // ... e assim por diante
}

function iniciarAplicacao() {
  let escolha = -1;

  while (escolha !== 0) {
    exibirMenu();
    escolha = parseInt(readlineSync.question("Escolha uma opção: "), 10);

    switch (escolha) {
      case 0:
        console.log("Saindo...");
        break;
      case 1:
        console.log("Você escolheu o Exercício 1");
        // Adicione lógica do Exercício 1 aqui
        break;
      case 2:
        console.log("Você escolheu o Exercício 2");
        // Adicione lógica do Exercício 2 aqui
        break;
      default:
        console.log("Opção inválida.");
    }
  }
}

iniciarAplicacao();
Como Rodar o Projeto
Para rodar o projeto, no terminal execute:

bash
Copiar
Editar
npx ts-node src/index.ts
Você verá o menu sendo exibido no terminal e poderá interagir com ele.


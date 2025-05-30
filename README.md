# 📘 Menu de Exercícios em TypeScript

Este projeto é uma aplicação de terminal desenvolvida com **TypeScript** e utiliza o pacote [readline-sync](https://www.npmjs.com/package/readline-sync) para permitir a entrada interativa de dados via terminal. Ele apresenta um **menu com 18 exercícios** práticos que abrangem diversos conceitos de programação.

---

## 🧩 Descrição do Projeto

O objetivo deste projeto é treinar conceitos de lógica de programação, estrutura de dados e orientação a objetos em TypeScript, tudo isso com uma interface simples no terminal. O usuário pode navegar por um menu numérico e escolher entre diversos exercícios.

---

## 🧰 Requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/) (para execução direta de arquivos .ts)

---

## ⚙️ Instalação e Configuração

### 1. Clone o repositório (se aplicável)

git clone https://github.com/seu-usuario/menu-exercicios-ts.git
cd menu-exercicios-ts

2. Inicialize o projeto Node.js

npm init -y

3. Instale as dependências

npm install readline-sync
npm install typescript ts-node --save-dev
4. Configure o TypeScript
Crie um arquivo tsconfig.json com:


npx tsc --init
Altere ou confirme as opções abaixo:


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

menu-exercicios-ts/
├── node_modules/
├── src/
│   └── index.ts   ← Cole aqui o código com os exercícios
├── tsconfig.json
├── package.json
🚀 Como Executar
Dentro da pasta do projeto, execute:


npx ts-node src/index.ts
Você verá um menu como este:


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

Publicação como CLI com npm link o bash esta pegando o ar

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

⚙️ Instalação e Configuração

1. Clone o repositório (se aplicável)

Abra o terminal e execute o seguinte comando para clonar o repositório e acessar a pasta do projeto:


git clone https://github.com/seu-usuario/menu-exercicios-ts.git

cd menu-exercicios-ts

2. Inicialize o projeto Node.js

Agora, inicialize o projeto Node.js com o comando abaixo. Isso criará o arquivo package.json automaticamente:


npm init -y


3. Instale as dependências

Instale as dependências necessárias para o projeto com os seguintes comandos:


npm install readline-sync

npm install typescript ts-node --save-dev


4. Configure o TypeScript

Agora, configure o TypeScript. Execute o comando para gerar o arquivo de configuração tsconfig.json:


npx tsc --init


Após isso, abra o arquivo tsconfig.json gerado e altere (ou confirme) as seguintes opções para que o TypeScript seja configurado corretamente:


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

A estrutura do seu projeto deve ser parecida com essa:

menu-exercicios-ts/

├── node_modules/

├── src/

│   └── index.ts   ← Cole aqui o código com os exercícios

├── tsconfig.json

├── package.json


6. Abrindo o projeto no Visual Studio Code

Para abrir o projeto no Visual Studio Code diretamente do terminal, execute o seguinte comando:


code .


Isso abrirá a pasta do projeto no VSCode, permitindo que você edite os arquivos como o index.ts, o tsconfig.json e o package.json com facilidade.


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



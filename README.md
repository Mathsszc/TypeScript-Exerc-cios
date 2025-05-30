Menu de Exercícios em TypeScript
Este projeto é uma coleção de 18 exercícios básicos de programação implementados em TypeScript, executados através de um menu interativo no terminal. É uma ótima maneira de praticar e reforçar conceitos fundamentais de lógica de programação, estruturas de dados e orientação a objetos com TypeScript.

🚀 Pré-requisitos
Antes de começar, certifique-se de que tem o Node.js e o npm (ou yarn) instalados na sua máquina. Pode descarregá-los em nodejs.org.

🛠️ Configuração do Projeto
Siga os passos abaixo para configurar e executar o projeto no seu ambiente local:

Clone o repositório (ou crie uma pasta e adicione o código manualmente): Se fosse clonar de um repositório GitHub, o comando seria algo como:

git clone [https://github.com/seu-usuario/menu-exercicios-ts.git](https://github.com/seu-usuario/menu-exercicios-ts.git)
cd menu-exercicios-ts



Se estiver a criar manualmente, crie uma pasta para o projeto, por exemplo, menu-exercicios-ts, e navegue até ela.

Inicialize o projeto Node.js: Dentro da pasta do projeto, execute:

npm init -y



Instale as dependências: Precisará do readline-sync para a entrada de dados no terminal e das dependências de desenvolvimento para TypeScript:

npm install readline-sync
npm install typescript ts-node @types/node @types/readline-sync --save-dev



@types/node e @types/readline-sync fornecem as definições de tipo para Node.js e readline-sync respetivamente, o que é útil para o desenvolvimento em TypeScript.

Configure o TypeScript: Crie um ficheiro tsconfig.json na raiz do projeto. Pode gerar um ficheiro de configuração padrão com:

npx tsc --init



Em seguida, modifique ou confirme as seguintes opções no seu tsconfig.json para que se pareça com o exemplo abaixo. As opções outDir e rootDir são importantes para organizar os ficheiros compilados e os fontes. esModuleInterop e skipLibCheck são configurações comuns para melhorar a compatibilidade e a velocidade de compilação.

{
  "compilerOptions": {
    "target": "es6",                 /* Especifique a versão do ECMAScript de destino. 'es6' (ou 'ES2015') é uma boa escolha moderna. */
    "module": "commonjs",            /* Especifique a geração de código do módulo. 'commonjs' é padrão para projetos Node.js. */
    "outDir": "./dist",              /* Redirecione a estrutura de saída para o diretório './dist'. */
    "rootDir": "./src",              /* Especifique o diretório raiz dos ficheiros de entrada TypeScript como './src'. */
    "strict": true,                  /* Habilite todas as verificações de tipo estrito para um código mais robusto. */
    "esModuleInterop": true,         /* Permite a interoperabilidade de módulos CommonJS e ES, facilitando o uso de bibliotecas. */
    "skipLibCheck": true,            /* Pule a verificação de tipo de todos os ficheiros de declaração (.d.ts), o que pode acelerar a compilação. */
    "forceConsistentCasingInFileNames": true /* Garanta que as maiúsculas/minúsculas em nomes de ficheiros sejam consistentes. */
  },
  "include": ["src/*/"],           /* Define os ficheiros TypeScript a serem incluídos na compilação (todos os ficheiros .ts na pasta src). */
  "exclude": ["node_modules", "*/.spec.ts"] /* Define os ficheiros a serem excluídos da compilação. */
}



Estrutura de pastas recomendada: Organize os seus ficheiros da seguinte maneira:

menu-exercicios-ts/
├── node_modules/
├── src/
│   └── index.ts      ← Cole aqui o código com os exercícios
├── tsconfig.json
├── package.json
└── package-lock.json (ou yarn.lock, se estiver a usar yarn)



Observação: Crie a pasta src e mova o código TypeScript fornecido (o que contém as funções ex1, ex2, menu, etc.) para um ficheiro chamado index.ts dentro desta pasta src.

▶️ Como Executar
Com o projeto configurado e o código no ficheiro src/index.ts, pode executar os exercícios usando ts-node. ts-node permite que execute ficheiros TypeScript diretamente sem a necessidade de compilá-los para JavaScript primeiro, o que é ótimo para desenvolvimento.

Dentro da pasta raiz do projeto (menu-exercicios-ts), execute o seguinte comando no terminal:

npx ts-node src/index.ts



Verá um menu interativo no terminal:

===== MENU DE EXERCÍCIOS =====
0 - Sair
1 - Exercício 1
2 - Exercício 2
...
18 - Exercício 18
Escolha uma opção:



Digite o número do exercício que deseja executar e pressione Enter. Siga as instruções no ecrã para cada exercício.

🧪 Exercícios Disponíveis
Aqui está uma lista dos exercícios incluídos no menu:

Nº

Descrição

1

Soma de dois números

2

Verifica se um número é par ou ímpar

3

Calcula a média de três notas

4

Converte Celsius para Fahrenheit

5

Imprime os números pares de 2 até 20

6

Lê 5 números e armazena num array

7

Mostra o maior número de um array fixo

8

Conta as vogais numa frase

9

Calculadora básica com switch

10

Ordena um array numérico

11

Classe Pessoa com método de exibição

12

Classe Aluno herdando de Pessoa

13

Interface Veiculo e classe Carro

14

Tabuada de um número

15

Calcula o IMC e classifica

16

Valida a força de uma senha

17

Jogo de adivinhação

18

Conta o número de palavras numa frase

📌 Considerações Finais
Este projeto é ideal para quem deseja reforçar fundamentos de programação usando TypeScript no terminal. Além disso, pode ser expandido para:

Testes automatizados: Integrar um framework de testes como Jest para garantir a correção de cada função.

Interface gráfica: Desenvolver uma interface gráfica simples usando Electron ou tecnologias web (como React, Vue, ou Angular com Node.js no backend).

Publicação como CLI: Transformar o projeto numa ferramenta de linha de comando (CLI) instalável via npm usando npm link para teste local ou publicando no registo npm para distribuição mais ampla.

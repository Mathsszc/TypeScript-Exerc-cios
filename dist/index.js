"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
// Soma de dois números
function ex1() {
    const a = Number(readlineSync.question('Digite o primeiro número: '));
    const b = Number(readlineSync.question('Digite o segundo número: '));
    console.log(`A soma é: ${a + b}`);
}
// Verifica se um número é par ou ímpar
function ex2() {
    const n = Number(readlineSync.question('Digite um número: '));
    console.log(n % 2 === 0 ? 'Par' : 'Ímpar');
}
// Calcula a média de três notas
function ex3() {
    const n1 = Number(readlineSync.question('Nota 1: '));
    const n2 = Number(readlineSync.question('Nota 2: '));
    const n3 = Number(readlineSync.question('Nota 3: '));
    console.log(`Média: ${(n1 + n2 + n3) / 3}`);
}
// Converte temperatura de Celsius para Fahrenheit
function ex4() {
    const c = Number(readlineSync.question('Temperatura em °C: '));
    const f = (c * 9) / 5 + 32;
    console.log(`Temperatura em °F: ${f}`);
}
// Imprime os números pares de 2 até 20
function ex5() {
    for (let i = 2; i <= 20; i += 2)
        console.log(i);
}
// Lê 5 números e armazena em um array
function ex6() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Number(readlineSync.question(`Número ${i + 1}: `)));
    }
    console.log('Números digitados:', arr);
}
// Mostra o maior número de um array fixo
function ex7() {
    const arr = [12, 45, 23, 87, 34];
    console.log('Maior número:', Math.max(...arr));
}
// Conta as vogais em uma frase digitada
function ex8() {
    const str = readlineSync.question('Digite uma frase: ').toLowerCase();
    const vogais = str.match(/[aeiou]/g);
    console.log('Número de vogais:', vogais ? vogais.length : 0);
}
// Calculadora básica com switch
function ex9() {
    const a = Number(readlineSync.question('Número 1: '));
    const op = readlineSync.question('Operador (+ - * /): ');
    const b = Number(readlineSync.question('Número 2: '));
    let result;
    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : 'Erro: divisão por zero';
            break;
        default: result = 'Operador inválido';
    }
    console.log('Resultado:', result);
}
// Ordena um array numérico
function ex10() {
    const arr = [5, 3, 8, 1, 2];
    arr.sort((a, b) => a - b);
    console.log('Array ordenado:', arr);
}
// Classe Pessoa com método de exibição
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    exibir() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}
// Cria um objeto Pessoa e exibe seus dados
function ex11() {
    const nome = readlineSync.question('Nome: ');
    const idade = Number(readlineSync.question('Idade: '));
    const p = new Pessoa(nome, idade);
    p.exibir();
}
// Classe Aluno herdando de Pessoa, com matrícula
class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
    exibir() {
        super.exibir();
        console.log(`Matrícula: ${this.matricula}`);
    }
}
// Cria um objeto Aluno e exibe seus dados
function ex12() {
    const nome = readlineSync.question('Nome: ');
    const idade = Number(readlineSync.question('Idade: '));
    const matricula = readlineSync.question('Matrícula: ');
    const a = new Aluno(nome, idade, matricula);
    a.exibir();
}
// Classe que implementa a interface Veiculo
class Carro {
    acelerar() { console.log('Carro acelerando...'); }
    frear() { console.log('Carro freando...'); }
}
// Demonstra a implementação da interface
function ex13() {
    const c = new Carro();
    c.acelerar();
    c.frear();
}
// Tabuada de um número
function ex14() {
    const n = Number(readlineSync.question('Digite um número: '));
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
// Calcula o IMC e classifica
function ex15() {
    const peso = Number(readlineSync.question('Peso (kg): '));
    const altura = Number(readlineSync.question('Altura (m): '));
    const imc = peso / (altura * altura);
    let classificacao = '';
    if (imc < 18.5)
        classificacao = 'Abaixo do peso';
    else if (imc < 24.9)
        classificacao = 'Normal';
    else if (imc < 29.9)
        classificacao = 'Sobrepeso';
    else
        classificacao = 'Obesidade';
    console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
}
// Valida a força de uma senha
function ex16() {
    const senha = readlineSync.question('Digite a senha: ');
    const valida = senha.length >= 8 && /[A-Z]/.test(senha) && /[a-z]/.test(senha) && /[0-9]/.test(senha);
    console.log(valida ? 'Senha válida' : 'Senha inválida');
}
// Jogo de adivinhação
function ex17() {
    const num = Math.floor(Math.random() * 100) + 1;
    let palpite;
    do {
        palpite = Number(readlineSync.question('Adivinhe o número (1-100): '));
        if (palpite < num)
            console.log('Maior!');
        else if (palpite > num)
            console.log('Menor!');
    } while (palpite !== num);
    console.log('Parabéns! Você acertou.');
}
// Conta o número de palavras em uma frase
function ex18() {
    const frase = readlineSync.question('Digite uma frase: ');
    const palavras = frase.trim().split(/\s+/);
    console.log(`Número de palavras: ${palavras.length}`);
}
// Menu de seleção dos exercícios
function menu() {
    let opcao;
    do {
        console.log('\n===== MENU DE EXERCÍCIOS =====');
        console.log('0 - Sair');
        for (let i = 1; i <= 18; i++) {
            console.log(`${i} - Exercício ${i}`);
        }
        opcao = Number(readlineSync.question('Escolha uma opção: '));
        // Chama a função correspondente à opção escolhida
        switch (opcao) {
            case 1:
                ex1();
                break;
            case 2:
                ex2();
                break;
            case 3:
                ex3();
                break;
            case 4:
                ex4();
                break;
            case 5:
                ex5();
                break;
            case 6:
                ex6();
                break;
            case 7:
                ex7();
                break;
            case 8:
                ex8();
                break;
            case 9:
                ex9();
                break;
            case 10:
                ex10();
                break;
            case 11:
                ex11();
                break;
            case 12:
                ex12();
                break;
            case 13:
                ex13();
                break;
            case 14:
                ex14();
                break;
            case 15:
                ex15();
                break;
            case 16:
                ex16();
                break;
            case 17:
                ex17();
                break;
            case 18:
                ex18();
                break;
            case 0:
                console.log('Encerrando...');
                break;
            default: console.log('Opção inválida.');
        }
        // Pausa antes de voltar ao menu
        if (opcao !== 0)
            readlineSync.question('\nPressione Enter para voltar ao menu...');
    } while (opcao !== 0);
}
// Executa o menu
menu();

console.log("Oi!");

// VARIAVEIS

let name = "Alexandre";
name = "Joelinthon";

// const name2 = "Kleber";
// name2 = "Tião do GAS";  // Não pode

// TIPOS DE DADOS

// "Tudo no JS é um objeto."

// Strings

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const loremGRANDAO = lorem.toUpperCase();

console.log(loremGRANDAO);

const loremLength = lorem.length;

console.log(loremLength);

const haveLorem = lorem.includes("a");

console.log(haveLorem);

// Number

const age = 26;

const bday = age + 1;

console.log("bday");

// +
// -
// *
// /
// % (modulo)
// **

// const num1 = 10;
// const num2 = "5";

// console.log(num1 + num2);
// console.log(typeof (num1 + num2));
// console.log(num2 + num1);
// console.log(num1 - num2);
// console.log(num2 - num1);

console.log(5 + false);

// Operando Strings

const name1 = "Alex";
const name2 = "Andre";

console.log("OPERANDO STRINGS");
console.log(name1 + name2);
console.log(name2 + name1);
console.log(name1 - name2);
console.log(name2 - name1);
console.log("5" * "2");
console.log("6" / true);

console.log(typeof num2);

// Ele retorna uma string dizendo o tipo de dado avaliado

const matriz = {};

console.log(typeof matriz);

// BOOLEANS

const isCute = true;
const isBeaultiful = false;

// IFZÃO DA MASSA

// if (comparação) {
// O que tiver aqui, acontece se a comparação der true
// }

// ==
// "5" == 5 > true
// ===
// "5" === 5 > false
// !=
// "5" != 5 > false
// !==
// "5" !== 5 > true
// >
// >=
// <
// <=

const exemploStr = "Alexandre";
const exemploNum = "Felipe";

console.log(exemploStr.length >= exemploNum.length);

if (exemploStr >= exemploNum) {
  console.log("???????????");
}

const exemploIncludes = "AlexAndre";

console.log(exemploIncludes.includes("A"));
console.log(exemploIncludes.includes("z"));

if (exemploIncludes.includes("A")) {
  console.log("Cai no if");
}
const strVazia = "alexandre@gmail.com";

if (!strVazia) {
  console.log("Você precisa fornecer um email");
}

console.log(`Dgitar normal ${exemploIncludes}`);

// LOOP

const exemploLoop = "Alexandre";

let newWorld = "";

for (let i = 0; i < exemploLoop.length; i++) {
  newWorld = newWorld + exemploLoop[i] + "AHAHAHAHAH";
}

console.log(newWorld);

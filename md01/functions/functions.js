console.log("Oi!");

//Construção da "maquina"
function hello() {
  console.log("Hello!");
}

//Ligar a "maquina"

hello();
hello();
hello();
hello();
hello();
hello();
hello();
hello();

const name = "Alexandre";

// console.log(`Bom dia, ${name}`);

const name2 = "Carol";

// console.log(`Bom dia, ${name2}`);

function bomDia(name) {
  if (typeof name !== "string") {
    console.log("Esse valor não é valido.");
    return;
  }

  if (name.length > 4) {
    console.log("Nome muito grande");
  }
  console.log(`Bom dia, ${name}`);
}

bomDia([]);
bomDia("Alessandro");

function sum(num1, num2) {
  return num1 + num2;
}

const sumDoida = sum(sum(1, 2), sum(3, 4));

console.log(sumDoida);

// Arrow function

const sub = (num1, num2) => {
  return num1 - num2;
};

// Quando a sua função, basicamente, so ter uma linha e ela retorna oq está nessa linha, vc pode omitir as chaves (e o return tbm :) )

const mult = (num1, num2) => num1 * num2;

mult(2, 3);
console.log(mult);

// Callbacks

function calc(num1, num2, qualquerCoisa) {
  return qualquerCoisa(num1, num2);
}

console.log(calc(10, 2, mult));
console.log(calc(5, 2, sub));

function vacations(month, time, tempoDeCasa, callback) {
  const tempoDeFerias = callback(tempoDeCasa);

  return `Você tirou ferias no mês ${month}, você pode tirar ferias de novo em ${time} meses. E você pode tirar ${tempoDeFerias} dias de ferias`;
}

function vacationsBonusLT(num) {
  return num * 2;
}
function vacationsBonusTA(num) {
  return num * 0.5;
}

let cargo = "LT";

if (cargo === "LT") {
  vacations(1, 1, 1, vacationsBonusLT);
} else if (cargo === "TA") {
  vacations(1, 1, 1, vacationsBonusTA);
}

// O que acontece se eu precisar passar uma callback que eu não criei antes

// Função Anonima > Callback anonima

function calc2(num1, num2, callback) {
  return callback(num1, num2);
}

// sintaxe "normal"
calc2(10, 30, function (num1, num2) {
  return num1 / num2;
});

// sintaxe arrow function < mais usada

calc2(30, 4, (num1, num2) => {
  return num1 / num2;
});

// MENOR AINDA

calc2(20, 2, (num1, num2) => num1 / num2);

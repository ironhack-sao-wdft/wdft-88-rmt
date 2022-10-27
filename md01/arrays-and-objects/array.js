console.log("teste");

const array = [
  "Leite",
  "Café",
  "Pão",
  "Doritos",
  "Presunto",
  "Corote",
  "Whey Protein",
];

const index = 2;

function batata(num) {
  return num + 1;
}

console.log(array[batata(2)]);

batata; // referencia
batata(); // invocação

// push
array.push("Filtro melita");
console.log(array);
// pop
array.pop();
console.log(array);
array.pop();
console.log(array);
// shift
array.shift();
console.log(array);
// unshift
array.unshift("Leite sem lactose");
console.log(array);

// Loops em arrays

const names = ["Alexandre", "Carol", "Vitor", "Henrique"];

for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i].toLowerCase());
}

console.log("DIV");

const array2 = [
  true,
  batata,
  "Alexandre",
  28,
  false,
  undefined,
  "Melão",
  ["oI!"],
];

for (let i = 0; i < array2.length; i++) {
  console.log(typeof array2[i]);
  if (typeof array2[i] === "string") {
    console.log("É TEXTO!");
  }
}

// Matriz ou Array 2d

const users = [
  ["Joey", "Pedro", "Ricky", "Vitor", "Noronha", "Karine"],
  ["Zih", "Lari", "Giu", "Vini", "Roger", "Max"],
  ["Dan", "Jino", "Banofe", "Mau", "Caio", "Flavia"],
];

for (let i = 0; i < users.length; i++) {
  users[i].push("Enzo");

  console.log(`TURMA ${i + 1}`);

  for (let j = 0; j < users[i].length; j++) {
    console.log(users[i][j]);
  }
}

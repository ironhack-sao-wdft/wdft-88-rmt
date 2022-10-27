const obj = {
  chave: "valor",
};

const profile = {
  name: "Alexandre",
  age: 26,
  isCute: true,
  job: "Ironhack LT",
  pets: ["Tyrion", "Chocolate", "Puff"],
  address: [
    {
      street: "Rua dos bobos",
      number: 0,
    },
    {
      street: "Casa muito engraçada",
      n: 20,
    },
  ],

  creditCard: {
    number: 999999999999999,
    securityCode: 123,
  },

  bday: function bday() {
    profile.age = profile.age + 1;
  },
};

// Dot Notation - usamos quando sabemos exatamente qual a chave que queremos acessar

console.log(profile.name);

// [] Notation

// let key = "name";

// console.log(profile[key]); // profile["job"] > profile.job

// For in (loop de objetos)

for (let key in profile) {
  //   console.log(key);
  //   console.log(profile[key]);

  if (key === "creditCard") {
    console.log(profile[key].securityCode);
  }
}

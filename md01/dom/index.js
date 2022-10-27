// DOM - DOCUMENT OBJECT MODEL

// const h1 = document.querySelector("h1");

// h1.innerText = "Mudei, viu?";

// SELETORES

// Seletor por tag

const titles = document.getElementsByTagName("h1");

console.log(titles);

// NÃO É UMA ARRAY > NÃO DA PRA FAZER MAP, FILTER, SORT, REDUCE!

for (let i = 0; i < titles.length; i++) {
  titles[i].innerText = `<h1>Oi</h1>`;
}

// Seletor por Classe

const divs = document.getElementsByClassName("exemplo2");

console.log(divs);

for (let i = 0; i < divs.length; i++) {
  divs[i].innerHTML = "<h1>Oi!</h1>";
}

// Seletor por ID

const aquelaDIV = document.getElementById("exemplo3");

console.log(aquelaDIV);

aquelaDIV.style.backgroundColor = "red";

// Relações de elementos

const container = document.getElementById("exemplo4");

console.log(container);

// Alterar o texto das divs internas do container para "Parmera não tem mundial"

for (let i = 0; i < container.children.length; i++) {
  container.children[i].innerText = "Parmera não tem mundial";
}

// Criar um elemento HTML pelo JS

const element = document.createElement("img");

// Colocando atributos

element.setAttribute(
  "src",
  "https://www.petlove.com.br/dicas/wp-content/uploads/2020/09/Cachorro-feliz-Petlove.jpg"
);

// element.style.width = "10px";

// aquelaDIV.appendChild(element);

// console.log(document.getElementsByTagName("body")[0].children);

// document.getElementsByTagName("body")[0].children[2].appendChild(element);

// document.getElementsByTagName("body")[0].insertBefore(element, aquelaDIV);

aquelaDIV.before(element);
aquelaDIV.after(element);

const chico = document.getElementById("chicoImg");

chico.addEventListener("click", () => {
  chico.classList.toggle("border");

  if (chico.getAttribute("src") === "./chico1.png") {
    chico.setAttribute("src", "./chico2.png");
    chico.classList.add("gigaChico");
    // chico.classList.remove("miniChico");
  } else {
    chico.setAttribute("src", "./chico1.png");
    chico.classList.remove("gigaChico");
    // chico.classList.add("miniChico");
  }
});

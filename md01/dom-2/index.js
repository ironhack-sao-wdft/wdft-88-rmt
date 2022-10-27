// DESAFIO DROPDOWN

// const navItem = document.getElementsByClassName("nav-item");
// const dropdownMenu = document.getElementsByClassName("dropdown-menu");

// for (let i = 0; i < navItem.length; i++) {
//   navItem[i].addEventListener("mouseover", (e) => {
//     console.log(e);
//     dropdownMenu[i].classList.remove("menu-hidden");
//   });
// }

// for (let i = 0; i < dropdownMenu.length; i++) {
//   dropdownMenu[i].addEventListener("mouseout", () => {
//     dropdownMenu[i].classList.add("menu-hidden");
//   });
// }

const nameInput = document.getElementById("name-input");
const nameBtn = document.getElementById("name-button");
const printName = document.getElementById("print-name");

nameBtn.addEventListener("click", () => {
  printName.innerText = nameInput.value;
});

// EXEMPLO

const products = document.getElementsByClassName("product");
const cartButton = document.getElementsByClassName("add-to-cart");
const carrinho = document.getElementById("carrinho");

for (let i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", () => {
    for (let j = 0; j < carrinho.children.length; j++) {
      if (
        products[i].children[0].innerText ===
        carrinho.children[j].children[0].innerText
      ) {
        carrinho.children[j].children[2].value++;

        carrinho.children[j].children[1].innerText =
          Number(carrinho.children[j].children[2].value) *
          Number(products[i].children[1].innerText);

        //  carrinho.children[j].children[2].value = Number(carrinho.children[j].children[2].value) + 1;
        return;
      }
    }

    const cartItem = document.createElement("div");

    //
    const cartItemName = document.createElement("strong");
    cartItemName.innerText = products[i].children[0].innerText;
    cartItem.appendChild(cartItemName);

    //

    const cartItemValue = document.createElement("span");
    cartItemValue.innerText = products[i].children[1].innerText;
    cartItem.appendChild(cartItemValue);

    //
    const cartItemQuantity = document.createElement("input");
    cartItemQuantity.setAttribute("type", "number");
    cartItemQuantity.value = 1;
    cartItem.appendChild(cartItemQuantity);

    carrinho.appendChild(cartItem);

    cartItemQuantity.addEventListener("change", () => {
      console.log("Oi");
      carrinho.children[i].children[1].innerText =
        Number(carrinho.children[i].children[2].value) *
        Number(products[i].children[1].innerText);
    });
  });
}

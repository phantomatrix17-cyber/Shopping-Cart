import { menuItems } from "./Storage.js";

console.log(menuItems);

const productsDisplay = document.querySelector(".productsDisplay");
const number = document.querySelector(".number");

function random() {
  let array = [];

  while (array.length < 6) {
    let randomIndex = Math.floor(Math.random() * menuItems.length);
    let index = menuItems[randomIndex];
    let occurance = array.some((a) => a.id === index.id);

    if (!occurance) {
      array.push(index);
    }
  }
  return array;
}

function displayItems() {
  let item = random().map((eachArray) => {
    return `<div class="productCart" data-id="${eachArray.id}">
          <section>
            <img src="${eachArray.image}" alt="${eachArray.name}" />
          </section>
          <h3>
            ${eachArray.name} <br />
           ${eachArray.category}
          </h3>

          <div class="price">
            <p>GhC ${eachArray.price}</p>
            <figure><img src="/Images/x.svg" alt="icon" /></figure>
          </div>
        </div>`;
  });
  item = item.join("");
  productsDisplay.innerHTML = item;
}

const savedCart = JSON.parse(localStorage.getItem("cartKey")) || [];
number.textContent = savedCart.length;

function clicking() {
  const productCart = document.querySelectorAll(".productCart");
  productCart.forEach(function (card) {
    card.addEventListener("click", function () {
      const id = menuItems.find((f) => f.id === Number(card.dataset.id));
      window.location.href = `Cart.html?id=${id.id}`;
    });
  });
}
displayItems();
clicking();

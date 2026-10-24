import { menuItems } from "./Storage.js";

let params = new URLSearchParams(window.location.search);

let cartArray = JSON.parse(localStorage.getItem("cartKey")) || [];
const firstLayer = document.querySelector(".firstLayer");
const number = document.querySelector(".number");
const number2 = document.querySelector("#number");
const subtotal = document.querySelector(".subtotal");
const delivery = document.querySelector(".delivery");
const totalAmount = document.querySelector(".totalAmount");

if (params.has("id")) {
  let newId = Number(params.get("id"));
  let newItem = menuItems.find((f) => f.id === newId);

  let occurance = cartArray.some((c) => c.id === newItem.id);
  if (!occurance) {
    cartArray.push({ ...newItem });
  }
}

function saveArray() {
  localStorage.setItem("cartKey", JSON.stringify(cartArray));
}

function displayCart(mapping) {
  if (mapping.length === 0) {
    firstLayer.innerHTML = "<p>No products found.</p>";
    return;
  }
  let item = mapping.map((m) => {
    return `<div class="eachLayer" data-id="${m.id}">
            <div class="box image">
              <figure>
                <img src="${m.image}" alt="${m.name}" />
              </figure>
            </div>
            <div class="box name">
              <h4>${m.name}</h4>
              <span>${m.description}</span>
              <div>
                <p class="minus">-</p>
                <p class="amount">${m.quantity}</p>
                <p class="add">+</p>
              </div>
            </div>
            <div class="box price">
              <p>Ghc ${m.price}</p>
              <figure class="remove"><img src="/Images/trash.svg" alt="icon" /></figure>
            </div>
          </div>`;
  });
  item = item.join("");
  firstLayer.innerHTML = item;
  number.textContent = cartArray.length;
  number2.textContent = cartArray.length;

  const fee = deliveryFee();
  subtotal.textContent = `Ghc ${total().toFixed(2)}`;
  delivery.textContent = `Ghc ${fee.toFixed(2)}`;
  totalAmount.textContent = `Ghc ${(total() + fee).toFixed(2)}`;
}
function total() {
  return cartArray.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function totalQuantity() {
  return cartArray.reduce((sum, item) => sum + item.quantity, 0);
}
function deliveryFee() {
  if (totalQuantity() === 0) return 0; // empty cart: no fee, and no 0 / 0
  return (total() * 0.1) / totalQuantity();
}

function calculation() {
  firstLayer.addEventListener("click", function (e) {
    let row = e.target.closest(".eachLayer");
    if (!row) {
      return;
    }

    let item = cartArray.find((c) => c.id === Number(row.dataset.id));

    if (e.target.closest(".remove")) {
      cartArray = cartArray.filter((c) => c.id !== item.id);
    } else if (e.target.closest(".add")) {
      item.quantity++;
    } else if (e.target.closest(".minus")) {
      item.quantity--;
      if (item.quantity < 1) {
        cartArray = cartArray.filter((c) => c.id !== item.id);
      }
    } else {
      return;
    }
    displayCart(cartArray);
    saveArray();
  });
}

calculation();
displayCart(cartArray);
saveArray();

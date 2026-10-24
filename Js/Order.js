import { cart } from "./Storage.js";

const cartDisplay = document.querySelector(".cartDisplay");
const number = document.querySelector(".number");
const Subtotal = document.querySelector("#Subtotal");
const delivery = document.querySelector("#delivery");
const total = document.querySelector("#total");

const fullName = document.querySelector("#fullName");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const sending = document.querySelector(".sending");

let paymentRadio = null;
let phoneNumber = "";
const myNumber = "233241234567";

function displayOrder(array) {
  if (array.length === 0) {
    cartDisplay.innerHTML = "<p>No products found.</p>";
    return;
  }
  let item = array.map((m) => {
    return `<div class="eachCart" data-id="${m.id}">
            <div class="box image">
              <img src="${m.image}" alt="${m.name}" />
            </div>
            <div class="box quantity">
              <p>${m.name}</p>
              <p><img src="/Images/x.svg" alt="icon" />${m.quantity}</p>
            </div>
            <div class="box price">Ghc ${m.price.toFixed(2)}</div>
          </div>`;
  });
  item = item.join("");
  cartDisplay.innerHTML = item;

  const fee = deliveryFee();
  Subtotal.textContent = `Ghc ${totalA().toFixed(2)}`;
  delivery.textContent = `Ghc ${fee.toFixed(2)}`;
  total.textContent = `Ghc ${(totalA() + fee).toFixed(2)}`;
}

const savedCart = JSON.parse(localStorage.getItem("cartKey")) || [];
number.textContent = savedCart.length;

function totalA() {
  return cart().reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function totalQuantity() {
  return cart().reduce((sum, item) => sum + item.quantity, 0);
}

function deliveryFee() {
  if (totalQuantity() === 0) return 0;
  return (totalA() * 0.1) / totalQuantity();
}

displayOrder(cart());

function sendProcess() {
  sending.addEventListener("click", function () {
    phoneNumber = phone.value.replaceAll(" ", " ");
    paymentRadio = document.querySelector('input[name="payment"]:checked');

    if (
      fullName.value.trim() === "" ||
      address.value.trim() === "" ||
      phoneNumber.length !== 10 ||
      isNaN(phoneNumber) ||
      !paymentRadio ||
      cart().length === 0
    ) {
      window.alert("Invalid Credentials!");
    } else {
      displayMessage();
    }
  });
}

sendProcess();

function clearCart() {
  localStorage.setItem("cartKey", JSON.stringify([])); // save an empty list
  number.textContent = 0; // reset the cart badge
  phone.value = "";
  fullName.value = "";
  address.value = "";
  paymentRadio = null;
  displayOrder(cart()); // redraw the summary (now empty)
  total.textContent = "Ghc 0.00";
  Subtotal.textContent = "Ghc 0.00";
  delivery.textContent = "Ghc 0.00";
}

function displayMessage() {
  const information = cart()
    .map((m) => `${m.name}   x${m.quantity}`)
    .join("\n");

  const message = `Name: ${fullName.value}
Address: ${address.value}
Contact: ${phoneNumber}
Payment: ${paymentRadio.value}
Total: ${total.textContent}

Packages:
${information}
`;

  const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
  const opened = window.open(url, "_blank");

  if (opened) {
    clearCart();
  }
}

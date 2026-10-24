import { menuItems } from "./Storage.js";

console.log(menuItems);

const productsDisplay = document.querySelector(".productsDisplay");
const searchbar = document.getElementById("searchbar");
const categorySelect = document.getElementById("categorySelect");
const number = document.querySelector(".number");
let searchText = "";
let select = "All";

function displayItems(array) {
  if (array.length === 0) {
    productsDisplay.innerHTML = "<p>No products found.</p>";
    return;
  }
  let item = array.map((eachArray) => {
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

searchbar.addEventListener("input", function () {
  searchText = searchbar.value.toLowerCase();

  filterDisplay();
});

categorySelect.addEventListener("change", function () {
  select = categorySelect.value;

  filterDisplay();
});

displayItems(menuItems);

function filterDisplay() {
  let visible = menuItems.filter(function (item) {
    let search = item.name.toLowerCase().includes(searchText);
    let catting = select === "All" || item.category === select;
    return search && catting;
  });

  displayItems(visible);
}

productsDisplay.addEventListener("click", function (e) {
  const card = e.target.closest(".productCart");
  if (!card) return; // click wasn't on a product

  window.location.href = `Cart.html?id=${card.dataset.id}`;
});

const savedCart = JSON.parse(localStorage.getItem("cartKey")) || [];
number.textContent = savedCart.length;

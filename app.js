import { sepetUI } from "./basket.js";
import { productUI } from "./products.js";
import { addStorage, btnColors } from "./utils.js";
const btnDivs = document.getElementById("btns");
const productDivs = document.getElementById("products");
const searchInput = document.getElementById("searchInput");
const modalBody = document.querySelector(".modal-body");
const canvasBody = document.querySelector(".offcanvas-body");
const modalTitle = document.querySelector(".modal-title");
const badge = document.getElementById("sepet");
const categoryTitle = document.getElementById("category");

let myProducts = JSON.parse(localStorage.getItem("products")) || [];
let products = [];
const getProducts = async () => {
  const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/");
  const data = await res.json();
  products = data;
  categories();
  displayProducts(data);
};

const categories = () => {
  const categories = products.reduce(
    (acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    },
    ["all"]
  );
  categories.forEach((category, i) => {
    const btn = document.createElement("button");
    btn.innerText = category.toUpperCase();
    btn.classList.add("btn", `btn-${btnColors[i]}`);
    btnDivs.appendChild(btn);
  });
};

const displayProducts = (products) => {
  productDivs.innerHTML = "";

  products.forEach((product) => {
    const productDiv = productUI(product);
    productDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-danger")) {
        handleAddToCart(product);
        displayBasket();
      } else {
        handleProductDetails(e, product);
      }
    });
    productDivs.appendChild(productDiv);
  });
};
const displayBasket = () => {
  canvasBody.innerHTML = "";
  myProducts.forEach((item) => {
    const sepetDiv = sepetUI(item);
    canvasBody.appendChild(sepetDiv);
    sepetDiv.addEventListener("click", (e) => {
      e.stopPropagation();
      sepetEvents(e);
      displayBasket();
    });
  });
  canvasBody.nextElementSibling.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
    <h5>Toplam Tutar</h5>
    <h5>${myProducts
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2)} TL</h5>
  </div>
  `;
};

window.addEventListener("load", () => {
  getProducts();
  badge.innerText = myProducts.length;
  if (myProducts.length) {
    displayBasket();
  }
});

btnDivs.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const selectedCategory = e.target.innerText.toLowerCase();
    categoryTitle.innerText = selectedCategory.toUpperCase();
    const filtereds = filtered(selectedCategory, searchInput.value);
    displayProducts(filtereds);
  }
});

function handleAddToCart(product) {
  if (!myProducts.some((item) => item.title == product.title)) {
    myProducts.push(product);
    badge.innerText = myProducts.length;
  } else {
    myProducts = myProducts.map((item) =>
      item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  addStorage(myProducts);
}

function handleProductDetails(e, product) {
  const id = e.target.closest(".col").id;
  //   fetch(`https://anthonyfs.pythonanywhere.com/api/products/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       modalTitle.textContent = res.title;
  //       modalBody.innerHTML = `<div class="text-center">
  //             <img src="${res.image}" class="p-2" height="250px" alt="...">
  //             <h5 class="card-title">${res.title}</h5>
  //             <p class="card-text">${res.description}</p>
  //             <p class="card-text">Fiyat: ${res.price} TL</p>
  //             </div>
  //             `;
  //     });
  const { title, image, description, price } = product;
  modalTitle.textContent = title;
  modalBody.innerHTML = `<div class="text-center">
            <img src="${image}" class="p-2" height="250px" alt="...">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">Fiyat: ${price} TL</p>
            </div>
            `;
}
function sepetEvents(e) {
  const id = e.target.closest(".basket").id;
  if (e.target.classList.contains("btn-danger")) {
    myProducts = myProducts.filter((item) => item.id != id);
    badge.innerText = myProducts.length;
  } else if (e.target.classList.contains("fa-plus")) {
    myProducts = myProducts.map((item) =>
      item.id == id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else if (e.target.classList.contains("fa-minus")) {
    myProducts = myProducts.map((item) =>
      item.id == id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
  }
  addStorage(myProducts);
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const selectedCategory = categoryTitle.innerText.toLowerCase();
  const filteredProducts = filtered(selectedCategory, value);
  displayProducts(filteredProducts);
});

function filtered(selectedCategory, value) {
  const filteredProducts =
    selectedCategory !== "all"
      ? products.filter(
          (item) =>
            item.title.toLowerCase().includes(value) &&
            item.category.toLowerCase() === selectedCategory
        )
      : products.filter((item) => item.title.toLowerCase().includes(value));
  return filteredProducts;
}

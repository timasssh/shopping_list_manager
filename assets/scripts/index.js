import { showMenu, switchMenu } from "./menu_scripts.js";
import { createProduct } from "./createProduct.js";
import { addProductOnList } from "./addProductOnList.js";

const switchMenuButtons = document.querySelectorAll(".mainContentOption");
const form = document.querySelector("#addProductOnListForm");
const productsList = [];
const productListElement = document.getElementById("productsList");

showMenu();
switchMenuButtons.forEach((element, index) => {
    element.addEventListener("click", () => switchMenu(index));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let newProduct = createProduct(form);
    productsList.push(newProduct);
    console.log(productsList);

    addProductOnList(productListElement, newProduct);
});
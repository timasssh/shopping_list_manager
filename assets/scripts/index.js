import { showMenu, switchMenu } from "./menu_scripts.js";
import { createProduct } from "./createProduct.js";
import { addProductOnList } from "./addProductOnList.js";

export const switchMenuButtons = document.querySelectorAll(".mainContentOption");
export const menus = document.querySelectorAll(".menu");
const form = document.querySelector("#addProductOnListForm");
export const productsList = [];
const productListElement = document.getElementById("productsList");
const clearListButton = document.getElementById("clearList");

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

clearListButton.addEventListener("click", () => {
    while(productsList.length) productsList.pop(); // clears the productList array
    console.log(productsList);

    productListElement.innerHTML = "";
})
import { showMenu, switchMenu } from "./menu_scripts.js";
import { createProduct } from "./createProduct.js";
import { addProductOnList } from "./addProductOnList.js";

export const switchMenuButtons = document.querySelectorAll(".mainContentOption");
export const menus = document.querySelectorAll(".menu");
const form = document.querySelector("#addProductOnListForm");
export const productsList = [];
const productListElement = document.getElementById("productsList");
const productTemplate = document.getElementById("productTemplate");
const clearListButton = document.getElementById("clearList");
const searchProductInput = document.querySelector("[data-product-search]");

showMenu();
switchMenuButtons.forEach((element, index) => {
    element.addEventListener("click", () => switchMenu(index));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let newProduct = createProduct(form);

    newProduct.HTMLElement = addProductOnList(productListElement, productTemplate, newProduct);
    productsList.push(newProduct);
    console.log(productsList);
});

clearListButton.addEventListener("click", () => {
    while(productsList.length) productsList.pop(); // clears the productList array
    console.log(productsList);

    productListElement.innerHTML = "";
});

searchProductInput.addEventListener("input", (event) => {
    const classToHideElement = "hidden";
    
    let searchingText = event.target.value.trim().toLowerCase();

    productsList.forEach((product) => {
        let isVisible = product.name.toLowerCase().includes(searchingText) || 
                        product.brand.toLowerCase().includes(searchingText);

        product.HTMLElement.classList.toggle(classToHideElement, !isVisible);

        restoreDOMOrderFromArray(productsList, productListElement);
        moveElementsWithClassToEnd(productsList, classToHideElement, productListElement);
    })

    function restoreDOMOrderFromArray(array, elementToInsert) {
        array.forEach(itemOfTheList => {
            elementToInsert.appendChild(itemOfTheList.HTMLElement);
        });
    }
    function moveElementsWithClassToEnd(array, selectionClass, elementToInsert) {
        array.forEach(itemOfTheList => {
            if(itemOfTheList.HTMLElement.classList.contains(selectionClass)) {
                elementToInsert.insertAdjacentElement("beforeend", itemOfTheList.HTMLElement);
            }
        });
    }
});
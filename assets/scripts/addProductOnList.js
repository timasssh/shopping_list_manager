import { productsList } from "./index.js";

export function addProductOnList(listElement, productTemplate, product) {
    productTemplate = productTemplate.content.firstElementChild;
    
    let productInfoOnArray = getProductInfoOnArray(product);
    
    let productListItem = productTemplate.cloneNode(true);
    let productListItemInfo = productListItem.querySelectorAll("p.productInfoField");
    productListItemInfo.forEach((element, index) => {
        element.textContent = productInfoOnArray[index];
    });

    let productListItemRemoveButton = productListItem.querySelector("button.deleteProduct");
    productListItemRemoveButton.addEventListener("click", (event) => {
        let elementToRemove = event.target.parentElement.parentElement.parentElement;
        let indexOfElementToRemove = Array.from(listElement.children).indexOf(elementToRemove);
        
        if(indexOfElementToRemove !== -1) {
            productsList.splice(indexOfElementToRemove, 1);
            removeTagOnCLick(productListItem);
        }

        console.log(productsList);
    });

    listElement.appendChild(productListItem);

    return productListItem;
}

function getProductInfoOnArray(product) {
    let productsQuantityUnityDictionary = new Map([
        ["un" , "Unidade(s)"],
        ["kg" , "Quilo(s)"],
        ["g" , "Grama(s)"],
        ["l" , "Litro(s)"],
        ["ml" , "Mililitro(s)"],
        ["other" , "Outro(s)"],
    ]);

    let productName = product.name !== "" ? product.name : "--";
    let productBrand = product.brand !== "" ? product.brand : "--";
    let productQuantity = !isNaN(product.quantity) ? product.quantity : "--";
    let productQuantityUnity = productsQuantityUnityDictionary.has(product.quantityUnity) ? 
                                productsQuantityUnityDictionary.get(product.quantityUnity) : "--";

    return [productName, productBrand, productQuantity, productQuantityUnity];
}

function removeTagOnCLick(tagToRemove) {
    tagToRemove.remove();
}
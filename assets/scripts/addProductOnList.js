import { productsList } from "./index.js";

export function addProductOnList(listElement, product) {
    let productsQuantityUnityDictionary = {
        "un" : "Unidade(s)",
        "kg" : "Quilo(s)",
        "g" : "Grama(s)",
        "l" : "Litro(s)",
        "ml" : "Mililitro(s)",
        "other" : "Outro",
    }
    let productsValuesOnArray = [product.name, product.brand, product.quantity, productsQuantityUnityDictionary[product.quantityUnity]];
    
    let li = document.createElement("li");
    const totalOfFields = 4;

    for(let i = 0; i < totalOfFields; i++) {
        let p = document.createElement("p");
        p.textContent = productsValuesOnArray[i];
        p.classList.add("productInfoField");

        li.appendChild(p);
    }

    let div = document.createElement("div");
    div.classList.add("productInfoField");
    let button = document.createElement("button");
    button.classList.add("deleteProduct");
    button.addEventListener("click", (event) => {
        let elementToRemove = event.target.parentElement.parentElement.parentElement;
        let indexOfElementToRemove = Array.from(listElement.children).indexOf(elementToRemove);
        
        if(indexOfElementToRemove !== -1) {
            productsList.splice(indexOfElementToRemove, 1);
            removeTagOnCLick(li);
        }

        console.log(productsList);
    });

    const trashCanImageInfo = ["./assets/img/trashCan.svg", "trash can icon"];
    let img = document.createElement("img");
    img.src = trashCanImageInfo[0];
    img.alt = trashCanImageInfo[1];
    img.classList.add("icon");

    button.appendChild(img);
    div.appendChild(button);
    li.appendChild(div);

    listElement.appendChild(li);
}

function removeTagOnCLick(tagToRemove) {
    tagToRemove.remove();
}
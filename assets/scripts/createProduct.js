class Product {
    constructor(name, brand, quantity, quantityUnity) {
        this.name = name;
        this.brand = brand;
        this.quantity = parseInt(quantity);
        this.quantityUnity = quantityUnity;

        return this;
    }
}

export function createProduct(form) {
    let formData = new FormData(form);

    let newProduct = new Product(formData.get("productName"), formData.get("productBrand"), formData.get("productQuantity"), formData.get("productQuantityType"));

    return newProduct;
}
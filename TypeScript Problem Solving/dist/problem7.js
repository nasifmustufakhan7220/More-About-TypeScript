"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findProducts = (products, category) => {
    const filteredProducts = products.filter(product => {
        if (product.category === category) {
            return product;
        }
    });
    if (filteredProducts.length > 0) {
        return filteredProducts;
    }
    return [];
};
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];
console.log(findProducts(products, "mobile"));
//# sourceMappingURL=problem7.js.map
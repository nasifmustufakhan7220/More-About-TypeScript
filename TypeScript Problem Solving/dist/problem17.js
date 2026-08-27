"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findMenuItemsByTag = (tag, menus) => {
    const filteredRestaurant = menus.filter(menu => {
        if (tag === menu.tag) {
            return menu;
        }
    });
    if (filteredRestaurant.length !== 0)
        return filteredRestaurant;
    return [];
};
console.log(findMenuItemsByTag("gluten-free", [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" }
]));
//# sourceMappingURL=problem17.js.map
export default function menu() {
    const container = document.createElement("div");

    const menuObj = {
        "Milk Tea": [
            "Classic Milk Tea",
            "Brown Sugar Milk Tea",
            "Coffee Milk Tea",
            "Taro Milk Tea",
            "Black Seasame Milk Tea",
            "Red Bean Milk Tea",
            "Thai Milk Tea",
            "Strawberry Milk Tea",
            "Honey Milk Tea",
        ], 
        "Fruit Tea": [
            "Grapefruit Green Tea",
            "Passion Fruit Green Tea",
            "Mango Green Tea",
            "Strawberry Lemon Green Tea",
            "Lychee Black Tea",
            "Peach Oolong Tea"
        ], 
        "Slush": [
            "Mango Slush",
            "Pashion Fruit Slush",
            "Taro Slush",
            "Strawberry Milk Slush",
            "Oreo Slush",
        ],
        "Toppings": [
            "Honey Boba",
            "Crystal Boba",
            "Mango Popping Boba",
            "Aloe Jelly",
            "Lychee Jelly",
            "Nata Jelly",
        ],
    };

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";
    container.appendChild(menuTitle);

    for (const prop in menuObj) {
        const elem = document.createElement("div");
        const header = document.createElement("h2");
        const lst = document.createElement("ul");

        header.textContent = prop;
        for (const val of menuObj[prop]) {
            const item = document.createElement("li");
            item.textContent = val;
            lst.appendChild(item);
        }

        elem.appendChild(header);
        elem.appendChild(lst);

        container.appendChild(elem);
    }

    return container;
}
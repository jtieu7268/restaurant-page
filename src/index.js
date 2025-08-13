import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"

const container = document.querySelector("#content");
container.appendChild(home());
const nav = document.querySelector("nav");

nav.addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
        container.textContent = "";
        if (event.target.id === "home") {
            container.appendChild(home());
        }
        else if (event.target.id === "menu") {
            container.appendChild(menu());
        } else {
            container.appendChild(contact());
        }
    }
})


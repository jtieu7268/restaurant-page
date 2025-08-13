import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"

const container = document.querySelector("#content");
const buttons = document.querySelectorAll("button");
const pages = {
    home: home(),
    menu: menu(),
    contact: contact(),
};
buttons.forEach(button => {
    button.addEventListener('click', event => {
        container.textContent = "";
        container.appendChild(pages[event.target.id]);
    })
});
container.appendChild(pages.home);


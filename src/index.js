import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"
import "./style.css"

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
        buttons.forEach(button => {
            button.classList.remove("clicked");
        })
        button.classList.add("clicked");
    });
});
container.appendChild(pages.home);
buttons[0].classList.add("clicked");


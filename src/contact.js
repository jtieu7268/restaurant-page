export default function contact() {
    const container = document.createElement("div");
    const contactTitle = document.createElement("h1");
    const info = document.createElement("div");

    container.classList.add("contact");

    const address = document.createElement("p");
    const email = document.createElement("p");
    const number = document.createElement("p");

    contactTitle.textContent = "Contact Us";
    address.textContent = "123 Any St, \nSome City, VA 12345";
    email.textContent = "bubblesboba@bubblesboba.com";
    number.textContent = "(123) 456-7890";

    info.appendChild(address);
    info.appendChild(email);
    info.appendChild(number);

    container.appendChild(contactTitle);
    container.appendChild(info);

    return container;
}
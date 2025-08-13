export default function contact() {
    const container = document.createElement("div");
    const info = document.createElement("div");

    const address = document.createElement("p");
    const number = document.createElement("p");

    number.textContent = "(123) 456-7890";
    address.textContent = "123 Any St, \nSome City, VA 12345";

    info.appendChild(address);
    info.appendChild(number);

    container.appendChild(info);

    return container;
}
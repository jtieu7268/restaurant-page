import homepageImg from "./img/homepage.jpg";

export default function home() {
    const container = document.createElement("div");
    const textDiv = document.createElement("div");
    const imgDiv = document.createElement("div");

    container.classList.add("home");
    textDiv.classList.add("home-text");
    imgDiv.classList.add("home-img");

    const tagline = document.createElement("h1");
    const descrip = document.createElement("p");
    const hpImg = document.createElement("img");
    
    hpImg.classList.add("home-img");

    tagline.textContent = "Pop on in and burst our bubbles!";
    descrip.textContent = "Bubbles Boba offers a fun collection of bubble tea drinks. \
        From milky to fruity, there's something for everyone. \
        Try our classic brown sugar milk tea served with \
        a caramelized brown sugar glaze and homemade honey boba \
        or our refreshing mango slush."
    hpImg.src = homepageImg;
    hpImg.alt = "boba milk tea";

    textDiv.appendChild(tagline);
    textDiv.appendChild(descrip);
    imgDiv.appendChild(hpImg);
    container.appendChild(textDiv);
    container.appendChild(imgDiv);

    return container;
}




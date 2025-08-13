import homepageImg from "./img/homepage.jpg";

export default function home() {
    const container = document.createElement("div");
    const tagline = document.createElement("h1");
    const descrip = document.createElement("p");
    const hpImg = document.createElement("img");
    tagline.textContent = "Pop on in and burst our bubbles!";
    descrip.textContent = "Bubbles Boba offers a fun collection of bubble tea drinks. \
        From milky to fruity, there's something for everyone. \
        Try our classic brown sugar milk tea served with \
        a caramelized brown sugar glaze and homemade honey boba \
        or our new juicy bubblegum slush."
    hpImg.src = homepageImg;
    hpImg.alt = "boba milk tea";
    container.appendChild(tagline);
    container.appendChild(descrip);
    container.appendChild(hpImg);

    return container;
}




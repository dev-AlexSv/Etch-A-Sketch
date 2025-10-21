const body = document.querySelector("body");
const container = document.querySelector(".grid-container");

container.style["width"] = "480px";
container.style["height"] = "480px";
gridDefault();

function gridDefault() {
    

    for (let i = 0; i < 256; i++) {

        let gridBox = document.createElement("div");
        gridBox.className = "grid-box";

        gridBox.style["width"] = "30px";
        gridBox.style["height"] = "30px";

        container.appendChild(gridBox);
    }
}


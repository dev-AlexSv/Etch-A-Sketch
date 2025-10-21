const body = document.querySelector("body");
const container = document.querySelector(".grid-container");
const containerSize = 580;

gridDefault();




function gridDefault() {
    

    for (let i = 0; i < 256; i++) {

        let gridBox = document.createElement("div");
        gridBox.className = "grid-box";

        gridBox.style["width"] = String(containerSize / 16) + "px";
        gridBox.style["height"] = String(containerSize / 16) + "px";


        container.appendChild(gridBox);
    }
}

function gridWithChoice() {
    let numberOfGrid = Number(prompt("How many grids? Choose from 1 - 100"));
    let gridBoxes = numberOfGrid * numberOfGrid;

    container.replaceChildren();
    for (let i = 0; i < gridBoxes; i++) {

        let gridBox = document.createElement("div");
        gridBox.className = "grid-box";

        gridBox.style["width"] = String(containerSize / numberOfGrid ) + "px";
        gridBox.style["height"] = String(containerSize / numberOfGrid ) + "px";

        container.appendChild(gridBox);
    } 


}


function gridDefault() {
    container.replaceChildren();

    for (let i = 0; i < 256; i++) {

        let gridBox = document.createElement("div");
        gridBox.className = "grid-box";

        gridBox.style["width"] = String(containerSize / 16) + "px";
        gridBox.style["height"] = String(containerSize / 16) + "px";


        container.appendChild(gridBox);
    }
    if (!blackWhiteMode) {
        hoverGridBoxWithColor();
    } else {
        hoverGridBoxBlackAndWhiteOnly();
    }
}

function gridWithChoice() {
    let numberOfGrid = Number(prompt("How many grids? Choose from 1 - 100"));
    if (isNaN(numberOfGrid) || numberOfGrid < 1 || numberOfGrid > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    let gridBoxes = numberOfGrid * numberOfGrid;

    container.replaceChildren();
    for (let i = 0; i < gridBoxes; i++) {

        let gridBox = document.createElement("div");
        gridBox.className = "grid-box";

        gridBox.style["width"] = String(containerSize / numberOfGrid ) + "px";
        gridBox.style["height"] = String(containerSize / numberOfGrid ) + "px";

        container.appendChild(gridBox);
    } 

    if (!blackWhiteMode) {
        hoverGridBoxWithColor();
    } else {
        hoverGridBoxBlackAndWhiteOnly();
    }
}

function hoverGridBoxWithColor() {
    const elements = document.querySelectorAll(".grid-box");

    elements.forEach(gridBox => {
        gridBox.addEventListener("mouseover", () => {
            gridBox.style["background-color"] = allColorsMode();
        })
    })
}

function hoverGridBoxBlackAndWhiteOnly() {
    const elements = document.querySelectorAll(".grid-box");

    elements.forEach(gridBox => {
        gridBox.addEventListener("mouseover", () => {
            gridBox.style["background-color"] = blackAndWhiteMode(gridBox);
        })
    })
}

function allColorsMode() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

function blackAndWhiteMode(e) {
    const element = e;
    if (element.classList.contains("black")) {
        element.classList.remove("black");
        element.style["background-color"] = "#ffffff";
    } else {
        element.classList.add("black");
        element.style["background-color"] = "#000000";
    }

}

// MAIN CODE
const body = document.querySelector("body");
const container = document.querySelector(".grid-container");
const containerSize = 580;

const btSelectSize = document.querySelector("#bt-grid-select");
const btReset = document.querySelector("#bt-reset");
const btBWMode = document.querySelector("#bt-bw");

let blackWhiteMode = false;

gridDefault();



btSelectSize.addEventListener('click', () => {
    blackWhiteMode = false;
    gridWithChoice();
});
btReset.addEventListener("click", () => {
    blackWhiteMode = false;
    gridDefault();
});

btBWMode.addEventListener("click", () => {
    blackWhiteMode = true;
    gridWithChoice();
})




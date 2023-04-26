// variables
const easy = 100;
const gridEasy = `n${easy}`;
const medium = 81;
const gridMedium = `n${medium}`;
const hard = 49;
const gridHard = `n${hard}`;
const grid = document.querySelector(".grid");

// functions
function play() {
    const mode = document.querySelector("#mode").value.toLowerCase();
    const cellNumber = difficulty(mode);
    grid.innerHTML = "";
    generate(cellNumber);
}

function difficulty(diff) {
    return diff === "facile" ? easy
        : diff === "medio" ? medium
            : hard;
}

function generate(cells) {
    for (let i = 1; i <= cells; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell", cells === easy ? gridEasy : cells === medium ? gridMedium : gridHard);
        newCell.innerHTML = `${i}`;
        grid.appendChild(newCell);
        newCell.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }
}
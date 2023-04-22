function play() {
    const grid = document.querySelector(".grid");
    const mode = document.querySelector("#mode").value.toLowerCase();
    const cellNumber = difficulty(mode);

    grid.innerHTML = "";

    for (let i = 1; i <= cellNumber; i++) {
        const cell = document.createElement("div");
        cell.classList.add(cellNumber === 49 ? "cell-7x7" : cellNumber === 81 ? "cell-9x9" : cellNumber === 100 ? "cell-10x10" : 0);
        cell.innerHTML = `${i}`;
        grid.appendChild(cell);
        cell.addEventListener('click', function () {
            this.classList.toggle('active');
        });
        flag = true;
    }
}

function difficulty(diff) {
    return diff === "facile" ? 49
        : diff === "medio" ? 81
            : diff === "difficile" ? 100
                : 0;
}




const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new-grid-btn");

newGridBtn.addEventListener("click", () => {
  createGrid(prompt("How many squares per side?"));
});

const createGrid = (gridSize) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  for (y = 0; y < gridSize; y++) {
    const row = document.createElement("div");

    row.classList.add("row");

    for (x = 0; x < gridSize; x++) {
      const col = document.createElement("div");
      const square = document.createElement("div");

      col.classList.add("col");
      square.classList.add("square");

      addHover(square);

      col.appendChild(square);
      row.appendChild(col);
    }
    container.appendChild(row);
  }
};

const addHover = (element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("hover");
  });
};

createGrid(16);

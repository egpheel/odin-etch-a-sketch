const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new-grid-btn");

const gridWidthInPx = 960;

newGridBtn.addEventListener("click", () => {
  createGrid(prompt("How many squares per side?"));
});

const createGrid = (gridSize) => {
  if (gridSize > 100) {
    gridSize = 100;
  } else if (gridSize < 0) {
    gridSize = 0;
  }

  const squareSize = gridWidthInPx / gridSize;

  container.style["width"] = gridWidthInPx + "px";
  container.style["height"] = gridWidthInPx + "px";

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
      square.style["width"] = squareSize + "px";
      square.style["height"] = squareSize + "px";

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

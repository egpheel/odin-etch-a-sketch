const container = document.querySelector(".container");

const gridSizeX = 16;
const gridSizeY = 16;

const createGrid = () => {
  for (y = 0; y < gridSizeY; y++) {
    const row = document.createElement("div");

    row.classList.add("row");

    for (x = 0; x < gridSizeX; x++) {
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

createGrid();

const container = document.querySelector("#container");
let mousedown = false;

const gridSize = document.querySelector("#gridSize");
const sliderValue = document.querySelector("#sliderValue");
let number = parseInt(gridSize.value);

gridSize.addEventListener("input", () => {
  number = parseInt(gridSize.value);
  sliderValue.textContent = number;

  container.innerHTML = ""
  createFirstGrids();
})

function createFirstGrids(){
  for (let i = 1; i <= number; i++){ //creates number of vertical grids
    const columnDiv = document.createElement("div");
    container.appendChild(columnDiv);
    columnDiv.classList.add("columnDiv");
    createSecondGrids(columnDiv);
  }
}

function createSecondGrids(columnDiv){
  for (let i=1; i <= number; i++){
    const insideDiv = document.createElement("div");
    columnDiv.appendChild(insideDiv);
    insideDiv.classList.add("insideDiv");

    insideDiv.addEventListener("mousedown", () => {
      mousedown = true;
      insideDiv.classList.add("clicked");
    })
    insideDiv.addEventListener("mouseup", () => {
      mousedown = false;
    })
    insideDiv.addEventListener("mouseenter", () => {
      if (mousedown === true){
        insideDiv.classList.add("clicked");
      }
    })
  }
}
createFirstGrids();

const container = document.querySelector("#container");
let mousedown = false;


function createFirstGrids(){
  for (let i = 1; i <= 16; i++){ //creates number of vertical grids
    const columnDiv = document.createElement("div");
    container.appendChild(columnDiv);
    columnDiv.classList.add("columnDiv");
    createSecondGrids(columnDiv);
  }
}

function createSecondGrids(columnDiv){
  for (let i=1; i <= 16; i++){
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

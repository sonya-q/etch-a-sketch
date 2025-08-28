const container = document.querySelector("#container");

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
  }
}

createFirstGrids();

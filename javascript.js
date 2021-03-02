//Create Variables
let dimension;
let getDimension = 16;

//Create html
const dimensionButton = document.createElement('button');
dimensionButton.textContent = "Change Size";
const container = document.createElement('div');
document.body.appendChild(dimensionButton).classList.add('chooseSize');
document.body.appendChild(container).classList.add('container');

//Create grid
function createDiv() {
    for (let i = 0; i < (getDimension * getDimension); i++) {
        const newDiv = document.createElement('div');
        newDiv.id = `div${i}`;
        newDiv.style.border = '1px solid red';
        container.style.gridTemplateColumns = `repeat(${getDimension}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${getDimension}, 1fr)`;
        container.style.display = 'grid';
        container.appendChild(newDiv).classList.add('box');
        listenForHover();
    }
}
createDiv();

//Listen for mouseover to change color
function listenForHover() {
const changeColor = document.querySelectorAll('.box');
changeColor.forEach(divider => divider.addEventListener('mouseover', (e) => {
    let targetDiv = (e.target.id);
    document.getElementById(targetDiv).style.backgroundColor = "red";
}));
}

//Change grid size
dimensionButton.addEventListener('click', () => {
    //resetGrid();
    getDimension = prompt('What would you like the dimension to be? Maximum of 100.');
    selectDimension();
})

//Change grid size to user deffined
function selectDimension() {
    if (getDimension < 1 || getDimension > 100){
        getDimension = prompt('Please select a size between 1 and 100.');
    } else {
        removeGrid()
        createDiv();
    }
}
function removeGrid() {
    const boxRemoval = container.querySelectorAll('.box');
    boxRemoval.forEach(box => box.remove());
}                                                
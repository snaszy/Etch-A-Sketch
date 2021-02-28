const container = document.createElement('div');
container.classList.add('container');
container.style.height = '100%';
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
document.body.appendChild(container);
window.onload = () => {
    let newDiv;
    for (let i = 0; i < 256; i++) {
        newDiv = document.createElement('div');
        newDiv.id = `div${i}`;
        container.appendChild(newDiv)
    }
}
const changeColor = document.querySelectorAll('div');
changeColor.forEach(divider => divider.addEventListener('mouseover', (e) => {
    //console.log(e.target.id)
    let targetDiv = (e.target.id);
    document.getElementById(targetDiv).style.backgroundColor = "red";
}));

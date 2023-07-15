let range = document.querySelector('#rangeButton');
let gridValue = document.querySelector('#gridValue');
let container = document.querySelector('#container');
let apply = document.querySelector('#apply');
let div = document.querySelector('.gridElement');
let clear = document.querySelector('#clear');

//get the number of divs in the grid
gridValue.textContent = range.value;
range.addEventListener("input", (event) => {gridValue.textContent = event.target.value;});

//Create the div grid with apply button
apply.addEventListener("click", () => {
    let count = parseInt(gridValue.textContent);
    for(i=0;i<count;i++) {
        grid();
    }
    console.log(count);
})
clear.addEventListener("click", () => {
    let count = parseInt(gridValue.textContent);
    for(i=0;i<count;i++){
        div.remove();
    }
})

function grid() {
    div = document.createElement('div');
    div.classList.add('gridElement');
    container.appendChild(div);
}
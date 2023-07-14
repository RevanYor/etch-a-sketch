let range = document.querySelector('#rangeButton');
let gridValue = document.querySelector('#gridValue');
let container = document.querySelector('#container');
let div = 0;

gridValue.textContent = range.value;
range.addEventListener("input", (event) => {gridValue.textContent = event.target.value;});
range.addEventListener("input", () => {
    div = document.createElement('div');
    container.appendChild(div);
})




/* function grids() {
    for(i = 0; i <= gridValue.textContent; i++) {
        div = document.createElement('div');
        container.appendChild(div);
    }

}
grids(); */
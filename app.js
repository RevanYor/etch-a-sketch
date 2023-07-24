let container = document.querySelector('#container');
let apply = document.querySelector('#apply');
let clear = document.querySelector('#clear');


//Create the div grid with apply button
/* apply.addEventListener("click", () => {
    let count = parseInt(gridValue.textContent);
    for(i=0;i<count;i++) {
        grid();
    }
    console.log(count);
}) */

clear.addEventListener("click", () => {
    let divElement = document.querySelectorAll('.gridElement');
    divElement.forEach(element => {
        container.removeChild(element);
    });
})

function grid() {
    div = document.createElement('div');
    div.classList.add('gridElement');
    container.appendChild(div);
}
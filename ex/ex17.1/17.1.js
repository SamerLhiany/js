let up = document.querySelector(`.up`);
let down = document.querySelector(`.down`);
let text = document.querySelector(`.text`);

let size = 10
text.style.fontSize = size + 'px';

up.addEventListener('click', () => {
    sizeUpDown('up')
})


down.addEventListener('click', () => {
    sizeUpDown('down')
})

function sizeUpDown(action) {
    if (action === 'up' && size < 100) {
        size++;
    }
    else if(action ==="down" && size > 6){
        size--;
    }
    text.style.fontSize = size + 'px';
}

let text = document.querySelector(`.text`);
let img = document.querySelector(`.img`);
let button = document.querySelector(`.button`);
let erortext = document.querySelector(`.erortext`);
let img_container = document.querySelector(`.img-container`);

button.addEventListener(`click`, textcheck);

function textcheck() {
    if (text.value != parseInt(text.value)) {
        text.value = '';
        erortext.innerHTML = 'please inter a number';
        erortext.style.color = "red";
    }
    else {
        img_container.innerHTML = '';
        for (let i = 0; i < parseInt(text.value); i++) {
            img_container.innerHTML += `<img src="./img/smily.png" alt="" class="img"></img>`
        }
        text.value = '';
    }
}
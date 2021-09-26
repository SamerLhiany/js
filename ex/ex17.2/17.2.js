let text = document.querySelector(`.text`);
let button = document.querySelector(`.button`);
let erortext = document.querySelector(`.erortext`);

button.addEventListener(`click`, textcheck);
function textcheck() {
    if (text.value.length < 100) {
        erortext.innerHTML = 'write at least 100 characters';
        erortext.style.color = "red";
    }
    else {
        erortext.innerHTML = 'contact our website';
        erortext.style.color = "green";
    }
}



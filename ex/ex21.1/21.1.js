let age = document.querySelector(`.text`);
let button = document.querySelector(`.button`);
let erortext = document.querySelector(`.erortext`);
button.addEventListener(`click`, agecheck)
function agecheck() {
    
    if (parseInt(age.value) < 18) {
        erortext.innerHTML = 'you’re too young';
        erortext.style.color = "red";
    
    }
    else if (parseInt(age.value) >= 18){
        erortext.innerHTML = 'you can drink appear';
        erortext.style.color = "green";
    }
    else {
        erortext.innerHTML = ` enter a number`
        erortext.style.color = `orange`;
    }

    age.value = ``;
}

age.addEventListener(`focus`, () => erortext.innerHTML = ``);


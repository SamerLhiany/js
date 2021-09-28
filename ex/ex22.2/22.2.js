let checkme = document.querySelector(`.check`);
let img = document.querySelector(`img`);

function check () {
    if (checkme.checked) {
        img.style.display=`block`;
    }
    else {
        img.style.display=`none`;
    }
}

checkme.addEventListener(`change`, check);
let textinput = document.querySelectorAll(`.shadi`),
    btn = document.querySelector(`.btn`),
    box = document.querySelector(`.box`),
    confirmm = document.querySelector(`.confirm`),
    modify = document.querySelector(`.modify`),
    p = document.querySelector(`p`);


btn.addEventListener(`click`, newwin);
box.style.display = `none`;
function newwin() {
    p.innerText = ``;
    box.style.display = `block`;
    p.innerText = p.innerText + textinput[0].value;
    p.innerHTML += "<br>"
    p.innerText = p.innerText + textinput[1].value;
    p.innerHTML += "<br>"
    p.innerText = p.innerText + textinput[2].value
};

confirmm.addEventListener(`click`, pdisplay);
function pdisplay() {
    let node = document.createTextNode("congratulations you successfully sent this form");
    box.appendChild(node);
    modify.style.display = `none`;
}

modify.addEventListener(`click`, returnback);
function returnback() {
    box.style.display = `none`;


}



let rightletter = document.querySelector(`.righletter`),
    lettersguessed = document.querySelector(`.lettuesseersgd`),
    yourguess = document.querySelector(`.yourguess`),
    msg = document.querySelector(`.p1`),
    play_again = document.querySelector(`h2`),
    btn = document.querySelector(`.seham`);

btn.style.display = `none`;
yourguess.focus();

const possibleAnswers = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let randomIndex = Math.floor(Math.random() * possibleAnswers.length);
let randomLetter = possibleAnswers[randomIndex];
console.log(randomLetter);


let guessed = ``;
yourguess.addEventListener(`keyup`, () => {
    if ((/^[a-z]+$/.test(yourguess.value))) {
        if (guessed.includes(yourguess.value)) {
            msg.innerHTML = `${yourguess.value} has already been guessed!`
        } else {
            guessed += yourguess.value + `,`;
            lettersguessed.innerHTML = `${guessed}`;
            msg.innerHTML = `wrong letter`;
            msg.style.color = `red`;

        }

        if (yourguess.value === randomLetter) {
            rightletter.innerHTML = yourguess.value;
            msg.innerHTML = `right letter`;
            msg.style.color = `green`;
            play_again.innerHTML = `Would you like to play again ?`
            btn.style.display = `block`;
            lettersguessed.innerHTML = "";
            yourguess.style.display=`none`;
        }
        yourguess.value = "";
    }
    else {
        msg.innerHTML = `please enter a valid letter`;
        msg.style.color = `red`;
        yourguess.value=``;
    }
});

btn.addEventListener(`click`, gorawi);
function gorawi(){
    location.reload();
}

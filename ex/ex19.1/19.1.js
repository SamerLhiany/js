/*1*/

let liholder = document.querySelector(`.start-here`);
liholder.innerHTML = `main title`;

/*2*/

let newli = document.createElement('li'),
ulsec = document.querySelector(`ul ul`);
ulsec.appendChild(newli);
newli.innerHTML = `sub title 4`;

/*3*/

let delli = document.querySelector(`ul`);
delli.removeChild(delli.lastElementChild);

/*4*/

let newtitle = document.querySelector(`title`);
newtitle.innerHTML = `Master Of The Dom`;

/*5*/ 

let newp = document.querySelector(`div p`);
newp.innerHTML = ` samer is the best`;
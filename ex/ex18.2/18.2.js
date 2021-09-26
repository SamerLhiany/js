let element = document.createElement("div");
let h = document.createElement("h1")
let text = document.createTextNode("Hii, i'm Samer lhiany");
h.appendChild(text);
let p = document.createElement("p");
let text2 = document.createTextNode(" 50% Fullstack Developer");
p.appendChild(text2);
let img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

document.body.appendChild(element);
element.appendChild(h);
element.appendChild(p);
element.appendChild(img);

p.style.color = `red`;
element.style.height = `100vh`;
element.style.display="flex";
element.style.flexDirection= "column";
element.style.alignItems = `center`;
element.style.justifyContent = `center`;
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const obj = {};
let str = array.join("").split(` `).join(``).toLowerCase();
console.log(str);

for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
        obj[str[i]] +=1;
    }
    else { obj[str[i]] = 1; }
}
console.log(obj);









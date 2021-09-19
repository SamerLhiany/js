// /*a.1*/
const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];
foods.sort();
console.log(foods);

// /*a.2*/
console.log(foods.reverse());

/*b.1*/

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",

];
foodsWithUpperCase.sort(function(a,b) {
   return a.localeCompare(b)

});
console.log(foodsWithUpperCase);


// /*b.2*/
console.log(foodsWithUpperCase.reverse());



// /*c.1*/
const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"];

    words.sort(function(a, b) {return b.length - a.length})[0];
    console.log(words);
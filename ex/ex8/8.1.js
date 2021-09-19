let obj1 = {name: 'samer'};
let obj2 = {name: 'nasreen'};
let obj3 = {name: 'rawi'};
let myMap = new Map();

myMap.set(obj1, 1);
myMap.set(obj2, 2);
myMap.set(obj3, 3);

console.log(myMap);

for (let [obj,value] of myMap ){
    console.log(obj.name + ':' + value);
}
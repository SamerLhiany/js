const people = ["Greg", "Mary", "Devon", "James"];

for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}

people.shift();
console.log(people);

people.pop();
console.log(people);

people.unshift(`Matt`);
console.log(people);

people.push(`samer`);
console.log(people);

for(let i=0; i<people.length;i++){
    console.log(people[i]);
    if (people[i] === `Mary`) {
        i=people.length;
    } 
}

console.log(people.slice(2));

console.log(people.indexOf("Mary"));

console.log(people.indexOf("FOO"));

let people1 = ["Greg", "Mary", "Devon", "James"];
console.log(people1);

people1.splice(people1.indexOf("Devon"),1 ,"Elizabeth","Artie" );
console.log(people1);

let withBob = people.concat(["Bob"]);

console.log(withBob);

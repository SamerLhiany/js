let arr = Array(10).fill({});
arr[0].samer = "dev";
console.log(arr);
console.log(Object.values(arr[0])[0]);
let temp=arr.map(val => Object.values(val)[0])
console.log(temp);


let arr1 =  Array.from({length: 100}, (v, i) => i+1);
console.log(arr1);



function toObject(arr1) {
    let obj = {};
    for (var i = 0; i < arr1.length; ++i)
      obj[i] = arr1[i];
    return obj;
  }

console.log(toObject(arr1));



console.log(x);

let oldArray = [1, 2, 3, 4, 5];

console.log({oldArray});

let newArray = oldArray.slice();
newArray.push(6);

console.log({newArray});


let reef = ["dog","rabit"]

console.log(Array.isArray(reef));

let x = reef;



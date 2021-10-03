/* 1 */
// console.log(this);

// Because this is a global scope this will point to window 



// /* 2 */
// const myObj = {
//     name: "Timmy",
//     greet: () => {
//     console.log(`Hello ${this.name}`);
//     },
//    };
//    myObj.greet();

   // Because  arrow function  is a global scope this will point to window




// /* 3 */
// const myFuncDec = function () {
//     console.log(this);
//    };

//    the function is a global functio, but if we Put it inside an object it will log the object
   



// /* 4 */
// const myFuncArrow = () => {
//     console.log(this);
//    };
//    myFuncArrow();
   
//    arrow function is a global function . this will point to window




// /* 5 */
// document.querySelector(".element").addEventListener(() => {
//     console.log(this);
//    });

//    arrow function is a global function . this will point to window
/* 1 */ 

// var b = 1;
// function someFunction(number) {
//  function otherFunction(input) {
//  return b;
//  }
//  b = 5;
//  return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

//otherFunction will return 5 to the  someFunction that return it to ---->>> firstResult  that return ----->>> to result 




/* 2 */

// var a = 1;
// function b2() {
//  a = 10;
//  return;
//  function a() { }
// }
// b2();
// console.log(a);

// result = 1 --->> the "a" variable will be changed localy in function b2 = 10 , and when it will get out ---->>> functiion it will get the global value = 1




/* 3 */

let i;
for ( i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
}

//with the firt let i --->> the function will log 333 --->> without the first let i the function will log 0 1 2 
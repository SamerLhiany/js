// let arr = [1, 2, 3,4, 5];

// function doubleValues (arr){
//    let newarr =  arr.map(function(Values) {
//      newarr.push(Values);
//    }) 
//    return (newarr );
// }

function doubleValues(array) {
  var newArray = [];
  array.forEach(function (el) { newArray.push(el, el); });    
  return newArray;
}

console.log(doubleValues([1,2,3]));

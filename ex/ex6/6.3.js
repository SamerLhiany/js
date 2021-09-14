let arr1 = ["ssaasfdkjsaf", "doooo", "dofoijoo","ro"] ;
function arrayLengthcount (arr) {
    let newarr = [];
    for (let i=0 ; i<arr.length ; i++) {
        newarr.push(arr[i].length);
    }
    return (newarr);
}

console.log(arrayLengthcount (arr1));
const arr = [1,7,3,0,-5,7,3,9];
for (let i=0 ; i<arr.length ; i++) {
    console.log(arr[i]);
}

function arrayLength(arr){
    let counter = 0;
    arr.forEach((array)=>{
        counter ++;
    
})
return (`the length of the aryy is ${counter}`) ;
}

console.log(arrayLength(arr));

function arraySum (arr1) {
    let sum=0;
    arr1.forEach((value)=>{
        sum = sum + value
    } )
    return sum;
}

console.log(`the sum of the array is ${arraySum (arr) }`);

function arrayMulti (samer) {
    let array = [];
    for (let i=0 ; i<samer.length ; i++){
    array.push(samer[i]*2);
    
}

    return array;
}
 console.log (arrayMulti (arr) );
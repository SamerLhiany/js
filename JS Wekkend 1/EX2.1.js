function sumTwoSmallestNumbers(numbers) {
    let ordered = numbers.sort(function (a, b) { return a - b; });
    let sum = 0;
console.log(ordered);
    for (i = 0; i < ordered.length; i++) {
        if (ordered[0] > 0) {
            sum = numbers[0]+numbers[1];
        }
        else  {
            sum = numbers[1]+numbers[2];
        }
        }
    
    return sum;
}


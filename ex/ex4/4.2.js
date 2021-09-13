function numtoLettero(num) {
    if (num ==0 && num < 65) {
        console.log("F");
    }
    else if (num == 65 && num < 70) {
        console.log("D");
    }
    else if (num == 70 && num < 80) {
        console.log("C");
    }
    else if (num == 80 && num < 90) {
        console.log("B");
    }
    else if (num == 90 && num < 101) {
        console.log("A");
    }
    else {
        console.log(`not a letter`)
    }
}
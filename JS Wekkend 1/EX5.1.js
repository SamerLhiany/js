function straightforward (string) {
    if (string.length < 3) {
        console.log(`the string less than 3 char`);
    }
    else {
    string = string.substring(0, string.length - 1).substring(1);
    console.log(string);
    }
}



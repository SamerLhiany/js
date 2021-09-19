/*1*/
function isString(str, callback) {
    if (typeof (str) === 'string') {
        console.log(123);
    }
    else {
        callback(str);
    }
}

function checkifstring(value) {
    console.log(value);

}

/*2*/
function firstWordUpperCase(str, callback) {
    let arr = str.split(" ");
    arr[0] =  arr[0].toUpperCase ();
    callback(arr); }



function dashes(sentence) {
    console.log(sentence.join('-'));
}

/*3*/
firstWordUpperCase(`samer will be the best developer `, dashes);

/*4*/
function isString(name, callback) {
    if (typeof (name) === 'string') {
        console.log('The name is string');
    }
    else {
        callback(name);
    }
}

function ifstring(value) {
    console.log(value)
}

isString('samer', ifstring);


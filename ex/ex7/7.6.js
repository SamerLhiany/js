let obj = {
    top_dev : 'samer'
}
console.log(obj);

function objswapp (obj) {
    let obj2 = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj2[obj[key]]=key;
            
        }
    }
     return obj = {samer : "top_dev"}
}
console.log(objswapp (obj));




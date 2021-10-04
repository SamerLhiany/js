function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        let newarr = arr.map(element => {
            if (typeof element != `string`) {
                reject(`arr contain element that not a stirng`)
            }
            else {
                return element.toUpperCase();
            }
        });
        resolve(newarr)
    });
}

function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (arr) {
            arr.sort()
            resolve(arr);
        }
        else reject(`asad humos & pizza`)
    })}

makeAllCaps([`samer`, `rawi`,`ahmd`, `itay`]).then((result)=> {
    sortWords(result).then((data)=>{
        console.log(data);
    })
}) .catch((error)=>console.log(error))

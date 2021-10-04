function greater10(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 10) {
                resolve(`${number} greater than 10`)
            }
            else if (number === 10) {
                reject(`${number} equal to 10`)
            }
            else if (number < 10) {
                reject(`${number} less than 10`)
            }
        }, 1000)
    });
}

    greater10(9).then((request) => {
        console.log(request)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log(`the end`)
    })

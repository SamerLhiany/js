// // const numberOfSib = Number(prompt("enter something"))
//
// const numSiblings = Number("1")
//
// console.log(Number('a'))
// // console.log(Number("1"))
// // console.log(Number("1.34"))
// // console.log(parseInt("1"))
// // console.log(parseInt("1.34"))
//
// let number = "3.41";
// if (number.indexOf('.') > -1) {
//     parseFloat(number)
// } else {
//     parseInt(number)
// }
//
//
// if (numSiblings === 1) {
//     console.log("1 sibling!")
// } else if (numSiblings > 1) {
//     console.log("More than 1 sibling")
// } else {
//     console.log("No siblings")
// }


//4.3

function avgTeam(points1, points2, points3) {
    return (points3 + points1 + points2) / 3
}

let johnTeam = avgTeam(89, 120, 103);
let mikeTeam = avgTeam(116, 94, 123);
let maryTeam = avgTeam(97, 134, 105)
console.log("johnTeam :", johnTeam)
console.log("mikeTeam :", mikeTeam)
console.log("maryTeam :", maryTeam)

function whoWin(johnTeam, mikeTeam, maryTeam) {
    let max = Math.max(johnTeam, mikeTeam, maryTeam)
    if (max === maryTeam) {
        console.log("maryTeam")
    } else if (max === mikeTeam) {
        console.log("mikeTeam")
    } else if (max === johnTeam) {
        console.log("johnTeam")
    } else if (mikeTeam === johnTeam || mikeTeam === maryTeam || johnTeam === maryTeam) {
        console.log("even")
    }


    //
    // if (johnTeam > mikeTeam && johnTeam > maryTeam) {
    //     console.log("johnTeam")
    // } else if (mikeTeam > johnTeam && mikeTeam > maryTeam) {
    //     console.log("mikeTeam")
    // } else if (maryTeam > mikeTeam && maryTeam > johnTeam) {
    //     console.log("maryTeam")
    // } else {
    //     console.log("even")
    // }
}

whoWin(johnTeam, mikeTeam, maryTeam);



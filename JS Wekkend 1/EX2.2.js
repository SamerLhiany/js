function btoint (arr) {
    let s = parseInt( arr.join(''), 2 );
    return s;
}

console.log(btoint ([0, 0, 1, 1]));
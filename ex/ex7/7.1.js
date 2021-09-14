const book = 
 {
    book_name  : `THE SUN ALSO RISES`,
    author_name  : `ERNEST HEMINGWAY`,
    publishing_year : 1930 ,
    numofpage : 130,
    book_color : `red`
    
}

function samer (samer) {
    return (`The book ${book.book_name} was written by ${book.author_name} in
    the year ${book.publishing_year}`)
}
console.log(samer (samer));

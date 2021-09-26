function findNextSquare(sqnum){
    let square;
    let nextsquare;
    if(Math.sqrt(sqnum)%1 ===0){
         square=Math.sqrt(sqnum)
         nextsquare=square+1
    }else{
        return -1;
    }
    return nextsquare*nextsquare;
}


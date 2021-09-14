const jumps = [5,5,8,7,-1,5];

function avgJumper (jumper){
    let count = 1;
    let sumcount = 0;
    let avg = [];

    for (let i=0; i<jumper.length ; i++) {
        let average = 0;
        if (count===3) {
            if (jumper[i]!==-1){
                sumcount ++;
                average = average + jumper[i];
            }
            if (jumper[i-1]!==-1){
                sumcount ++;
                average = average + jumper[i-1];
            }
            if (jumper[i-2]!==-1){
                sumcount ++;
                average = average + jumper[i-2];
            }
            average = average/sumcount;
            avg.push(average);
            count=1;
            sumcount = 0;
        }
        else
            count++;
    }
    return (avg);
}
let rawi=avgJumper(jumps); 
bestAvgJump(rawi);

function bestAvgJump (jm) {
    let maxavg = 0 ;
    for (let i=0;i<jm.length ;i++){
        if (jm[i]>maxavg){
            maxavg=jm[i];
        }
    }
    return maxavg;
}

console.log(bestAvgJump (rawi));
console.log(bestAvgJump (jumps));

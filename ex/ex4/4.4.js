function boom(n) {

    for (let i = 1; i <= n; i++) {
        if(i%7 !==0){
            console.log(i);
        }


        else if (i % 7 === 0 && i.toString().includes(`7`)) {
            console.log("boom boom :", i);
        }
        else {
            console.log("boom:", i)
        }

    }

}

boom(80);
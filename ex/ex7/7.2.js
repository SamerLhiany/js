const myCountry = {
    country : `israel` ,
    capital : `Jerusalem`,
    language : `Hebrew, arabic, english`,
    population : `9 million`,
    neighbours : `Lebanon, Syria, Jordan`
}

myCountry.describe = function () {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they
    have 3 neighbouring countries : ${this.neighbours} . and a capital called ${this.capital}  `);
}

myCountry.describe();
    

myCountry.checkIsland = function () {
    myCountry.isIsland = true;
    if(myCountry.neighbours.length = 0) {
        myCountry.isIsland=true;
    }
    else {
        myCountry.isIsland=false;
    }

    return myCountry.isIsland;
}

console.log(myCountry.checkIsland());



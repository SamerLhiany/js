function percentageOfWorld1 (country ,population) {
    let x = (population/7900)*100 
    x = x.toFixed(2);
    return `The world population is 7900 million people ${country} has ${x}% of the world population`
}

console.log(percentageOfWorld1("israel" ,70));
console.log(percentageOfWorld1( "England",550));
console.log(percentageOfWorld1("Germany" ,830));


function percentageOfWorld2(country ,population) {
    return `${percentageOfWorld1 (country ,population)}`;
}

console.log (percentageOfWorld2("world" ,7900));
console.log (percentageOfWorld2("usa" ,900));
console.log (percentageOfWorld2("canada" ,650));

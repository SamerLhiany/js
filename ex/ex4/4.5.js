function leap_year(year) {
    if (year % 4 == 0) {
        if (year % 400 == 0)
            console.log(`${year} It is indeed leap year`);
        else if (year % 100 == 0)
            console.log(`${year} This is not a leap year.`);
        else {
            console.log(`${year} It is indeed leap year`);
        }
    }
    else {
        console.log(`${year} It is indeed leap year`);
    }

}

leap_year(2304);
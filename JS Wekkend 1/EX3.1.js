function GrowthOfpopulation(people, percent, anotherpeople, finalpeople) {
    let i;
    for (i = 0; people < finalpeople; i++) {
        people = (people + ((people * percent) / 100) + anotherpeople);
    }
    return i;
}


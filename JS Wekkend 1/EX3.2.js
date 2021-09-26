function peopleinbus(busStops) {
    let inbus = 0;
    let outbus = 0;
    for (let i = 0; i < busStops.length; i++) {
        inbus += busStops[i][0];
        outbus += busStops[i][1];
    }
    return inbus - outbus;
}


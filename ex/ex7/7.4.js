const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    for (let i = 0; i < candyStore.candies.length; i++) {
        if (candyStore.candies[i].id === id) {
            return candyStore.candies[i];

        }
    }
    console.log("there are no this id in our store");
}

function getPrice(candyStore, id) {
    return (getCandy(candyStore, id).price);
}

function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({ name: "magnum", id: "y27", price: 8, amount: 2 });
}

function buy(candyStore, id) {
     candyStore.cashRegister = getPrice(candyStore, id)+ candyStore.cashRegister;
}


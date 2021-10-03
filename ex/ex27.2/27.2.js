class Pokemon {
    constructor(pokemonName, pokemonType, pokemonAttackList) {
        this.name = pokemonName;
        this.type = pokemonType;
        this.attackList = pokemonAttackList;
    }
    callPokemon(){
        console.log(`I choose you ${this.name}`);
    }
    attack(index){
        console.log(`${this.name} used ${this.attackList[index]}`);
    }
}

let pikachu = new Pokemon('Pikachu', 'Electric', ['Shock', 'Thunder']);
let mewtwo = new Pokemon('Mewtwo', 'Psychic', ['Confusion', 'Psystrike']);
let ditto = new Pokemon('Ditto', 'Normal', ['Transform', 'Mirror']);

pikachu.callPokemon();
ditto.attack(1);

// function attack (pokemonAttackList[]) {
//     if (pokemonAttackList.include(Shock || Thunder ) ){
//         console.log(Pikachu);
//     }
//     if (pokemonAttackList.include(Confusion || systrike ) ){
//         console.log(Mewtwo);
//     }
//     if (pokemonAttackList.include(Transform || Mirror ) ){
//         console.log(Ditto);
//     }

// }


// attack (pokemonAttackList[]);
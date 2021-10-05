const getIDs = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    })
}

const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
                const recipe = {
                    title: "Fresh tomato pasta",
                    publisher: "Pinchas Hodadad",
                };
                resolve(`${ID}: ${recipe.title}`);
            },1500,recipeID);
    });
};


let s = async () => {
    let id2 = await getIDs() ;
    let idTitle = await getRecipe (id2[2]);
    console.log(idTitle);
}
s();

function peopleWithAgeDrink(old) {
  if (old<14){
    return "drink toddy";
  }
  if (old>13 && old<18 ){
    return "drink coke";
  }
  if (old>17 && old<21){
    return "drink beer";
  }
  if (old>=21){
    return "drink whisky";
  }
  
};

console.log(peopleWithAgeDrink(21));
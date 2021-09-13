function area_circle_calculator(radius) {

  let Circle_Area = (radius*radius)*Math.PI;
    return Circle_Area;
}

console.log (area_circle_calculator(6));
console.log (area_circle_calculator(6).toFixed(2))
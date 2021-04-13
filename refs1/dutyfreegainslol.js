function dutyFree(normPrice, discount, hol){

  let finalPrice = normPrice-(normPrice*(1-(discount*.01))); 
  console.log(finalPrice);
    let anotherVar = hol / finalPrice;
    console.log(anotherVar);
  let x1 = Math.floor(anotherVar);
  console.log(x1);
  return x1;

}

//find amount saved per bottle
/**dividie by cost of holiday, round up.
 * 
 */
//If $10 bottle, 10% discount, $1 savings, 300 holiday, return 300;




console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24,35,3000),357);



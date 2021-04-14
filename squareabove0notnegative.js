const squareList = arr => {
    // Only change code below this line

    let newList1 = arr.filter(number=>number>0)
    .filter(number=>number.toFixed(0)==number)
    .map(item=>item*item);

    console.log(newList1);


    return newList1;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  const array1 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(array1);
  console.log(squaredIntegers);
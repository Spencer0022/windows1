export{}
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }
// console.log(rangeOfNumbers(35,35));
// console.log(rangeOfNumbers(25,70));

function recursive(num,){
    if (num<1) {
        return []; }
        else {
            var arr1 = recursive(num-1);
            arr1.push(num);
           return arr1;
        }

}

console.log(recursive(10));

// var arr2 = [1,2,3,4];
// arr2.push(5);
// console.log(arr2)

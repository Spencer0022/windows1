function chunkArrayInGroups(arr, size) {
  
    let x1 =[];
    for (let i=0;i<arr.length;i+=size){
        x1.push(arr.slice(i,i+size))
    }
    console.log(x1);
    return x1;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2); //[["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) //[[0, 1], [2, 3], [4, 5], [6, 7], [8]]
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

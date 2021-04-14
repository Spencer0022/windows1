let array1 = [10,5,8,'steven',null];
Array.prototype.myMap=function(callback){
    let newArray=[];
    this.forEach(function(x){
        newArray.push(callback(x))
    })

    return newArray;

}

let newArray2 = array1.myMap(item=>item+2);
console.log(newArray2);
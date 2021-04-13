function mutation(arr) {
   let x3=arr[0];
   let y3=arr[1];
   let y= y3.toLowerCase();

   let y2= y.split("");
   let x = x3.toLowerCase();
   console.log(y2);
   console.log(arr)
   let result1=true; 
   for (let i=0;i<y2.length;i++){
        if (x.indexOf(y2[i]) == -1){
           result1=false;
        }
    }
    console.log(result1);
    return result1;
  }
  
  mutation(["hello", "hey"]); //false
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // true
  mutation(["hello", "Hello"])






  /**Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */
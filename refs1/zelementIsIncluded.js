const tags = [
    ["javascript", "es6"],
    ["css", "flexbox"],
    ["html", "web-browser"]
  ];
  
  const fruits = [
    { title: "Orange", quantity: 10 },
    { title: "Banana", quantity: 5 },
    { title: "Apple", quantity: 25 }
  ];
  
  const primitiveTypesArray = [
    25,
    "x",
    true,
    undefined,
    null
  ];
 
// const elementIsIncluded = (searchElement,array) =>{
//     if (typeof searchElement !== 'object') {
//         return array.includes(searchElement);
//     }

//     if (typeof searchElement === 'object') {
//         return array.map(element => JSON.stringify(element)).includes(JSON.stringify(searchElement));
//     }
// }

const elementIsIncluded = (searchElement,array) => {
  if (typeof searchElement !== 'object') { 
    return array.includes(searchElement);
  }
  if (typeof searchElement === 'object') {
    return array.map(element => JSON.stringify(element)).includes(JSON.stringify(searchElement));
  }
}


  
  console.log(elementIsIncluded(["css", "flexbox"], tags)); // true
  
  console.log(elementIsIncluded(["flexbox", "css"], tags)); // false
  
  console.log(
    elementIsIncluded(
      { title: "Apple", quantity: 25 },
      fruits
    )
  ); // true
  
  console.log(elementIsIncluded({ title: "Banana" }, fruits)); // false
  
  console.log(elementIsIncluded(25, primitiveTypesArray)); // true
  

  


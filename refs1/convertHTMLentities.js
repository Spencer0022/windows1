function convertHTML(str) {
  
  let newString1 = str.split("");
  for (let i=0;i<newString1.length;i++){
    switch(newString1[i]){
      case '&':
        newString1[i] = '&amp;'
        break;
      case '<':
        newString1[i] = '&lt;';
        break;
      case '>':
        newString1[i]= '&gt;';
        break;
      case "'":
        newString1[i] = '&apos;'
        break;
      case '"':
        newString1[i] = '&quot;';
        break;
    }
  }
  let newString2 = newString1.join("")
  console.log(newString2);
  return newString2;
}
convertHTML("Dolce & Gabbana");
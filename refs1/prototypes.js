function Dog(name) {
    this.name = name;
  } //setting initial prototype
  
  // Only change code below this line
  Dog.prototype = { //adding more to the prototype
    constructor:Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

function obj12(name){
  this.name = name;

};
console.log(Object.prototype.isPrototypeOf(obj12.prototype));
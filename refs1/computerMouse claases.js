class ComputerAccessories {
    constructor(props){
        this.compatibility = props.compatibility || ["PC", "Mac"];
}
compatibilityInfo(){
    this.compatibility.forEach(el => console.log(`Accessory is compatible with ${el}`))
}
}

class ComputerMouse extends ComputerAccessories{
    constructor(props){
        super(props);
        this.type = props.type
    }
    mouseInfo(){
        console.log(`Type of the mouse is ${this.type}.`)
    }
};

const myMouse = new ComputerMouse({
    compatibility: ["Mac", "PC"],
    type: "Optical"
});

console.log(myMouse);
myMouse.compatibilityInfo();
myMouse.mouseInfo();

// class ComputerMouse extends ComputerAccessories{
//     constructor(props){
//         this.name = props.name || "n/a"
//         this.color = props.color || "n/a"
//         this.interface = props.interface || "n/a"
//     }
//     mouseInfo(){
//         console.log(`Type of the mouse is ${this.interface} and color is ${this.color}.`)
//     }
//     changeMouseInterface(newInterface){
//         this.interface = newInterface;
//     }

// }


// const propsForBluetoothMouse = {
//     name: "Logitech 420",
//     color: "blue",
//     interface: "bluetooth"
// }

// const logitech420 = new ComputerMouse(propsForBluetoothMouse);
// console.log(logitech420);

// logitech420.changeMouseInterface("wired");
// console.log(logitech420);


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
class Product{
    constructor(props){
        this.price = props.price
    }
    priceInfo(){console.log(`Price of the product is ${this.price}`);
    } ;
};

class ElectricDevice extends Product{
    constructor(props){
        super(props);
        this.energyEfficiencyClass = props.energyEfficiencyClass;
    };
    energyInfo(){
        console.log(
            `Energy Efficiency Class is ${this.energyEfficiencyClass}.`
        );
    };
}

class TV extends ElectricDevice{
    constructor(props){
        super(props);
        this.model = props.model;
        this.diagonal = props.diagonal;
    }

}
  
  const propsForMyTv = {
    model: "A1620",
    price: 1200,
    energyEfficiencyClass: "A+",
    diagonal: 42
  };
  
  const myTV = new TV(propsForMyTv);
  
  /**
   * VERIFICATION
   */
  console.log(myTV);
  /* {
    model: "A1620",
    price: 1200,
    energyEfficiencyClass: "A+",
    diagonal: 42,
    __proto__: ...
  } */
  
  myTV.energyInfo(); // "Energy Efficiency Class is A+"
  
  myTV.priceInfo(); // Price of the product is 1200
  
  myTV instanceof TV; // true
  myTV instanceof ElectricDevice; // true
  myTV instanceof Product; // true
  myTV instanceof Object; // true
  